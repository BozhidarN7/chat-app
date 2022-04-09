using ChatApp.Core.Models;

namespace ChatApp.Core.Contracts
{
    public interface IRoomService
    {
        public Task SaveFile(string roomId, FileUploadModel model);
    }
}
