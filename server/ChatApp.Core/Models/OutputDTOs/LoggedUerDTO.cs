namespace ChatApp.Core.Models.OutputDTOs
{
    public class LoggedUerDTO
    {
        public UserDTO User { get; set; }

        public string Token { get; set; }

        public string RefreshToken { get; set; }

        public DateTime Expiration { get; set; }
    }
}
