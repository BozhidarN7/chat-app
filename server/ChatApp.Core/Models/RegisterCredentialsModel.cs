using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp.Core.Models
{
    public class RegisterCredentialsModel
    {
        [Required]
        [StringLength(80, MinimumLength = 3, ErrorMessage = "{0} must be between {2} and {1} characters long")]
        public string FirstName { get; set; }

        [Required]
        [StringLength(80, MinimumLength = 3, ErrorMessage = "{0} must be between {2} and {1} characters long")]
        public string LastName { get; set; }

        [Required]
        [StringLength(345, ErrorMessage = "{0} is required")]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(80, MinimumLength = 3, ErrorMessage = "{0} must be between {2} and {1} characters long")]
        public string Password { get; set; }

        [Required]
        [Compare(nameof(Password), ErrorMessage = "Password and Confirm Password must be equal")]
        public string ConfirmPassword { get; set; }

    }
}
