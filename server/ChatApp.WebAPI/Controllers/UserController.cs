using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
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

        [HttpGet("{id}"), Authorize]
        public async Task<IActionResult> GetUser(string id)
        {
            try
            {

                (ApplicationUser user, bool isSuccessful) = await userService.GetUserAsync(id);

                if (!isSuccessful) return NotFound();

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
                            Roles = await userService.GetUserRolesAsync(user)
                        },
                    }
                });
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpGet, Authorize]
        public async Task<IActionResult> GetAllUsers([ModelBinder(BinderType = typeof(QueryStringModelBinder))] string fullName = "")
        {
            try
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
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }
        [HttpGet("{id}/friends"), Authorize]
        public async Task<IActionResult> GetFriends(string id)
        {
            try
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
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpGet("{id}/friendship-requests/new"), Authorize]
        public async Task<IActionResult> GetNewFriendshipRequests(string id)
        {
            try
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
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpGet("{id}/rooms"), Authorize]
        public async Task<IActionResult> GetUserChatRooms(string id)
        {
            try
            {
                IEnumerable<ChatDTO> chats = await userService.GetUserChatRoomsAsync(id);

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = chats
                });
            }
            catch (Exception)
            {
                return BadRequest("Something went wrong");
            }
        }

        [HttpPost("{id}/photo"), Authorize]
        public async Task<IActionResult> SaveUserProfileImage(string id, [FromForm] UserProfileImageModel model)
        {
            try
            {
                string profileImageString = await userService.SaveUserProfileImageAsync(id, model.Photo);

                if (profileImageString == null)
                {
                    throw new Exception();
                }

                return Ok(new
                {
                    success = true,
                    message = "Photo saved successfully",
                    data = new
                    {
                        profileImage = profileImageString
                    }
                });

            }
            catch (Exception)
            {
                return BadRequest("Did not manage to save photo");
            }
        }
        [HttpGet("{id}/photo"), Authorize]
        public async Task<IActionResult> GetUserProfileImage(string id)
        {
            try
            {
                string profileImageString = await userService.GetUserProfileImageAsync(id);

                if (profileImageString == null)
                {
                    return Ok(new
                    {
                        suceess = false,
                        message = "User does not have profile image"
                    });
                }

                return Ok(new
                {
                    success = true,
                    message = "Photo returned successfully",
                    data = new
                    {
                        profileImage = profileImageString
                    }
                });

            }
            catch (Exception)
            {
                return BadRequest("Did not manage to get photo");
            }
        }
    }
}
