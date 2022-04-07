namespace ChatApp.Core.Contracts
{
    public interface IUserRoomService
    {
        public Task<bool> IsUserInRoom(string roomId, string userId);
    }
}
