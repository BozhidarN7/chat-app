using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace ChatApp.Infrastructure.Data.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            FriendShips = new HashSet<FriendShip>();
            UsersRooms = new HashSet<UsersRooms>();
        }

        [Required]
        [StringLength(80)]
        public string FirstName { get; set; }

        [Required]
        [StringLength(80)]
        public string LastName { get; set; }

        public string? FullName { get; set; }

        public string? RefreshToken { get; set; }

        public DateTime RefreshTokenExpiryTime { get; set; }

        public ICollection<FriendShip> FriendShips { get; set; }

        public ICollection<UsersRooms> UsersRooms { get; set; }
    }
}
