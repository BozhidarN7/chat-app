using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.Identity;

namespace ChatApp.Core.Contracts
{
    public interface IUserService
    {
        Task<(ApplicationUser, bool)> GetUserAsync(string id);

        Task<IEnumerable<ApplicationUser>> GetAllUsersAsync(string fullName);

        Task<IEnumerable<FriendsDTO>> GetFriendsAsync(string id);

        Task<IEnumerable<FriendshipsDTO>> GetNewFriendshipRequestsAsync(string id);

        Task<IEnumerable<ChatDTO>> GetUserChatRoomsAsync(string id);
    }
}
