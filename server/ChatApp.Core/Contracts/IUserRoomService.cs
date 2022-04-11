namespace ChatApp.Core.Contracts
{
    public interface IUserRoomService
    {
        public Task<bool> IsUserInRoomAsync(string roomId, string userId);
    }
}
