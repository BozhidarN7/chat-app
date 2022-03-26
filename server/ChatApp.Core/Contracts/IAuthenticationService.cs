using ChatApp.Core.Models;

namespace ChatApp.Core.Contracts
{
    public interface IAuthenticationService
    {
        public Task<bool> ValidateCredentials(LoginCredentialsModel credentials);
        public Task<string> CreateToken();
    }
}
