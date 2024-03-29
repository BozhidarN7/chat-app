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
    [Migration("20220414052151_ApplicationUserUpdated")]
    partial class ApplicationUserUpdated
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Friendship", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<bool>("Accepted")
                        .HasColumnType("bit");

                    b.Property<bool>("Rejected")
                        .HasColumnType("bit");

                    b.Property<Guid>("RoomId")
                        .HasColumnType("uniqueidentifier");

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

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

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
                            Id = "d185bdf2-4039-4802-b187-6bef7c815575",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "963b6a5c-9ca5-418b-809d-cd5e1306c039",
                            CreatedAt = new DateTime(2022, 4, 15, 8, 21, 51, 255, DateTimeKind.Local).AddTicks(7001),
                            Email = "test3@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Boris",
                            FullName = "Boris Stamatov",
                            LastName = "Stamatov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST3@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEAxKQJohNAg7lOFSqlVQ2zBUkS99t7/2jJppolZBZlpvpX1bm+RhgznF4Tf97SymgA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "e1cf6efb-9f35-4b2d-9ab4-1ad18a0dc67e",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "2a078f32-0d85-4ed9-a5d0-8cc51acee7ef",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "84e9ac51-a7e8-472b-8cd5-4bc1ebf93820",
                            CreatedAt = new DateTime(2022, 4, 16, 8, 21, 51, 263, DateTimeKind.Local).AddTicks(999),
                            Email = "test4@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Georgi",
                            FullName = "Georgi Stoynov",
                            LastName = "Stoynov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST4@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEJ99FU8w8DzTAFI1xVgGhZmUksy4+FJgDUR47UhacxnfuAEcUvyhFnhS3cQOg2ZRZw==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "56ccf7c0-dee0-42bd-8103-027a7aee1bf8",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "c29b5ca2-59a6-4690-a619-874f3065a518",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "86ceccb9-ed53-431b-a242-7a54d1198ba8",
                            CreatedAt = new DateTime(2022, 4, 16, 8, 21, 51, 270, DateTimeKind.Local).AddTicks(8872),
                            Email = "test5@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Momchil",
                            FullName = "Momchil Ivanov",
                            LastName = "Ivanov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST5@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEFewJ0DQje2tpYh8/0ah+5YuAYzOgO8D6ISkZV79nqD0EeGXsX9G9CzGqP+c0lzECA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "601d9844-34e4-4ac0-b326-51b5bbf99376",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "48d135d8-a5b3-473f-bd40-de1ed1454e33",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "9fbc6386-f172-47f1-a4b3-ec0e03d6a147",
                            CreatedAt = new DateTime(2022, 4, 16, 8, 21, 51, 277, DateTimeKind.Local).AddTicks(9043),
                            Email = "test6@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Atanas",
                            FullName = "Atanas Marinov",
                            LastName = "Marinov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST6@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEKay5Yh5gDsXhqbJ4ZdSA9bogPGqm2KGuhMXfWP3BNyLcxPP0OMw7PgyTArnDsL6Ig==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "5708d91e-ba49-4904-9d37-1d714f393528",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "ea6077fe-1772-4404-abee-9267d7b1da02",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "84d0a76e-a1f8-48a1-8e78-f921b9a2be62",
                            CreatedAt = new DateTime(2022, 4, 15, 8, 21, 51, 285, DateTimeKind.Local).AddTicks(1242),
                            Email = "test7@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Ivet",
                            FullName = "Ivet Nikolova",
                            LastName = "Nikolova",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST7@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEG3DL7ZTZSD3Pssu1PgxXYKxKYoN/r8itdJ/cBEig8WEHBl+Wl+HgRSVFZInM1zfyQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "0bc7c40a-e2f5-49bd-8fe2-6b0e48e6f588",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "59755e5d-4155-4c4f-8537-5720b160fa0e",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "8f29d278-b27a-4f89-a837-e050102d692b",
                            CreatedAt = new DateTime(2022, 4, 15, 8, 21, 51, 292, DateTimeKind.Local).AddTicks(1465),
                            Email = "test8@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Ani",
                            FullName = "Ani Mincheva",
                            LastName = "Mincheva",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST8@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAECJK5mv+EifxAnCBXAn2S75zZ1GErTWbdqNpxaZoefkzRFJ2dHkokOMdhyOZjphkGw==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "419575fa-c76a-4f77-81ba-299110a1f2c8",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "cda0eabf-217b-4d60-abe5-bcd88a508c13",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "793230a3-9a6f-4007-a981-ee6b4d55b5da",
                            CreatedAt = new DateTime(2022, 4, 15, 8, 21, 51, 299, DateTimeKind.Local).AddTicks(3762),
                            Email = "test9@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Desislava",
                            FullName = "Desislava Genova",
                            LastName = "Genova",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST9@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEE3qLz2+JX+2fIEgjjbUg+OE9O1uUXMQN7sHfYqZ5Jb+qZYfEGoZ7U3Duk2sEhyWNA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "1a2f0e8e-243c-4ae8-b0f1-81a5d3f9bb98",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "1",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "d10d5852-51c1-42b8-8c2b-e8a88e47c146",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "test@abv.bg",
                            EmailConfirmed = true,
                            FirstName = "Martin",
                            FullName = "Martin Genchev",
                            LastName = "Genchev",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST@ABV.BG",
                            NormalizedUserName = "MARTIN",
                            PasswordHash = "AQAAAAEAACcQAAAAEMzbMqfjRhPFb3DTh2879rtNwjLKI8+uwwky0UApNceXR8DLx9Nyg6OgD7e9Vh9W2w==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "bd234fc2-134f-4daa-88e6-3aa163cdb2b1",
                            TwoFactorEnabled = false,
                            UserName = "martin"
                        },
                        new
                        {
                            Id = "2",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "089caebe-dd56-4272-b990-1a92abfed71c",
                            CreatedAt = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Email = "test1@abv.bg",
                            EmailConfirmed = true,
                            FirstName = "Ivan",
                            FullName = "Ivan Ivanov",
                            LastName = "Ivanov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST1@ABV.BG",
                            NormalizedUserName = "IVAN",
                            PasswordHash = "AQAAAAEAACcQAAAAECdrrUt/Tc4m32VUGLUOGI8NVMVXzJciEETeiyMn9zF+25gNZBX+PBruqWegUydPOA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "13ee8223-fef7-4971-b0f8-79c6df8d0742",
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

            modelBuilder.Entity("ChatApp.Infrastructure.Data.UserRoom", b =>
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
                            ConcurrencyStamp = "0da0ee02-11e7-4a55-bfbb-992070199422",
                            Name = "admin",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = "user_role",
                            ConcurrencyStamp = "93417af1-b890-4241-af83-934e4f974448",
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

            modelBuilder.Entity("ChatApp.Infrastructure.Data.Friendship", b =>
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

            modelBuilder.Entity("ChatApp.Infrastructure.Data.UserRoom", b =>
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
