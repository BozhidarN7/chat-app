using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.WebAPI.Hubs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using MongoDB.Bson;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/rooms")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IHubContext<ChatHub> hubContext;
        private readonly IRoomService roomService;
        private readonly IUserRoomService userRoomService;
        private readonly IMessageService messageService;

        public RoomController(IHubContext<ChatHub> hubContext, IRoomService roomService, IUserRoomService userRoomService,
            IMessageService messageService)
        {
            this.hubContext = hubContext;
            this.roomService = roomService;
            this.userRoomService = userRoomService;
            this.messageService = messageService;
        }


        [HttpGet("{roomId}/messages"), Authorize]
        public async Task<IActionResult> GetRoomMessages(string roomId, [FromQuery] string userId, [FromQuery] int page)
        {
            try
            {
                bool isUserAuthorizedToViewMessages = await userRoomService.IsUserInRoomAsync(roomId, userId);


                if (!isUserAuthorizedToViewMessages)
                {
                    return Unauthorized("You are not allowed to view this messages");
                }

                AllMessagesDTO messages = await roomService.GetAllRoomMessagesAsync(roomId, page);

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = messages.Messages.Count + messages.RoomFiles.Count,
                        messages = messages.Messages,
                        files = messages.RoomFiles
                    }
                });
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to return messages");
            }
        }

        [HttpPost("{id}/files"), Authorize]
        public async Task<IActionResult> UploadFile(string id, [FromForm] FileUploadModel model)
        {
            try
            {
                ObjectId documentId = await roomService.SaveFileAsync(id, model);
                RoomFileDTO file = await roomService.GetFileAsync(documentId);
                await hubContext.Clients.Group(id).SendAsync("ReceiveMessage", id, file);

                return CreatedAtAction(nameof(UploadFile), new
                {
                    success = true,
                    message = "File uploaded successfully",
                });
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to upload file");
            }
        }

        [HttpGet("{id}/files"), Authorize]
        public async Task<IActionResult> GetFiles(string id)
        {
            try
            {
                IEnumerable<RoomFileDTO> files = await roomService.GetFilesAsync(id);

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = files.Count(),
                        files
                    }
                });
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to get files");
            }
        }
    }
}
