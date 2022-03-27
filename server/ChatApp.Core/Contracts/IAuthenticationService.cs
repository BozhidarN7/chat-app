using ChatApp.Core.Models;
using ChatApp.Infrastructure.Data.Identity;

namespace ChatApp.Core.Contracts
{
    public interface IAuthenticationService
    {
        public Task<(ApplicationUser,bool)> Login(LoginCredentialsModel credentials);

        public Task<(ApplicationUser,bool)> Register(RegisterCredentialsModel credentials);
        public Task<string> CreateToken();

    }
}
