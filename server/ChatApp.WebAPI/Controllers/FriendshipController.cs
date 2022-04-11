﻿using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/friendship-requests")]
    [ApiController]
    public class FriendshipController : ControllerBase
    {
        private readonly IFriendshipService friendshipService;

        public FriendshipController(IFriendshipService friendshipService)
        {
            this.friendshipService = friendshipService;
        }

        [HttpGet("new/{friendshipId}"), Authorize]
        public async Task<IActionResult> GetNewFriendshipRequestAsync(string friendshipId)
        {
            FriendshipsDTO request = await friendshipService.GetNewFriendshipRequestAsync(friendshipId);

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
        public async Task<IActionResult> AnswerToFriendshipRequestAsync(string friendshipId, [FromBody] FriendshipAnswer answer)
        {
            string res = await friendshipService.AnsewrToFriendshipRequestAsync(friendshipId, answer.Answer);

            if (res != "")
            {
                return BadRequest(res);
            }

            return NoContent();
        }
    }
}
