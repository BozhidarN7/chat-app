﻿namespace ChatApp.Core.Models
{
    public class TokenModel
    {
        public string? AccessToken { get; set; }

        public string? RefreshToken { get; set; }

        public DateTime Expiration { get; set; }
    }
}
