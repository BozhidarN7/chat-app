
using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/auth")]
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

            if (!await _authenticationService.ValidateCredentials(credentials)) return Unauthorized();


            return Ok(new { token = await _authenticationService.CreateToken() });

        }
    }
}
