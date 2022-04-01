﻿using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace ChatApp.Core.Services
{

    public class AuthenticationService : IAuthenticationService
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IConfiguration config;
        private readonly IApplicationDbRepository repo;
        private ApplicationUser user;

        public AuthenticationService(UserManager<ApplicationUser> userManager, IConfiguration config, IApplicationDbRepository repo)
        {
            this.userManager = userManager;
            this.config = config;
            this.repo = repo;
        }
        public async Task<LoggedUerDTO> Login(LoginCredentialsModel credentials)
        {
            user = await userManager.FindByEmailAsync(credentials.Email);

            if (user != null && await userManager.CheckPasswordAsync(user, credentials.Password))
            {
                JwtSecurityToken token = await CreateToken();
                string refreshfreshToken = GenerateRefreshToken();

                _ = int.TryParse(config["JwtSettings:RefreshTokenValidityInDays"], out int refreshTokenValidityInDays);

                user.RefreshToken = refreshfreshToken;
                user.RefreshTokenExpiryTime = DateTime.Now.AddDays(refreshTokenValidityInDays);

                await userManager.UpdateAsync(user);

                return new LoggedUerDTO
                {
                    User = new UserDTO
                    {
                        Id = user.Id,
                        FirstName = user.FirstName,
                        LastName = user.LastName,
                        Email = user.Email
                    },
                    Token = new JwtSecurityTokenHandler().WriteToken(token),
                    RefreshToken = refreshfreshToken,
                    Expiration = token.ValidTo
                };
            }

            return null;
        }
        public async Task<ApplicationUser> Register(RegisterCredentialsModel credentials)
        {
            user = await userManager.FindByEmailAsync(credentials.Email);
            if (user != null)
            {
                return null;
            }
            PasswordHasher<ApplicationUser> ph = new PasswordHasher<ApplicationUser>();

            user = new ApplicationUser
            {
                FirstName = credentials.FirstName,
                LastName = credentials.LastName,
                Email = credentials.Email,
                NormalizedEmail = credentials.Email.ToUpperInvariant(),
                SecurityStamp = Guid.NewGuid().ToString(),
                FullName = $"{credentials.FirstName} {credentials.LastName}"
            };

            user.PasswordHash = ph.HashPassword(user, credentials.Password);

            await repo.AddAsync(user);

            int res = await repo.SaveChangesAsync();

            if (res > 0)
            {
                return user;
            }
            return null;

        }
        public async Task<TokenModel> CreateNewToken(TokenModel tokenModel)
        {
            string? accessToken = tokenModel.AccessToken;
            string? refreshToken = tokenModel.RefreshToken;

            ClaimsPrincipal principal = GetPrincipalFromExpiredToken(accessToken);

            if (principal == null)
            {
                return null;
            }

            foreach (Claim claim in principal.Claims)
            {
                string type = claim.Type;
                string value = claim.Value;
            }

            string email = principal.Claims
                .FirstOrDefault(c => c.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress")
                .Value;

            user = await userManager.FindByEmailAsync(email);

            if (user == null || user.RefreshToken != refreshToken || user.RefreshTokenExpiryTime <= DateTime.Now)
            {
                return null;
            }

            JwtSecurityToken newAccessToken = await CreateToken();
            string newRefreshToken = GenerateRefreshToken();

            user.RefreshToken = newRefreshToken;
            await userManager.UpdateAsync(user);

            return new TokenModel
            {
                AccessToken = new JwtSecurityTokenHandler().WriteToken(newAccessToken),
                RefreshToken = newRefreshToken,
                Expiration = newAccessToken.ValidTo
            };
        }

        public async Task<bool> RevokeUserRefreshToken(string id)
        {
            user = await userManager.FindByIdAsync(id);

            if (user == null) return false;

            user.RefreshToken = null;
            await userManager.UpdateAsync(user);

            return true;
        }

        private async Task<JwtSecurityToken> CreateToken()
        {
            IConfigurationSection jwtSettings = config.GetSection("JwtSettings");

            List<Claim> claims = await GetClaims();

            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.GetSection("Key").Value));
            SigningCredentials signCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            _ = int.TryParse(config["JwtSettings:TokenValidityInMinutes"], out int tokenValidityInMinutes);

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: jwtSettings.GetSection("Issuer").Value,
                audience: jwtSettings.GetSection("Audience").Value,
                claims: claims,
                expires: DateTime.Now.AddMinutes(tokenValidityInMinutes),
                signingCredentials: signCredentials);

            return token;
        }

        private async Task<List<Claim>> GetClaims()
        {
            List<Claim> claims = new List<Claim> {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            IList<string> roles = await userManager.GetRolesAsync(user);

            foreach (string role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;
        }

        private ClaimsPrincipal GetPrincipalFromExpiredToken(string? token)
        {
            TokenValidationParameters tokenValidationParameters = new TokenValidationParameters
            {
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["JwtSettings:Key"])),
                ValidateLifetime = false
            };

            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            ClaimsPrincipal principal = tokenHandler.ValidateToken(token, tokenValidationParameters, out SecurityToken securityToken);
            if (securityToken is not JwtSecurityToken jwtSecurityToken ||
                !jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
                throw new SecurityTokenException("Invalid token");

            return principal;
        }
        private static string GenerateRefreshToken()
        {
            byte[] randomNumber = new byte[64];
            using RandomNumberGenerator rng = RandomNumberGenerator.Create();
            rng.GetBytes(randomNumber);

            return Convert.ToBase64String(randomNumber);
        }
    }
}

