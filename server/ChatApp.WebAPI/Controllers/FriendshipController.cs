using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/friendship-requests")]
    [ApiController]
    public class FriendshipController : Controller
    {
        private readonly IFriendshipService friendshipService;

        public FriendshipController(IFriendshipService friendshipService)
        {
            this.friendshipService = friendshipService;
        }

        [HttpGet("new/{friendshipId}"), Authorize]
        public async Task<IActionResult> GetNewFriendshipRequest(string friendshipId)
        {
            FriendshipsDTO request = await friendshipService.GetNewFriendshipRequest(friendshipId);

            if (request == null)
            {
                return BadRequest("Something went wrong");

            }

            return Ok(new
            {
                success = true,
                message = "Data received successfully",
                data = new
                {
                    FriendshipRequest = request
                }
            });
        }

        [HttpPost("{friendshipId}")]
        public async Task<IActionResult> AnswerToFriendshipRequest(string friendshipId, [FromBody] FriendshipAnswer answer)
        {
            string res = await friendshipService.AnsewrToFriendshipRequest(friendshipId, answer.Answer);

            if (res != "")
            {
                return BadRequest(res);
            }

            return NoContent();
        }
    }
}
