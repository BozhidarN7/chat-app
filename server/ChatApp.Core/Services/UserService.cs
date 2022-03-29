using ChatApp.Core.Contracts;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using ChatApp.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ChatApp.Core.Models.OutputDTOs;

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
        public async Task<IEnumerable<FriendsDTO>> GetFriends(string id)
        {
            IEnumerable<FriendShip> friendShips = await repo.All<FriendShip>()
                .Where(fs => fs.UserReceiveId == id || fs.UserSendId == id)
                .ToListAsync();

            List<string> friendsIds = friendShips.Select(fs =>
            {
                if (fs.UserSendId != id)
                {
                    return fs.UserSendId;
                }
                return fs.UserReceiveId;
            })
                .ToList();


            List<ApplicationUser> friends = await repo.All<ApplicationUser>().ToListAsync();
                
            return 
                friends
                .Where(u => friendsIds.Contains(u.Id))
                .Select(u => new FriendsDTO
                {
                    Id = u.Id,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    Email = u.Email,
                    RoomId = friendShips.FirstOrDefault(fs => fs.UserSendId == u.Id && fs.UserReceiveId == id
                    || fs.UserSendId == id && fs.UserReceiveId == u.Id).RoomId
                });

        }
    }
}
