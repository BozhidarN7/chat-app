using ChatApp.Infrastructure.Data.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApp.Infrastructure.Data
{
    public class Message
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [StringLength(2000)]
        public string Text { get; set; }

        [Required]
        public DateTime DateAndTime { get; set; }

        [ForeignKey(nameof(Room))]
        public Guid RoomId { get; set; }

        public Room Room { get; set; }

        [ForeignKey(nameof(User))]
        public string UserId { get; set; }

        public ApplicationUser User { get; set; }
    }
}
