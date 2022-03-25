using Microsoft.EntityFrameworkCore;
using ChatApp.Infrastructure.Data;

namespace ChatApp.WebAPI.Extensions
{
    public static class ApiServiceCollectionsExtensions
    {

        public static IServiceCollection AddApiDbContexts(this IServiceCollection services, IConfiguration config)
        {
            var connectionString = config.GetConnectionString("OfficeConnection");
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));

            return services;
        }
    }
}
