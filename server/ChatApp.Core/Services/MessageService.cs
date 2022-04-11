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

        public async Task DeleteMessageAsync(string id)
        {
            await repo.DeleteAsync<Message>(Guid.Parse(id));
            await repo.SaveChangesAsync();
        }

        public async Task EditMessageAsync(string id,string newText)
        {
            Message? message = await repo.All<Message>()
                 .FirstOrDefaultAsync(m => m.Id.ToString() == id);

            message.Text = newText;

            await repo.SaveChangesAsync();
        }

        public async Task<bool> IsUserMessageCreatorAsync(string id, string userId)
        {
            Message? message = await repo.All<Message>()
                .FirstOrDefaultAsync(m => m.Id.ToString() == id);

            return message?.UserId == userId ? true : false;
        }
    }
}


