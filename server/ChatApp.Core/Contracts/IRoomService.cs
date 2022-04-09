using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using MongoDB.Bson;

namespace ChatApp.Core.Contracts
{
    public interface IRoomService
    {
        public Task<ObjectId> SaveFile(string roomId, FileUploadModel model);

        public Task<IEnumerable<RoomFileDTO>> GetFiles(string roomId);

        public Task<RoomFileDTO> GetFile(ObjectId documentId);
    }
}
