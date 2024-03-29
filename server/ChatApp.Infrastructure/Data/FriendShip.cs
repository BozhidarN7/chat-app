﻿using ChatApp.Infrastructure.Data.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ChatApp.Infrastructure.Data
{
    public class Friendship
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [ForeignKey(nameof(ApplicationUser))]
        public string UserSendId { get; set; }

        public ApplicationUser UserSend { get; set; }

        public string UserReceiveId { get; set; }

        public Guid RoomId { get; set; } 

        public bool Accepted { get; set; } = false;

        public bool Rejected { get; set; } = false;
    }
}
