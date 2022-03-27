using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Http;
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
        public async Task<IActionResult> GetUser(string id)
        {

            (ApplicationUser user, bool isSuccessful) = await userService.GetUser(id);

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
                        Email = user.Email
                    },
                }
            });
        }
    }
}
