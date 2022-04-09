using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/rooms")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRoomService roomService;

        public RoomController(IRoomService roomService)
        {
            this.roomService = roomService;
        }

        [HttpPost("{id}/file-upload"), Authorize]
        public async Task<IActionResult> UploadFile(string id, [FromForm] FileUploadModel model)
        {
            try
            {
                await roomService.SaveFile(id, model);

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
