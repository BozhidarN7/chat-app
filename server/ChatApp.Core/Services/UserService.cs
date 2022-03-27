using ChatApp.Core.Contracts;
using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp.Core.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> userManager;

        public UserService(UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
        }

        public async Task<(ApplicationUser, bool)> GetUser(string id)
        {
            ApplicationUser user = await userManager.FindByIdAsync(id);

            return (user, user != null ? true : false);
        }
    }
}
