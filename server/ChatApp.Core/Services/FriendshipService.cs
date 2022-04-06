using ChatApp.Core.Contracts;
using ChatApp.Core.Models.OutputDTOs;
using ChatApp.Infrastructure.Data;
using ChatApp.Infrastructure.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp.Core.Services
{
    public class FriendshipService : IFriendshipService
    {
        private readonly IApplicationDbRepository repo;

        public FriendshipService(IApplicationDbRepository repo)
        {
            this.repo = repo;
        }

        public async Task<string> AnsewrToFriendshipRequest(string friendshipId, bool answer)
        {
            Friendship fs = (await repo.All<Friendship>().FirstOrDefaultAsync(fs => fs.Id.ToString() == friendshipId))!;

            if (fs.Rejected == true || fs.Accepted == true)
            {
                return "Friendship request already accepted or rejected";
            }

            if (answer)
            {
                fs.Accepted = true;
            }
            else
            {
                fs.Rejected = true;
            }

            await repo.SaveChangesAsync();

            return "";
        }

        public async Task<FriendshipsDTO> GetNewFriendshipRequest(string friendshipId)
        {
            Friendship? fs = await repo.All<Friendship>()
                .Include(fs => fs.UserSend)
                .FirstOrDefaultAsync(fs => fs.Id.ToString() == friendshipId && fs.Accepted == false && fs.Rejected == false);

            if (fs == null)
            {
                return null!;
            }

            return new FriendshipsDTO
            {
                FriendshipId = friendshipId,
                SenderFullName = fs.UserSend.FullName!,
                SenderId = fs.UserSendId!
            };
        }
    }
}
