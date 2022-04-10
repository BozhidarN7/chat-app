using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.MongoModels;
using Microsoft.AspNetCore.Http;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChatApp.Core.Services
{
    public class RoomService : IRoomService
    {
        private IMongoCollection<Room> roomCollection;
        public RoomService(IMongoClient mongoClient)
        {
            IMongoDatabase database = mongoClient.GetDatabase("chat-app");
            roomCollection = database.GetCollection<Room>("rooms");
        }

        public async Task<RoomFileDTO> GetFile(ObjectId documentId)
        {
            Room document = await roomCollection.Find(r => r.Id == documentId).FirstOrDefaultAsync();
            return new RoomFileDTO
            {
                Id = document.Id.ToString(),
                RoomId = document.RoomId,
                File = Convert.ToBase64String(document.File),
                SenderFullName = document.SenderFullName,
                SenderId = document.SenderId,
                MessageDateAndTime = document.DateAndTime.ToLocalTime()
            };
        }

        public async Task<IEnumerable<RoomFileDTO>> GetFiles(string roomId)
        {
            return (await roomCollection.Find(r => r.RoomId.ToLower() == roomId.ToLower())
                .ToListAsync())
                .Select(r => new RoomFileDTO
                {
                    Id = r.Id.ToString(),
                    RoomId = r.RoomId,
                    File = Convert.ToBase64String(r.File),
                    SenderFullName = r.SenderFullName,
                    SenderId = r.SenderId,
                    MessageDateAndTime = r.DateAndTime.ToLocalTime()
                });
        }

        public async Task<ObjectId> SaveFile(string roomId, FileUploadModel model)
        {
            byte[] fileBytes = await ConverFileToByteArray(model.File);

            if (fileBytes == null)
            {
                throw new InvalidOperationException();
            }
            Room room = new Room
            {
                RoomId = roomId,
                File = fileBytes,
                DateAndTime = DateTime.Now,
                SenderFullName = model.SenderFullName,
                SenderId = model.SenderId
            };
            await roomCollection.InsertOneAsync(room);

            return room.Id;

            //FilterDefinition<Room> filter = Builders<Room>.Filter.Eq(e => e.RoomId, roomId);
            //    UpdateDefinition<Room> update = Builders<Room>.Update.Push(e => e.Files, fileBytes);
        }

        private async Task<byte[]> ConverFileToByteArray(IFormFile file)
        {
            if (file != null && file.Length > 0)
            {
                using (MemoryStream memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);
                    byte[] fileBytes = memoryStream.ToArray();
                    return fileBytes;
                }
            }
            return null;
        }
        private byte[] GetImage(string image)
        {
            byte[] bytes = null;

            if (!string.IsNullOrEmpty(image))
            {
                bytes = Convert.FromBase64String(image);
            }
            return bytes;
        }
    }
}
