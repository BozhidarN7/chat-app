using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;

namespace ChatApp.Core.Contracts
{
    public interface IRoomService
    {
        public Task SaveFile(string roomId, FileUploadModel model);

        public Task<IEnumerable<RoomFileDTO>> GetFiles(string roomId);
    }
}
