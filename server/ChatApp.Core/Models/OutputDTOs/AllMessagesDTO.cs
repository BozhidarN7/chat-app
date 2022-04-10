namespace ChatApp.Core.Models.OutputDTOs
{
    public class AllMessagesDTO
    {
        public List<MessageDTO> Messages { get; set; }  

        public List<RoomFileDTO> RoomFiles { get; set; }
    }
}
