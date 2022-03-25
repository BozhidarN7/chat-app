using System.ComponentModel.DataAnnotations;

namespace ChatApp.Infrastructure.Data
{
    public class Message
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [Required]
        [StringLength(600)]
        public string Text { get; set; }

        [Required]
        public DateTime DateAndTime { get; set; }
    }
}
