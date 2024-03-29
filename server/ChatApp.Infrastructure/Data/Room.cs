﻿using ChatApp.Infrastructure.Data.Identity;
using System.ComponentModel.DataAnnotations;

namespace ChatApp.Infrastructure.Data
{
    public class Room
    {
        public Room ()
        {
            UsersRooms = new HashSet<UserRoom>();
            Messages = new HashSet<Message>();
        }

        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        public ICollection<Message> Messages { get; set; }

        public ICollection<UserRoom> UsersRooms { get; set; }
    }
}
