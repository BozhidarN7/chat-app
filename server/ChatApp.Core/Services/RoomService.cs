using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data.MongoModels;
using Microsoft.AspNetCore.Http;
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

        public async Task<IEnumerable<RoomFileDTO>> GetFiles(string roomId)
        {
            return (await roomCollection.Find(r => r.RoomId == roomId)
                .ToListAsync())
                .Select(r => new RoomFileDTO
                {
                    DocumentId = r.Id.ToString(),
                    RoomId = r.RoomId,
                    File  = Convert.ToBase64String(r.File),
                    SenderFullName = r.SenderFullName,
                    SenderId = r.SenderId,
                    DateAndTime = r.DateAndTime
                });
        }

        public async Task SaveFile(string roomId, FileUploadModel model)
        {
            byte[] fileBytes = await ConverFileToByteArray(model.File);

            if (fileBytes == null)
            {
                throw new InvalidOperationException();
            }

            //Room room = await roomCollection.Find(r => r.RoomId == roomId).FirstOrDefaultAsync();
            await roomCollection.InsertOneAsync(new Room
            {
                RoomId = roomId,
                File = fileBytes,
                DateAndTime = DateTime.Now,
                SenderFullName = model.SenderFullName,
                SenderId = model.SenderId
            });

            //if (room == null)
            //{
            //    await roomCollection.InsertOneAsync(new Room
            //    {
            //        RoomId = roomId,
            //        Files = new List<byte[]>() { fileBytes },
            //        DateAndTime = DateTime.Now,
            //        SenderFullName = model.SenderFullName,
            //        SenderId = model.SenderId
            //    });
            //}
            //else
            //{
            //    FilterDefinition<Room> filter = Builders<Room>.Filter.Eq(e => e.RoomId, roomId);
            //    UpdateDefinition<Room> update = Builders<Room>.Update.Push(e => e.Files, fileBytes);

            //    await roomCollection.UpdateOneAsync(filter, update);
            //}
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
    }
}
