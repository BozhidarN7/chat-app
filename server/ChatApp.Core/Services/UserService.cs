using ChatApp.Core.Contracts;
using ChatApp.Infrastructure.Data.Common;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
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
        private readonly IApplicationDbRepository repo;

        public UserService(UserManager<ApplicationUser> userManager, IApplicationDbRepository repo)
        {
            this.userManager = userManager;
            this.repo = repo;
        }

        public async Task<(ApplicationUser, bool)> GetUser(string id)
        {
            ApplicationUser user = await userManager.FindByIdAsync(id);

            return (user, user != null ? true : false);
        }

        public async Task<IEnumerable<ApplicationUser>> GetAllUsers()
        {
            IEnumerable<ApplicationUser> users = await repo.All<ApplicationUser>().ToListAsync();

            return users;
        }
    }
}
