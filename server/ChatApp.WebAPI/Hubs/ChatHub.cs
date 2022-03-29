using ChatApp.Core.Models;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Identity;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.WebAPI.Hubs
{
    public class ChatHub : Hub
    {
        private readonly IApplicationDbRepository repo;

        public ChatHub(IApplicationDbRepository repo)
        {
            this.repo = repo;
        }

        //public async Task SendMessages(string message)
        //{
        //    await Clients.All.SendAsync("ReceiveMessage", "Hello from the server");
        //}

        public async Task AddToFriends(string fullName,string senderId)
        {
            List<ApplicationUser> users = await repo.All<ApplicationUser>().ToListAsync();
            ApplicationUser invitedUser = users.FirstOrDefault(u => $"{u.FirstName} {u.LastName}" == fullName);
            ApplicationUser senderUser = users.FirstOrDefault(u => u.Id == senderId);

            FriendShip friendShip = new FriendShip();
            friendShip.UserSendId = senderId;
            friendShip.UserReceiveId = invitedUser.Id;


            await repo.AddAsync(friendShip);
            await repo.SaveChangesAsync();

            await Clients.All.SendAsync("ReceiveInvitation", $"{fullName}");
        }

        public async Task OpenChatRoom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.RoomId);

            // TODO Send the previous messages
        }

        public async Task SendMessage(UserConnection userConnection, string message)
        {
            await Clients.Group(userConnection.RoomId).SendAsync("ReceiveMessage", userConnection.FullName, message);
        }
    }
}
