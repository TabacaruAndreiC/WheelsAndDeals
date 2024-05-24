using LicentaServer.Models;

namespace LicentaServer.Interfaces
{
    public interface IBrandRepository
    {
        Task<IEnumerable<Brand>> GetBrandsAsync();
        void AddBrand(Brand brand);
        void DeleteBrand(int BrandId);
        Task<Brand>FindBrand(int id);
    }
}
