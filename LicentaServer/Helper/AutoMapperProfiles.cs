using AutoMapper;
using LicentaServer.Dtos;
using LicentaServer.Models;

namespace LicentaServer.Helper
{
    public class AutoMapperProfiles: Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Brand, BrandDto>().ReverseMap();

        }
    }
}
