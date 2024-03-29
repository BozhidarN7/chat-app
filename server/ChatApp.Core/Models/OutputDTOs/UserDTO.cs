﻿namespace ChatApp.Core.Models.OutputDTOs
{
    public class UserDTO
    {
        public string Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string FullName { get; set; }

        public IEnumerable<string> Roles { get; set; }
    }
}
