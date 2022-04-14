using ChatApp.Core.Models.OutputDTOs.StatisticsDTOs;

namespace ChatApp.Core.Contracts
{
    public interface IAdminService
    {
        public Task<IEnumerable<MessagesStatisticDTO>> GetMessagesStatisticAsync();

        public Task<IEnumerable<NewUsersStatisticDTO>> GetNewlyRegisterUsersAsync();

        public Task<IEnumerable<UsersWithMostMessagesDTO>> GetUsersWithMostMessagesAsync();
    }
}
