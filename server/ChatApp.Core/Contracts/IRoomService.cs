using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using MongoDB.Bson;

namespace ChatApp.Core.Contracts
{
    public interface IRoomService
    {
        public Task<ObjectId> SaveFileAsync(string roomId, FileUploadModel model);

        public Task<IEnumerable<RoomFileDTO>> GetFilesAsync(string roomId);

        public Task<RoomFileDTO> GetFileAsync(ObjectId documentId);

        public Task<AllMessagesDTO> GetAllRoomMessagesAsync(string roomId, int page);

        public Task DeleteFileAsync(ObjectId id);
    }
}
