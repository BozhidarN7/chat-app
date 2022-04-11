
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
        public async Task<IActionResult> LoginAsync([FromBody] LoginCredentialsModel credentials)
        {
            if (!ModelState.IsValid) return BadRequest();

            LoggedUerDTO user = await _authenticationService.LoginAsync(credentials);

            if (user == null) return Unauthorized();


            return Ok(new
            {
                success = true,
                message = "User login successfully",
                data = user
            });

        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] RegisterCredentialsModel credentials)
        {
            if (!ModelState.IsValid) return BadRequest();

            ApplicationUser user = await _authenticationService.RegisterAsync(credentials);

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
        public async Task<IActionResult> RevokeAsync(string id)
        {
            bool isSuccessful = await _authenticationService.RevokeUserRefreshTokenAsync(id);

            if (!isSuccessful) return BadRequest("Invalid user id");

            return NoContent();
        }

        [HttpPost]
        [Route("refresh-token")]
        public async Task<IActionResult> RefreshTokenAsync([FromBody] TokenModel tokenModel)
        {
            if (!ModelState.IsValid || tokenModel == null)
            {
                return BadRequest("Invalid client request");
            }

            TokenModel newTokenModel = await _authenticationService.CreateNewTokenAsync(tokenModel);

            if (newTokenModel == null) return BadRequest("Invalid access token or refresh token");

            return Ok(new
            {
                success = true,
                message = "Token updated successfully",
                data = tokenModel
            });
        }
    }
}
