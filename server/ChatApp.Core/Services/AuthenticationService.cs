using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ChatApp.Core.Services
{

    public class AuthenticationService : IAuthenticationService
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration config;
        private ApplicationUser user;

        public AuthenticationService(UserManager<ApplicationUser> userManager, IConfiguration config)
        {
            this.userManager = userManager;
            this.config = config;
        }
        public async Task<bool> ValidateCredentials(LoginCredentialsModel credentials)
        {
            user = await userManager.FindByEmailAsync(credentials.Email);

            return user != null && await userManager.CheckPasswordAsync(user, credentials.Password);
        }

        public async Task<string> CreateToken()
        {
            IConfigurationSection jwtSettings = config.GetSection("JwtSettings");

            List<Claim> claims = await GetClaims();

            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.GetSection("Key").Value));
            SigningCredentials signCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: jwtSettings.GetSection("Issuer").Value,
                audience: jwtSettings.GetSection("Audience").Value,
                claims: claims,
                expires: DateTime.Now.AddMinutes(1),
                signingCredentials: signCredentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<List<Claim>> GetClaims()
        {
            List<Claim> claims = new List<Claim> { new Claim(ClaimTypes.Name, user.UserName) };

            IList<string> roles = await userManager.GetRolesAsync(user);

            foreach (string role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;

        }
    }
}

