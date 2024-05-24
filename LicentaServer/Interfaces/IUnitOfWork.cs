namespace LicentaServer.Interfaces
{
    public interface IUnitOfWork
    {
        IBrandRepository BrandRepository { get; }
        Task<bool> SaveAsync();
    }
}
