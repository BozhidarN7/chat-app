
using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/auth")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthenticationController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginCredentialsModel credentials)
        {
            if (!ModelState.IsValid) return BadRequest();

            (ApplicationUser user, bool isSuccessful) = await _authenticationService.Login(credentials);

            if (!isSuccessful) return Unauthorized();


            return Ok(new
            {
                success = true,
                message = "User login successfully",
                data = new
                {
                    user = new UserDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email
                    },
                    token = await _authenticationService.CreateToken()
                }
            });

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterCredentialsModel credentials)
        {
            if (!ModelState.IsValid) return BadRequest();

            (ApplicationUser user, bool isSuccessful) = await _authenticationService.Register(credentials);

            if (!isSuccessful) return BadRequest();

            return Ok(new
            {
                success = true,
                message = "User register successfully",
                data = new
                {
                    user = new UserDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email
                    },
                    token = await _authenticationService.CreateToken()
                }
            });

        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok(new { message = "successs" });
        }
    }
}
