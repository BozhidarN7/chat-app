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
            catch (Exception)
            {
                return BadRequest(new
                {
                    success = false,
                    message = "Did not manage to get statistic"
                });

            }
        }

        [HttpGet("statistics/new-users")]
        public async Task<IActionResult> GetNewlyRegisterUsers()
        {
            try
            {
                IEnumerable<NewUsersStatisticDTO> users = await adminService.GetNewlyRegisterUsersAsync();

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = users.Count(),
                        users
                    }
                });

            }
            catch (Exception)
            {
                return BadRequest("Did not manage to get data");
            }
        }

        [HttpGet("statistics/users/messages")]
        public async Task<IActionResult> GetUsersWithMostMessages()
        {
            try
            {
                IEnumerable<UsersWithMostMessagesDTO> users = await adminService.GetUsersWithMostMessagesAsync();

                return Ok(new
                {
                    success = true,
                    message = "Data received successfully",
                    data = new
                    {
                        count = users.Count(),
                        users
                    }
                });

            }
            catch (Exception)
            {
                return BadRequest("Did not manage to get data");
            }
        }
    }
}
