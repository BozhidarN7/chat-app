using ChatApp.Infrastructure.Data.Identity;
using ChatApp.WebAPI.Models;
using Microsoft.AspNetCore.Identity;

namespace ChatApp.WebAPI.Services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly UserManager<ApplicationUser> userManager;
        public AuthenticationService(UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
        }
        public async Task<bool> ValidateCredentials(AuthCredentials credentials)
        {
            ApplicationUser user = await userManager.FindByNameAsync(credentials.Username);

            return user != null && await userManager.CheckPasswordAsync(user, credentials.Password);
        }
    }
}
