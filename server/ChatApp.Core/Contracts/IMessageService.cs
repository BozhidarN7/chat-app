using ChatApp.Core.Models.OutputDTOs;

namespace ChatApp.Core.Contracts
{
    public interface IMessageService
    {
        public Task<bool> IsUserMessageCreatorAsync(string id, string userId);

        public Task DeleteMessageAsync(string id);

        public Task EditMessageAsync(string id, string newText);
    }
}
