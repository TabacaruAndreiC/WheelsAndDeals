using System.ComponentModel.DataAnnotations;

namespace LicentaServer.Models
{
    public class Brand
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime LastUpdateOn {  get; set; }
        public int LastUpdatedBy { get; set; }
    }
}
