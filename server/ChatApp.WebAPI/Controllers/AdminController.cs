using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs.StatisticsDTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ChatApp.WebAPI.Controllers
{
    [Route("api/v1/admin")]
    [ApiController]
    [Authorize(Roles = "admin")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService adminService;

        public AdminController(IAdminService adminService)
        {
            this.adminService = adminService;
        }
        [HttpGet("statisics/messages")]
        public async Task<IActionResult> GetMessagesStatisic()
        {
            try
            {
                IEnumerable<MessagesStatisticDTO> messages = await adminService.GetMessagesStatisticAsync();

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = messages.Count(),
                        messages
                    }
                });

            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    success = false,
                    message = "Did not manage to get statistic"
                });

            }
        }
    }
}
