using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/messages")]
    [ApiController]
    [Authorize]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService messageService;
        private readonly IUserRoomService userRoomService;

        public MessageController(IMessageService messageService, IUserRoomService userRoomService)
        {
            this.messageService = messageService;
            this.userRoomService = userRoomService;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMessage(string id, [FromQuery] string userId)
        {
            bool isUserAuthorizedToDeleteMessage = await messageService.IsUserMessageCreatorAsync(id, userId);

            if (!isUserAuthorizedToDeleteMessage)
            {
                return Unauthorized("You are not allowed to delete this message");
            }

            try
            {
                await messageService.DeleteMessageAsync(id);
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

        [HttpPatch("{id}")]
        public async Task<IActionResult> EditMessage(string id, [FromQuery] string userId, [FromBody] EditMessageModel model)
        {
            bool isUserAuthorizedToDeleteMessage = await messageService.IsUserMessageCreatorAsync(id, userId);

            if (!isUserAuthorizedToDeleteMessage)
            {
                return Unauthorized("You are not allowed to edit this message");
            }

            try
            {
                await messageService.EditMessageAsync(id, model.NewText);
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
