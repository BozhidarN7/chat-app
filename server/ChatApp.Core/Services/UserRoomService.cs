using ChatApp.Core.Contracts;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Core.Services
{
    public class UserRoomService : IUserRoomService
    {
        private readonly IApplicationDbRepository repo;

        public UserRoomService(IApplicationDbRepository repo)
        {
            this.repo = repo;
        }

        public async Task<bool> IsUserInRoomAsync(string roomId, string userId)
        {
            return (await repo.All<UserRoom>()
                 .Where(ur => ur.RoomId == Guid.Parse(roomId) && ur.UserId == userId)
                 .ToListAsync())
                 .Count > 0 ? true : false;
        }
    }
}
