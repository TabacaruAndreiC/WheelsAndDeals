using LicentaServer.Models;
using Microsoft.EntityFrameworkCore;

namespace LicentaServer.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext>options):base(options) { }
        public DbSet<Brand>Brands { get; set; }
    }
}
