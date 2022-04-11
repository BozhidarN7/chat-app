using ChatApp.Core.Constants;
using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.MongoModels;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using MongoDB.Bson;
using MongoDB.Driver;

namespace ChatApp.Core.Services
{
    public class RoomService : IRoomService
    {
        private IMongoCollection<RoomCollection> roomCollection;
        private readonly IApplicationDbRepository repo;

        public RoomService(IMongoClient mongoClient, IApplicationDbRepository repo)
        {
            IMongoDatabase database = mongoClient.GetDatabase("chat-app");
            roomCollection = database.GetCollection<RoomCollection>("rooms");
            this.repo = repo;
        }

        public async Task<RoomFileDTO> GetFileAsync(ObjectId documentId)
        {
            RoomCollection document = await roomCollection.Find(r => r.Id == documentId).FirstOrDefaultAsync();
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

        public async Task<IEnumerable<RoomFileDTO>> GetFilesAsync(string roomId)
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

        public async Task<ObjectId> SaveFileAsync(string roomId, FileUploadModel model)
        {
            byte[] fileBytes = await ConverFileToByteArrayAsync(model.File);

            if (fileBytes == null)
            {
                throw new InvalidOperationException();
            }
            RoomCollection room = new RoomCollection
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

        public async Task<AllMessagesDTO> GetAllRoomMessagesAsync(string roomId, int page)
        {
            List<MessageDTO> messages = await repo.All<Message>()
                .Include(m => m.User)
                .Where(m => m.RoomId == Guid.Parse(roomId))
                .OrderByDescending(m => m.DateAndTime)
                .Skip((page - 1) * GlobalConstants.DefaulMessagesReturned)
                .Take(GlobalConstants.DefaulMessagesReturned)
                .Select(m => new MessageDTO
                {
                    Id = m.Id.ToString(),
                    Message = m.Text,
                    MessageDateAndTime = m.DateAndTime,
                    SenderFullName = m.User.FullName,

                })
                .Reverse()
                .ToListAsync();

            List<RoomFileDTO> roomFiles = (await GetFilesAsync(roomId))
                .OrderByDescending(r => r.MessageDateAndTime)
                .Skip((page - 1) * GlobalConstants.DefaulFilesReturned)
                .Take(GlobalConstants.DefaulFilesReturned)
                .Reverse()
                .ToList();

            return new AllMessagesDTO
            {
                Messages = messages,
                RoomFiles = roomFiles
            };
        }

        private async Task<byte[]> ConverFileToByteArrayAsync(IFormFile file)
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
