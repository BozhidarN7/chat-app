using System.ComponentModel.DataAnnotations;

namespace ChatApp.Core.Models
{
    public class LoginCredentialsModel
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
