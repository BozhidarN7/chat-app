using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/rooms")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        [HttpPost("{id}/file-upload"), Authorize]

        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            try
            {
                if (file != null && file.Length > 0)
                {
                    using (MemoryStream memoryStream = new MemoryStream())
                    {
                        await file.CopyToAsync(memoryStream);
                    }
                }

                return CreatedAtAction(nameof(UploadFile), new
                {
                    success = true,
                    message = "File uploaded successfully",
                });
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to upload file");
            }
        }
    }
}
