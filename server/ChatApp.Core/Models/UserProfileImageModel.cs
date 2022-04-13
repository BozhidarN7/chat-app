using Microsoft.AspNetCore.Http;

namespace ChatApp.Core.Models
{
    public class UserProfileImageModel
    {
        public IFormFile? Photo { get; set; }
    }
}
