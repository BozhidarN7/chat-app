namespace ChatApp.Core.Models.OutputDTOs
{
    public class MessageDTO
    {
        public string Message { get; set; }

        public DateTime MessageDateAndTime { get; set; }

        public string SenderFullName { get; set; }
    }
}
