using ChatApp.Infrastructure.Data.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ChatApp.Infrastructure.Data
{
    public class FriendShip
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [ForeignKey(nameof(ApplicationUser))]
        public string UserSendId { get; set; }

        public ApplicationUser UserSend { get; set; }

        public string UserReceiveId { get; set; }
    }
}
