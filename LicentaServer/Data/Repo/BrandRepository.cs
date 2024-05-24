using LicentaServer.Interfaces;
using LicentaServer.Models;
using Microsoft.EntityFrameworkCore;

namespace LicentaServer.Data.Repo
{
    public class BrandRepository : IBrandRepository
    {
        private readonly DataContext _dataContext;
        public BrandRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public DataContext DataContext { get; }

        public void AddBrand(Brand brand)
        {
            _dataContext.Brands.AddAsync(brand);
        }

        public void DeleteBrand(int BrandId)
        {
            var brand = _dataContext.Brands.Find(BrandId);
            _dataContext.Remove(brand);
        }

        public async Task<Brand> FindBrand(int id)
        {
            return await _dataContext.Brands.FindAsync(id);
        }

        public async Task<IEnumerable<Brand>> GetBrandsAsync()
        {
            return await _dataContext.Brands.ToListAsync();
        }
    }
}
