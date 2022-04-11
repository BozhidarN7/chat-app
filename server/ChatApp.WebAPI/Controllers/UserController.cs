using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.WebAPI.ModelBinders;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService userService;
        public UserController(IUserService userService)
        {
            this.userService = userService;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserAsync(string id)
        {

            (ApplicationUser user, bool isSuccessful) = await userService.GetUserAsync(id);

            if (!isSuccessful) return BadRequest();

            return Ok(new
            {
                success = true,
                message = "Data received successfully",
                data = new
                {
                    user = new UserDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        FullName = user.FullName,
                        Email = user.Email,
                    },
                }
            });
        }

        [HttpGet, Authorize]
        public async Task<IActionResult> GetAllUsersAsync([ModelBinder(BinderType = typeof(QueryStringModelBinder))] string fullName = "")
        {
            IEnumerable<ApplicationUser> users = await userService.GetAllUsersAsync(fullName);

            return Ok(new
            {
                success = true,
                message = "Data received successfully",
                data = new
                {
                    users = users.Select(user => new UserDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email,
                        FullName = user.FullName
                    })
                }

            });
        }
        [HttpGet("{id}/friends"), Authorize]
        public async Task<IActionResult> GetFriendsAsync(string id)
        {
            IEnumerable<FriendsDTO> users = await userService.GetFriendsAsync(id);

            return Ok(new
            {
                success = true,
                message = "Data received successfully",
                data = new
                {
                    users = users.Select(user => new FriendsDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email,
                        FullName = user.FullName,
                        RoomId = user.RoomId
                    })
                }

            });
        }

        [HttpGet("{id}/friendship-requests/new"), Authorize]
        public async Task<IActionResult> GetNewFriendshipRequestsAsync(string id)
        {
            IEnumerable<FriendshipsDTO> requests = await userService.GetNewFriendshipRequestsAsync(id);

            if (requests == null)
            {
                return BadRequest("Something went wrong");
            }

            return Ok(new
            {
                success = true,
                message = "Data received successfully",
                data = new
                {
                    FriendShipRequests = requests
                }
            });
        }

        [HttpGet("{id}/rooms"), Authorize]
        public async Task<IActionResult> GetUserChatRoomsAsync(string id)
        {
           IEnumerable<ChatDTO> chats =  await userService.GetUserChatRoomsAsync(id);

            return Ok(new
            {
                success = true,
                message = "Data received successfully",
                data = chats
            });
        }
    }
}
