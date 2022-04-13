﻿using ChatApp.Core.Constants;
using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs.StatisticsDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Core.Services
{
    public class AdminService : IAdminService
    {
        private readonly IApplicationDbRepository repo;

        public AdminService(IApplicationDbRepository repo)
        {
            this.repo = repo;
        }
        public async Task<IEnumerable<MessagesStatisticDTO>> GetMessagesStatisticAsync()
        {
            List<MessagesStatisticDTO> statistic = (await repo.All<Message>()
               .ToListAsync())
               .GroupBy(m => m.DateAndTime.Date)
               .OrderBy(m => m.Key)
               .TakeLast(GlobalConstants.LastNDaysMessagesCount)
               .Select(m => new MessagesStatisticDTO
               {
                   Date = m.Key,
                   TotalMessages = m.Count()
               })
               .ToList();


            int count = statistic.Count();
            for (int i = 0; i <= GlobalConstants.LastNDaysMessagesCount; i++)
            {
                if (statistic.FirstOrDefault(s => s.Date == statistic[count - 1].Date.AddDays(-(i + 1))) == null)
                {
                    statistic.Add(new MessagesStatisticDTO
                    {
                        Date = statistic[count - 1].Date.AddDays(-(i + 1)),
                        TotalMessages = 0
                    });
                }
            }

            return statistic
                .OrderBy(s => s.Date)
                .TakeLast(GlobalConstants.LastNDaysMessagesCount)
                .ToList();

        }
    }
}
