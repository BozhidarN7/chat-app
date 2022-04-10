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
    }
}


