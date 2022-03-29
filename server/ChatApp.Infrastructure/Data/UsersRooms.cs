using ChatApp.Infrastructure.Data.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApp.Infrastructure.Data
{
    public class UsersRooms
    {
        [ForeignKey(nameof(User))]
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }

        [ForeignKey(nameof(Room))]
        public Guid RoomId { get; set; }

        public Room Room { get; set; }
    }
}
