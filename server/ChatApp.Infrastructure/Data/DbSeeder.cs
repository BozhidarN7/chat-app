using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Infrastructure.Data
{
    public static class DbSeeder
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            SeedUsers(modelBuilder);
            SeedRoles(modelBuilder);
            SeedUserRoles(modelBuilder);
        }

        private static void SeedUsers(ModelBuilder modelBuilder)
        {
            var ph = new PasswordHasher<ApplicationUser>();
            var user1 = new ApplicationUser
            {
                Id = "1",
                FirstName = "Bozhidar",
                LastName = "Nemski",
                UserName = "bozhidar",
                NormalizedUserName = "bozhidar".ToUpper(),
                Email = "test@abv.bg",
                NormalizedEmail = "test@abv.bg".ToUpper(),
                EmailConfirmed = true
            };
            user1.PasswordHash = ph.HashPassword(user1, "asdfasdf");

            var user2 = new ApplicationUser
            {
                Id = "2",
                FirstName = "Ivan",
                LastName = "Ivanov",
                UserName = "ivan",
                NormalizedUserName = "ivan".ToUpper(),
                Email = "test1@abv.bg",
                NormalizedEmail = "test1@abv.bg".ToUpper(),
                EmailConfirmed = true
            };
            user2.PasswordHash = ph.HashPassword(user2, "asdfasdf");

            modelBuilder.Entity<ApplicationUser>().HasData(user1, user2);
        }

        private static void SeedRoles(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Id = "admin_role",
                    Name = "admin",
                    NormalizedName = "admin".ToUpper()
                }, new IdentityRole()
                {
                    Id = "user_role",
                    Name = "user",
                    NormalizedName = "user".ToUpper()
                });
        }

        private static void SeedUserRoles(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string>
                {
                    RoleId = "admin_role",
                    UserId = "1"
                },
                new IdentityUserRole<string>
                {
                    RoleId = "user_role",
                    UserId = "2",
                });
        }
    }
}
