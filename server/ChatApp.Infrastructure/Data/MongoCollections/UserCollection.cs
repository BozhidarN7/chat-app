using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ChatApp.Infrastructure.Data.MongoCollections
{
    public class UserCollection
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string UserId { get; set; }

        public byte[] Photo { get; set; }
    }
}
