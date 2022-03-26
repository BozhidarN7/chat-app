using ChatApp.Core.Models;

namespace ChatApp.Core.Contracts
{
    public interface IAuthenticationService
    {
        public Task<bool> Login(LoginCredentialsModel credentials);

        public Task<bool> Register(RegisterCredentialsModel credentials);
        public Task<string> CreateToken();

    }
}
