using System.ComponentModel.DataAnnotations;

namespace LicentaServer.Dtos
{
    public class BrandDto
    {
        public int Id { get; set; }
        [Required (ErrorMessage = "Name is mandatory")]
        public string Name { get; set; } = string.Empty;
    }
}
