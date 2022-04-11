using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ChatApp.Core.Contracts
{
    public interface IAuthenticationService
    {
        public Task<LoggedUerDTO> LoginAsync(LoginCredentialsModel credentials);

        public Task<ApplicationUser> RegisterAsync(RegisterCredentialsModel credentials);

        public Task<TokenModel> CreateNewTokenAsync(TokenModel tokenModel);

        public Task<bool> RevokeUserRefreshTokenAsync(string id);

    }
}
