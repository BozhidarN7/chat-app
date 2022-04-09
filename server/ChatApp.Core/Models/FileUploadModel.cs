using Microsoft.AspNetCore.Http;

namespace ChatApp.Core.Models
{
    public class FileUploadModel
    {
        public string SenderId { get; set; }

        public string SenderFullName { get; set; }

        public IFormFile File { get; set; }
    }
}
