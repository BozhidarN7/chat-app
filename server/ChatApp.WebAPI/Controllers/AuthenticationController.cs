
using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Authorization;
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

            LoggedUerDTO user = await _authenticationService.Login(credentials);

            if (user == null) return Unauthorized();


            return Ok(new
            {
                success = true,
                message = "User login successfully",
                data = user
            });

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterCredentialsModel credentials)
        {
            if (!ModelState.IsValid) return BadRequest();

            ApplicationUser user = await _authenticationService.Register(credentials);

            if (user == null) return BadRequest();

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
                        Email = user.Email,
                        FullName = user.FullName
                    }
                }
            });
        }

        [HttpPost("revoke/{id}"), Authorize]
        public async Task<IActionResult> Revoke(string id)
        {
            bool isSuccessful = await _authenticationService.RevokeUserRefreshToken(id);

            if (!isSuccessful) return BadRequest("Invalid user id");

            return NoContent();
        }

        [HttpPost]
        [Route("refresh-token")]
        public async Task<IActionResult> RefreshToken([FromBody] TokenModel tokenModel)
        {
            if (!ModelState.IsValid || tokenModel == null)
            {
                return BadRequest("Invalid client request");
            }

            TokenModel newTokenModel = await _authenticationService.CreateNewToken(tokenModel);

            if (newTokenModel == null) return BadRequest("Invalid access token or refresh token");

            return Ok(new
            {
                success = true,
                message = "Token updated successfully",
                data = tokenModel
            });
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok(new { message = "successs" });
        }
    }
}
