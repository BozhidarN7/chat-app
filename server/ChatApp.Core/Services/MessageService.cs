using ChatApp.Core.Constants;
using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Core.Services
{
    public class MessageService : IMessageService
    {
        private readonly IApplicationDbRepository repo;

        public MessageService(IApplicationDbRepository repo)
        {
            this.repo = repo;
        }

        public async Task<IEnumerable<MessageDTO>> GetRoomMessagesAsync(string roomId, int page)
        {
            return await repo.All<Message>()
                .Include(m => m.User)
                .Where(m => m.RoomId == Guid.Parse(roomId))
                .OrderByDescending(m => m.DateAndTime)
                .Skip((page - 1) * GlobalConstants.DefaulMessagesReturned)
                .Take(GlobalConstants.DefaulMessagesReturned)
                .Select(m => new MessageDTO
                {
                    Id = m.Id.ToString(),
                    Message = m.Text,
                    MessageDateAndTime = DateTime.Now,
                    SenderFullName = m.User.FullName,

                })
                .ToListAsync();
        }
    }
}


