using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.WebAPI.Hubs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using MongoDB.Bson;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/messages")]
    [ApiController]
    [Authorize]
    public class MessageController : ControllerBase
    {
        private readonly IHubContext<ChatHub> hubContext;
        private readonly IMessageService messageService;
        private readonly IUserRoomService userRoomService;
        private readonly IRoomService roomService;

        public MessageController(IHubContext<ChatHub> hubContext, IMessageService messageService, IUserRoomService userRoomService,
            IRoomService roomService)
        {
            this.hubContext = hubContext;
            this.messageService = messageService;
            this.userRoomService = userRoomService;
            this.roomService = roomService;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(string id, [FromQuery] string userId, [FromQuery] string type)
        {
            bool isUserAuthorizedToDeleteMessage = false;
            if (type == "text")
            {

                isUserAuthorizedToDeleteMessage = await messageService.IsUserMessageCreatorAsync(id, userId);
            }
            else
            {
                RoomFileDTO file = await roomService.GetFileAsync(ObjectId.Parse(id));
                isUserAuthorizedToDeleteMessage = file.SenderId == userId ? true : false;
            }

            if (!isUserAuthorizedToDeleteMessage)
            {
                return Unauthorized("You are not allowed to delete this message");
            }

            try
            {
                if (type == "text")
                {
                    Message message = await messageService.GetMessageAsync(id);
                    await messageService.DeleteMessageAsync(id);
                    await hubContext.Clients.Group(message.RoomId.ToString()).SendAsync("DeleteMessage", id, message.RoomId.ToString());
                }

                if (type == "file")
                {
                    RoomFileDTO file = await roomService.GetFileAsync(ObjectId.Parse(id));
                    await roomService.DeleteFileAsync(ObjectId.Parse(id));
                    await hubContext.Clients.Group(file.RoomId).SendAsync("DeleteMessage", id, file.RoomId.ToString());
                }


            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to delete message");
            }

            return Ok(new
            {
                success = true,
                message = "Message delete successfully"
            });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditMessage(string id, [FromQuery] string userId, [FromBody] EditMessageModel model)
        {
            bool isUserAuthorizedToDeleteMessage = await messageService.IsUserMessageCreatorAsync(id, userId);

            if (!isUserAuthorizedToDeleteMessage)
            {
                return Unauthorized("You are not allowed to edit this message");
            }

            try
            {
                Message message = await messageService.GetMessageAsync(id);
                await messageService.EditMessageAsync(id, model.NewText);
                await hubContext.Clients.Group(message.RoomId.ToString()).SendAsync("EditMessage", id, message.RoomId.ToString());
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to edit message");
            }

            return Ok(new
            {
                success = true,
                message = "Message edited successfully"
            });
        }
    }
}
