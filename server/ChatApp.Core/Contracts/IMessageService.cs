using ChatApp.Core.Models.OutputDTOs;

namespace ChatApp.Core.Contracts
{
    public interface IMessageService
    {
        public Task<IEnumerable<MessageDTO>> GetRoomMessagesAsync(string roomId, int page);
    }
}
