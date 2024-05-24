using AutoMapper;
using Azure;
using LicentaServer.Dtos;
using LicentaServer.Interfaces;
using LicentaServer.Models;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace LicentaServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase 
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public BrandController(IUnitOfWork unitOfWork, IMapper mapper) {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<IActionResult> GetBrands() 
        {
            var brands = await _unitOfWork.BrandRepository.GetBrandsAsync();    
            var brandsDto = _mapper.Map<IEnumerable<BrandDto>>(brands);
            return Ok(brandsDto);
        }
        [HttpPost("post")]
        public async Task<IActionResult> AddBrand(BrandDto brandDto)
        {
            var brand = _mapper.Map<Brand>(brandDto);
            brand.LastUpdatedBy = 1;
            brand.LastUpdateOn = DateTime.Now;
            _unitOfWork.BrandRepository.AddBrand(brand);
            await _unitOfWork.SaveAsync();
            return StatusCode(201);
        }
        [HttpDelete("delete/{id}")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            _unitOfWork.BrandRepository.DeleteBrand(id);
            await _unitOfWork.SaveAsync();
            return Ok(id);
        }
        [HttpPut("update/{id}")]
        public async Task<IActionResult>UpdateBrand(int id, BrandDto brandDto)
        {
                if (id != brandDto.Id)
                    return BadRequest("Update not allowed");

                var brandFromDb = await _unitOfWork.BrandRepository.FindBrand(id);

                if (brandFromDb == null)
                    return BadRequest("Update not allowed");
                brandFromDb.LastUpdatedBy = 1;
                brandFromDb.LastUpdateOn = DateTime.Now;
                _mapper.Map<Brand>(brandDto);

                //throw new Exception("Unknow error");
                await _unitOfWork.SaveAsync();
                return StatusCode(200);
        }
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> UpdateBrandPatch(int id, JsonPatchDocument<Brand>brandToPatch)
        {
            var brandFromDb = await _unitOfWork.BrandRepository.FindBrand(id);
            brandFromDb.LastUpdatedBy = 1;
            brandFromDb.LastUpdateOn = DateTime.Now;

            brandToPatch.ApplyTo(brandFromDb, ModelState);
            await _unitOfWork.SaveAsync();
            return StatusCode(200);
        }
    }
}
