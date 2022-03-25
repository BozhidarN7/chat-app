using ChatApp.WebAPI.Models;

namespace ChatApp.WebAPI.Services
{
    public interface IAuthenticationService
    {
        public Task<bool> ValidateCredentials(AuthCredentials credentials);
    }
}
