using ChatApp.Infrastructure;

namespace server.Extensions
{
    public static class ApiServiceCollectionsExtensions
    {

        public IServiceCollection AddApiDbContexts(this IServiceCollection serviceс,IConfiguration config)
        {
            var connectionString = config.GetConnectionString("DefaultConnection");
            serviceс.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));

            return serviceс;
        }
    }
}
