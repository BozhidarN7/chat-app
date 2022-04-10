namespace ChatApp.Core.Models.OutputDTOs
{
    public class RoomFileDTO
    {
        public string Id { get; set; }

        public string RoomId { get; set; }

        public string File { get; set; }

        public string SenderFullName { get; set; }

        public string SenderId { get; set; }

        public DateTime MessageDateAndTime { get; set; }

        public string MessageType { get; set; } = "file";
    }
}
