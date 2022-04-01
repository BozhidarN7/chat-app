using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;

namespace ChatApp.Core.Contracts
{
    public interface IUserService
    {
        Task<(ApplicationUser, bool)> GetUser(string id);

        Task<IEnumerable<ApplicationUser>> GetAllUsers(string fullName);

        Task<IEnumerable<FriendsDTO>> GetFriends(string id);
    }
}
