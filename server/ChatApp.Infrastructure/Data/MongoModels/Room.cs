using MongoDB.Bson.Serialization.Attributes;

namespace ChatApp.Infrastructure.Data.MongoModels
{
    [BsonIgnoreExtraElements]
    public class Room
    {
        public string RoomId { get; set; }

        public IEnumerable<byte[]> Files { get; set; }

        public string SenderFullName { get; set; }

        public string SenderId { get; set; }

        public DateTime DateAndTime { get; set; }
    }
}
