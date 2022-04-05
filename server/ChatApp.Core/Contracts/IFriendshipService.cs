using ChatApp.Core.Models.OutputDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp.Core.Contracts
{
    public interface IFriendshipService
    {
        Task<FriendshipsDTO> GetNewFriendshipRequest(string friendshipId);
    }
}
