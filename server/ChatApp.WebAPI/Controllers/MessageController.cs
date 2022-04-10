using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/messages")]
    [ApiController]
    public class MessageController : ControllerBase
    {
        private readonly IMessageService messageService;
        private readonly IUserRoomService userRoomService;

        public MessageController(IMessageService messageService, IUserRoomService userRoomService)
        {
            this.messageService = messageService;
            this.userRoomService = userRoomService;
        }
    }
}
