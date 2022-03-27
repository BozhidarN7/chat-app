
using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
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

            if (!await _authenticationService.Login(credentials)) return Unauthorized();


            return Ok(new { token = await _authenticationService.CreateToken() });

        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterCredentialsModel credentials)
        {
            if (!ModelState.IsValid) return BadRequest();

            if (! await _authenticationService.Register(credentials)) return BadRequest();

            return Ok(new { token = await _authenticationService.CreateToken() });

        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok(new { message = "successs" });
        }
    }
}
