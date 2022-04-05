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

        public async Task<IEnumerable<ApplicationUser>> GetAllUsers(string fullName)
        {
            if (fullName != "")
            {
                return await repo.All<ApplicationUser>()
                    .Where(u => u.FullName.Contains(fullName))
                    .ToListAsync();
            }
            return await repo.All<ApplicationUser>().ToListAsync();


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

        public async Task<IEnumerable<FriendshipsDTO>> GetNewFriendshipRequests(string id)
        {
            try
            {
                return await repo.All<FriendShip>()
                    .Where(fs => fs.Accepted == false && fs.Rejected == false && fs.UserReceiveId == id)
                    .Select(fs => new FriendshipsDTO
                    {
                        FriendshipId = fs.Id.ToString(),
                        SenderId = fs.UserSendId,
                        SenderFullName = fs.UserSend.FullName!
                    })
                    .ToListAsync();
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<IEnumerable<ChatDTO>> GetUserChatRooms(string id)
        {
            ApplicationUser? user = await repo.All<ApplicationUser>()
                .FirstOrDefaultAsync(u => u.Id == id);

            List<UsersRooms> usersRooms = user.UsersRooms
                 .Where(ur => ur.UserId == id)
                 .ToList();

            List<ChatDTO> chats = new List<ChatDTO>();

            foreach (UsersRooms current in usersRooms)
            {
                UsersRooms? shared = await repo.All<UsersRooms>()
                    .FirstOrDefaultAsync(ur => ur.Room == current.Room && ur.UserId != current.UserId);

                chats.Add(new ChatDTO
                {
                    FriendFullName = shared.User.FullName!,
                    FriendId = shared.UserId,
                    RoomId = shared.UserId,
                });

            }

            return chats;
        }
    }
}
