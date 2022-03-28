using ChatApp.Infrastructure.Data.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp.Core.Contracts
{
    public interface IUserService
    {
        Task<(ApplicationUser, bool)> GetUser(string id);
        Task<IEnumerable<ApplicationUser>> GetAllUsers();
    }
}
