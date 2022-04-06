using ChatApp.Infrastructure.Data.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ChatApp.Infrastructure.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<UserRoom>(entity =>
            {
                entity.HasKey(ur => new { ur.UserId, ur.RoomId });
            });

            modelBuilder.Seed();

        }

        public DbSet<Room> Rooms { get; set; }

        public DbSet<UserRoom> UsersRooms { get; set; }

        public DbSet<Message> Messages { get; set; }

        public DbSet<Friendship> Friendships { get; set; }

    }
}
