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
                FirstName = "Martin",
                LastName = "Genchev",
                UserName = "martin",
                NormalizedUserName = "martin".ToUpper(),
                Email = "test@abv.bg",
                NormalizedEmail = "test@abv.bg".ToUpper(),
                EmailConfirmed = true,
                FullName= "Martin Genchev"
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
                EmailConfirmed = true,
                FullName = "Ivan Ivanov"
            };
            user2.PasswordHash = ph.HashPassword(user2, "asdfasdf");

            string[] names = new string[] {
                "Boris Stamatov",
                "Georgi Stoynov",
                "Momchil Ivanov",
                "Atanas Marinov",
                "Ivet Nikolova",
                "Ani Mincheva",
                "Desislava Genova"
            };
            List<ApplicationUser> users = new List<ApplicationUser>();
            Random rnd = new Random();
            for (int i = 0; i < names.Length; i++)
            {
                ApplicationUser user = new ApplicationUser
                {
                    Id = Guid.NewGuid().ToString(),
                    FirstName = names[i].Split(" ")[0],
                    LastName = names[i].Split(" ")[1],
                    FullName = names[i],
                    Email = $"test{i + 3}@abv.bg",
                    NormalizedEmail = $"test{i + 3}@abv.bg".ToUpperInvariant(),
                    SecurityStamp = Guid.NewGuid().ToString(),
                    CreatedAt = DateTime.Now.AddDays(rnd.Next(1, 3))
                };
                user.PasswordHash = ph.HashPassword(user, "asdfasdf");
                users.Add(user);
            }
            users.Add(user1);
            users.Add(user2);

            modelBuilder.Entity<ApplicationUser>().HasData(users);
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
