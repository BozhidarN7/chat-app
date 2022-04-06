﻿// <auto-generated />
using System;
using ChatApp.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20220404141530_FriendShipExtended")]
    partial class FriendShipExtended
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ChatApp.Infrastructure.Data.FriendShip", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Accepted")
                        .HasColumnType("bit");

                    b.Property<bool>("Rejected")
                        .HasColumnType("bit");

                    b.Property<string>("RoomId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserReceiveId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserSendId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserSendId");

                    b.ToTable("Friendships");
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Identity.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<string>("FullName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("nvarchar(80)");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("RefreshToken")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("RefreshTokenExpiryTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasDatabaseName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasDatabaseName("UserNameIndex")
                        .HasFilter("[NormalizedUserName] IS NOT NULL");

                    b.ToTable("AspNetUsers", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "276a0d21-5c6e-4926-8292-73cd6de81761",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "703ee31a-2492-499e-b5e4-9b5604ba0a49",
                            Email = "test3@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Boris",
                            FullName = "Boris Stamatov",
                            LastName = "Stamatov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST3@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEBgfVpjfGNzO5aYpsbSiY7YDsfpfE/PZyEyQE9PWOofjnfqs/xm3+7Fs7Cox8H/sDA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "75c5a736-d5f7-406c-8d42-3acd3adca733",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "84094bf7-6604-409c-866c-0eff2d18e24e",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "7a015499-19a9-4cc2-a399-47aa435eca69",
                            Email = "test4@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Georgi",
                            FullName = "Georgi Stoynov",
                            LastName = "Stoynov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST4@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEDfTmoj8HcArl9/F2aD3nmVcMVxlkHxPWwiA2VL4Hqc/4mkMO/MKAFS9Xsn5G/ke9A==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "fbeda325-f824-4083-bed0-f112c528fddc",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "9e74c4ff-d166-40d4-9a5f-12bd8ccccb4a",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "7c505140-9a8f-46c5-a676-248f441d3cb2",
                            Email = "test5@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Momchil",
                            FullName = "Momchil Ivanov",
                            LastName = "Ivanov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST5@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEOYzDsqbiu6wHJdvsbc0XJOE50HGb1cZaZB5PJjHoxEjTWt7gd2Sj/nobwISur6+OQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "5b18531b-6de0-4a2c-b7f6-bffe288f5122",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "a93c9764-3ab7-4e1e-93dc-1f883a708cb0",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "9a536e3b-2766-4d47-8448-e94692708e31",
                            Email = "test6@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Atanas",
                            FullName = "Atanas Marinov",
                            LastName = "Marinov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST6@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEE8VF18t/SCrXY3DTwHQOCWGw3a/g/La2cCdHvL4maa3rHG4rfOnlrqbZyWz4E/pjg==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "e49e27fb-bb58-468e-803b-610446c56cae",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "4f30fd51-cccd-4c9a-9994-4ad4f5ff5424",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "b9b7b584-02a7-40c6-a705-d2b4e170dd55",
                            Email = "test7@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Ivet",
                            FullName = "Ivet Nikolova",
                            LastName = "Nikolova",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST7@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAELrVbPyMoXlnfZJcCNWpJC+bIWz5fbcigIU58OAeR4tIT2PqDAaZrG7lxay1UCioAg==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "c344a386-808f-462e-a33e-0b29271794bc",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "a8eb158e-3e48-4e14-8329-04ae21b840af",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "2abd84b0-3b6c-4137-a70f-f9b3faf6aa7f",
                            Email = "test8@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Ani",
                            FullName = "Ani Mincheva",
                            LastName = "Mincheva",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST8@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEFzvPwdfY7iovtNGR4l5upUhj3DY494mW0UKD8CVOagjoqNc8f88f7xuGvFA0SpUqw==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "a2812f22-1080-4d43-bff7-dfa86da607b8",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "434109d5-00b4-4c7d-9151-0db22166480a",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "f74abf1a-ab6d-43f3-9a18-3c399e838d5d",
                            Email = "test9@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Desislava",
                            FullName = "Desislava Genova",
                            LastName = "Genova",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST9@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEIu4WUg90fXa2mWfdSYiDJpdCEtY/jVk2Ra/Y7y9y/eJxtT+axtA8zitkrWLxrEHfQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "8a18413c-aa04-4b9a-b485-5c0c16d7870f",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "1",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "a9c7c5d8-a8b0-4834-abab-199f37e19828",
                            Email = "test@abv.bg",
                            EmailConfirmed = true,
                            FirstName = "Martin",
                            FullName = "Martin Genchev",
                            LastName = "Genchev",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST@ABV.BG",
                            NormalizedUserName = "MARTIN",
                            PasswordHash = "AQAAAAEAACcQAAAAEO2+1cZC/XN9OlIi7nADFWvuXkwpaktXmVVBWn+9IL8M/0KlV56maGjUPRkqTUFYPQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "e652066e-0bff-4f4d-aa7a-c035859cb075",
                            TwoFactorEnabled = false,
                            UserName = "martin"
                        },
                        new
                        {
                            Id = "2",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "942f6812-ec28-44a3-ab10-cd82318f9b68",
                            Email = "test1@abv.bg",
                            EmailConfirmed = true,
                            FirstName = "Ivan",
                            FullName = "Ivan Ivanov",
                            LastName = "Ivanov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST1@ABV.BG",
                            NormalizedUserName = "IVAN",
                            PasswordHash = "AQAAAAEAACcQAAAAEKA7EiF2erBYy7D918O2TSDZgZA5+oZkr6Srbz73q/AKmoerBACMsN5zcZqBsgkojA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "11723bcd-83c6-45cd-ab79-7ad4b2f6c488",
                            TwoFactorEnabled = false,
                            UserName = "ivan"
                        });
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Message", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("DateAndTime")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Text")
                        .IsRequired()
                        .HasMaxLength(2000)
                        .HasColumnType("nvarchar(2000)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoomId");

                    b.HasIndex("UserId");

                    b.ToTable("Messages");
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Room", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.UsersRooms", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UserId", "RoomId");

                    b.HasIndex("RoomId");

                    b.ToTable("UsersRooms");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRole", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasDatabaseName("RoleNameIndex")
                        .HasFilter("[NormalizedName] IS NOT NULL");

                    b.ToTable("AspNetRoles", (string)null);

                    b.HasData(
                        new
                        {
                            Id = "admin_role",
                            ConcurrencyStamp = "b0185dfb-a786-4655-87a5-5bf756b09b88",
                            Name = "admin",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = "user_role",
                            ConcurrencyStamp = "5c453aec-e2c5-43a2-9cf6-4be37e35bf1a",
                            Name = "user",
                            NormalizedName = "USER"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins", (string)null);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles", (string)null);

                    b.HasData(
                        new
                        {
                            UserId = "1",
                            RoleId = "admin_role"
                        },
                        new
                        {
                            UserId = "2",
                            RoleId = "user_role"
                        });
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens", (string)null);
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.FriendShip", b =>
                {
                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", "UserSend")
                        .WithMany("FriendShips")
                        .HasForeignKey("UserSendId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("UserSend");
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Message", b =>
                {
                    b.HasOne("ChatApp.Infrastructure.Data.Room", "Room")
                        .WithMany("Messages")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Room");

                    b.Navigation("User");
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.UsersRooms", b =>
                {
                    b.HasOne("ChatApp.Infrastructure.Data.Room", "Room")
                        .WithMany("UsersRooms")
                        .HasForeignKey("RoomId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", "User")
                        .WithMany("UsersRooms")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Room");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<string>", b =>
                {
                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<string>", b =>
                {
                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserRole<string>", b =>
                {
                    b.HasOne("Microsoft.AspNetCore.Identity.IdentityRole", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<string>", b =>
                {
                    b.HasOne("ChatApp.Infrastructure.Data.Identity.ApplicationUser", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Identity.ApplicationUser", b =>
                {
                    b.Navigation("FriendShips");

                    b.Navigation("UsersRooms");
                });

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Room", b =>
                {
                    b.Navigation("Messages");

                    b.Navigation("UsersRooms");
                });
#pragma warning restore 612, 618
        }
    }
}