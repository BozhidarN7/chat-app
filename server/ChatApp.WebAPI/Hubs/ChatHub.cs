using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.WebAPI.Hubs
{
    [Authorize]
    public class ChatHub : Hub
    {
        private readonly UserManager<ApplicationUser> userManager;
        private readonly IApplicationDbRepository repo;
        private readonly IUserService userService;

        public ChatHub(IApplicationDbRepository repo, IUserService userService, UserManager<ApplicationUser> userManager)
        {
            this.userManager = userManager;
            this.repo = repo;
            this.userService = userService;
        }

        public async Task SendFriendRequest(string senderId, string receiverId)
        {
            ApplicationUser user = await userManager.FindByIdAsync(receiverId);

            Friendship fs = new Friendship
            {
                UserSendId = senderId,
                UserReceiveId = receiverId
            };
            await repo.AddAsync(fs);
            await repo.SaveChangesAsync();

            await Clients.User(receiverId).SendAsync("ReceiveInvitation", fs.Id.ToString());
        }

        public async Task AcceptFriendship(string friendshipId)
        {
            Friendship fs = (await repo.All<Friendship>()
                .FirstOrDefaultAsync(fs => fs.Id.ToString() == friendshipId))!;
            ApplicationUser? sender = await repo.All<ApplicationUser>().FirstOrDefaultAsync(u => u.Id == fs.UserSendId);
            ApplicationUser? receiver = await repo.All<ApplicationUser>().FirstOrDefaultAsync(u => u.Id == fs.UserReceiveId);

            Room room = new Room();

            UserRoom userRoom1 = new UserRoom
            {
                UserId = fs.UserSendId,
                RoomId = room.Id
            };

            UserRoom userRoom2 = new UserRoom
            {
                UserId = fs.UserReceiveId,
                RoomId = room.Id
            };

            room.UsersRooms.Add(userRoom1);
            room.UsersRooms.Add(userRoom2);

            sender.UsersRooms.Add(userRoom1);
            receiver.UsersRooms.Add(userRoom2);

            fs.RoomId = room.Id;

            await repo.AddAsync(userRoom1);
            await repo.AddAsync(userRoom2);
            await repo.AddAsync(room);

            await repo.SaveChangesAsync();

            await Clients.Users(fs.UserSendId, fs.UserReceiveId).SendAsync("AcceptFriendship", new
            {
                SenderId = sender.Id,
                SenderFullName = sender.FullName,
                ReceiverId = receiver.Id,
                ReceiverFullName = receiver.FullName,
                RoomId = room.Id
            });
        }
        public async Task OpenChatRoom(UserConnectionModel userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.RoomId);

            List<MessageDTO> messages = await repo.All<Message>()
                .Include(m => m.User)
                .Where(m => m.RoomId == Guid.Parse(userConnection.RoomId))
                .OrderBy(m => m.DateAndTime)
                .Select(m => new MessageDTO
                {
                    Id = m.Id.ToString(),
                    Message = m.Text,
                    MessageDateAndTime = m.DateAndTime,
                    SenderFullName = m.User.FullName
                })
                .ToListAsync();
            await Clients.Group(userConnection.RoomId).SendAsync("PreviousConversation", userConnection.RoomId, messages);
        }

        public async Task SendMessage(UserConnectionModel userConnection, string message)
        {
            ApplicationUser user = await repo.All<ApplicationUser>()
                .FirstOrDefaultAsync(u => u.Id == userConnection.UserId);
            Message newMessage = new Message
            {
                Text = message,
                RoomId = Guid.Parse(userConnection.RoomId),
                UserId = user.Id,
                DateAndTime = DateTime.Now
            };

            await repo.AddAsync(newMessage);
            await repo.SaveChangesAsync();

            await Clients.Group(userConnection.RoomId).SendAsync("ReceiveMessage", newMessage.RoomId, new MessageDTO
            {
                Message = message,
                MessageDateAndTime = newMessage.DateAndTime,
                SenderFullName = user.FullName
            });
        }
    }
}
