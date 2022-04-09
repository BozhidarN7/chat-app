using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChatApp.Infrastructure.Data.MongoModels
{
    [BsonIgnoreExtraElements]
    public class Room
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string RoomId { get; set; }

        public byte[] File { get; set; }

        public string SenderFullName { get; set; }

        public string SenderId { get; set; }

        public DateTime DateAndTime { get; set; }
    }
}
