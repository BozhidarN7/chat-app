using ChatApp.Core.Contracts;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using ChatApp.Infrastructure.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Http;
using MongoDB.Driver;
using ChatApp.Infrastructure.Data.MongoCollections;

namespace ChatApp.Core.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IApplicationDbRepository repo;
        private readonly IMongoCollection<UserCollection> userCollection;

        public UserService(IMongoClient mongoClient, UserManager<ApplicationUser> userManager, IApplicationDbRepository repo)
        {
            IMongoDatabase database = mongoClient.GetDatabase("chat-app");
            userCollection = database.GetCollection<UserCollection>("users");
            this.userManager = userManager;
            this.repo = repo;
        }

        public async Task<(ApplicationUser, bool)> GetUserAsync(string id)
        {
            ApplicationUser user = await userManager.FindByIdAsync(id);

            return (user, user != null ? true : false);
        }

        public async Task<IEnumerable<ApplicationUser>> GetAllUsersAsync(string fullName)
        {
            if (fullName != "")
            {
                return await repo.All<ApplicationUser>()
                    .Where(u => u.FullName.Contains(fullName))
                    .ToListAsync();
            }
            return await repo.All<ApplicationUser>().ToListAsync();


        }
        public async Task<IEnumerable<FriendsDTO>> GetFriendsAsync(string id)
        {
            IEnumerable<Friendship> friendShips = await repo.All<Friendship>()
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
                    || fs.UserSendId == id && fs.UserReceiveId == u.Id).RoomId.ToString()
                });

        }

        public async Task<IEnumerable<FriendshipsDTO>> GetNewFriendshipRequestsAsync(string id)
        {
            try
            {
                return await repo.All<Friendship>()
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

        public async Task<IEnumerable<ChatDTO>> GetUserChatRoomsAsync(string id)
        {
            ApplicationUser? user = await repo.All<ApplicationUser>()
                .Include(u => u.UsersRooms)
                .FirstOrDefaultAsync(u => u.Id == id);

            List<UserRoom> usersRooms = user.UsersRooms
                 .Where(ur => ur.UserId == id)
                 .ToList();

            List<ChatDTO> chats = new List<ChatDTO>();

            foreach (UserRoom current in usersRooms)
            {
                UserRoom? shared = await repo.All<UserRoom>()
                    .Include(ur => ur.User)
                    .Include(ur => ur.Room)
                    .FirstOrDefaultAsync(ur => ur.RoomId == current.RoomId && ur.UserId != current.UserId);

                chats.Add(new ChatDTO
                {
                    FriendFullName = shared.User.FullName!,
                    FriendId = shared.UserId,
                    RoomId = shared.RoomId.ToString(),
                    Messages = new List<MessageDTO>()
                });

            }

            return chats;
        }

        public async Task<string> SaveUserProfileImageAsync(string id, IFormFile file)
        {
            UserCollection user = await userCollection.Find(u => u.UserId == id).FirstOrDefaultAsync();

            byte[] photo = await ConverFileToByteArrayAsync(file);

            if (photo == null)
            {
                return null;
            }

            if (user != null)
            {
                UpdateDefinition<UserCollection> update = Builders<UserCollection>.Update.Set(u => u.Photo, photo);
                await userCollection.FindOneAndUpdateAsync(u => u.UserId == id, update);
            }
            else
            {
                UserCollection newUser = new UserCollection()
                {
                    UserId = id,
                    Photo = photo
                };

                await userCollection.InsertOneAsync(newUser);
            }

            return Convert.ToBase64String(photo);
        }
        private async Task<byte[]> ConverFileToByteArrayAsync(IFormFile file)
        {
            if (file != null && file.Length > 0)
            {
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);
                    byte[] fileBytes = memoryStream.ToArray();
                    return fileBytes;
                }
            }
            return null;
        }
    }
}
