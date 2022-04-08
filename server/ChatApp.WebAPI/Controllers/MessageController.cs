using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/messages")]
    [ApiController]
    public class MessageController : Controller
    {
        private readonly IMessageService messageService;
        private readonly IUserRoomService userRoomService;

        public MessageController(IMessageService messageService, IUserRoomService userRoomService)
        {
            this.messageService = messageService;
            this.userRoomService = userRoomService;
        }

        [HttpGet("{roomId}"), Authorize]
        public async Task<IActionResult> GetRoomMessages(string roomId, [FromQuery] string userId,[FromQuery] int page)
        {
            try
            {
                bool isUserAuthorizedToViewMessages = await userRoomService.IsUserInRoom(roomId, userId);


                if (!isUserAuthorizedToViewMessages)
                {
                    return Unauthorized("You are not allowed to view this messages");
                }

                IEnumerable<MessageDTO> messages = await messageService.GetRoomMessagesAsync(roomId,page);

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = messages.Count(),
                        messages,
                    }
                });
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to return messages");
            }
        }
    }
}
