using ChatApp.Core.Contracts;
using ChatApp.Core.Models;
using ChatApp.Core.Models.OutputDTOs;
using Microsoft.AspNetCore.Authorization;
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

        [HttpPost("{id}/files"), Authorize]
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

        [HttpGet("{id}/files"), Authorize]
        public async Task<IActionResult> GetFiles(string id)
        {
            try
            {
                IEnumerable<RoomFileDTO> files = await roomService.GetFiles(id);

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = files.Count(),
                        files
                    }
                });
            }
            catch (Exception ex)
            {
                return BadRequest("Did not manage to get files");
            }
        }
    }
}
