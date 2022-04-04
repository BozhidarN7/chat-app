using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.WebAPI.Hubs
{
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

            await Clients.User(receiverId).SendAsync("ReceiveInvitation", senderId);
        }

        public async Task AddToFriends(string fullName, string senderId)
        { 
            List<ApplicationUser> users = await repo.All<ApplicationUser>().ToListAsync();
            ApplicationUser invitedUser = users.FirstOrDefault(u => $"{u.FirstName} {u.LastName}" == fullName);
            ApplicationUser senderUser = users.FirstOrDefault(u => u.Id == senderId);

            IEnumerable<FriendsDTO> friends = await userService.GetFriends(senderId);
            bool isFriend = friends.FirstOrDefault(u => u.Id == invitedUser.Id) != null ? true : false;

            if (isFriend)
            {
                return;
            }


            FriendShip friendShip = new FriendShip();
            friendShip.UserSendId = senderId;
            friendShip.UserReceiveId = invitedUser.Id;

            UsersRooms userRoom1 = new UsersRooms();
            userRoom1.UserId = invitedUser.Id;

            UsersRooms userRoom2 = new UsersRooms();
            userRoom2.UserId = senderUser.Id;

            Room room = new Room();
            room.UsersRooms.Add(userRoom1);
            room.UsersRooms.Add(userRoom2);

            friendShip.RoomId = room.Id.ToString();


            await repo.AddAsync(room);
            await repo.AddAsync(userRoom1);
            await repo.AddAsync(userRoom2);
            await repo.AddAsync(friendShip);

            await repo.SaveChangesAsync();

            await Clients.All.SendAsync("ReceiveInvitation", $"{fullName}");

        }
        public async Task OpenChatRoom(UserConnectionModel userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.RoomId);

            // TODO Send the previous messages
            List<Message> messages = await repo.All<Message>().Where(m => m.RoomId == Guid.Parse(userConnection.RoomId)).ToListAsync();
            await Clients.Group(userConnection.RoomId).SendAsync("PreviousConversation", messages);
        }

        public async Task SendMessage(UserConnectionModel userConnection, string message)
        {
            List<ApplicationUser> users = await repo.All<ApplicationUser>().ToListAsync();
            ApplicationUser user = users.FirstOrDefault(u => $"{u.FirstName} {u.LastName}" == userConnection.FullName);
            Message newMessage = new Message
            {
                Text = message,
                RoomId = Guid.Parse(userConnection.RoomId),
                UserId = user.Id,
                DateAndTime = DateTime.Now
            };

            await repo.AddAsync(newMessage);
            await repo.SaveChangesAsync();

            await Clients.Group(userConnection.RoomId).SendAsync("ReceiveMessage", userConnection.FullName, message);
        }
    }
}
