using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LicentaServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<string> GetStrings()
        {
            return new string[] { "Bmw", "Mercedes", "Ferrari"};
            
        }
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "Bmw";
        //}
    }
}
