using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ChatApp.Core.Contracts
{
    public interface IAuthenticationService
    {
        public Task<LoggedUerDTO> Login(LoginCredentialsModel credentials);

        public Task<ApplicationUser> Register(RegisterCredentialsModel credentials);

        public Task<TokenModel> CreateNewToken(TokenModel tokenModel);

        public Task<bool> RevokeUserRefreshToken(string id);

    }
}
