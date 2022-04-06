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
    [Migration("20220406093231_FriendshipUpdated")]
    partial class FriendshipUpdated
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
                            Id = "faf93ff1-b8da-46e8-90fe-4643a3ed79e7",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "e4525ce0-8a85-4c6e-b1b6-035165f1feeb",
                            Email = "test3@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Boris",
                            FullName = "Boris Stamatov",
                            LastName = "Stamatov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST3@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAENmhiCocm7flRSkLeyzrxB1LFZk/dvN6OZFXmN3aFYr6XILTRzK/2B9zwjQC12jqbw==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "546a2cbd-ea86-4827-b55b-eb194c7b88a4",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "257aa2fe-65ec-4287-95a6-8a15091773e0",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "907f15e6-978e-4438-a58e-1c35d34670ca",
                            Email = "test4@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Georgi",
                            FullName = "Georgi Stoynov",
                            LastName = "Stoynov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST4@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEK4LKiTdGDqSZb4FjHIRYfnu5g/HYWNvsbpnzdMwbODuBNYiBVJPVbNzPD71eWimqQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "00c6635b-ac22-4a6d-9885-3c68b1a4fa60",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "a0a1d293-6322-495e-bc63-8e42e3200cda",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "a1923d82-39c0-4a04-a271-e6d54a389def",
                            Email = "test5@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Momchil",
                            FullName = "Momchil Ivanov",
                            LastName = "Ivanov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST5@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEAD3Ln7V2MEfgCO3sFQHpvihYOwNZk1wv0x1iGltCBHN3smeWrr/NxRuemKFvy9Iiw==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "5a42d0ec-b42f-4396-88d9-708a26a5c8f3",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "404a553f-4026-416a-a4e3-635c762bf6ae",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "c8e1cdd4-4a98-4c2c-a0d5-910a4066235c",
                            Email = "test6@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Atanas",
                            FullName = "Atanas Marinov",
                            LastName = "Marinov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST6@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAED4DVDcJbl9FBu+T2LyvasxDY3bSlDDLt3SWvf8F23G9ThWyYJ5J00hCH9lJS7iSdg==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "fb9a1531-08ed-4546-9ac0-913bb9a8dca9",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "fca1d495-d330-4fce-a920-a5c013bf1ce5",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "174cdb78-efca-4ba4-999b-a53ac743155c",
                            Email = "test7@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Ivet",
                            FullName = "Ivet Nikolova",
                            LastName = "Nikolova",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST7@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAENwq38mvhaDz3Q9uTYCs2S3pQ9XrNd/Pl9wrY2cmnFsErWlL4w0Hc+G4HzFEGQnFUg==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "3961e864-581d-4e1d-bd8c-95945c68b853",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "482e8837-ffb1-4fd7-ba20-69563293f4f0",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "4ce78ffb-d61f-4bd9-8946-e8e9bb94f8ff",
                            Email = "test8@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Ani",
                            FullName = "Ani Mincheva",
                            LastName = "Mincheva",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST8@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAEKv8F3nSCkfUeNhPaQpXl1y6S7+59NgPHTIR5cemdsH3hIw4rLe3chTm0PQdWMSMuA==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "3e38bdf3-c75e-4ae6-83a6-1db020fd0941",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "dd6744d1-9e5c-4dd1-b500-8a718bb742d6",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "54e239cc-01ef-4d19-9f17-966cc682a5bf",
                            Email = "test9@abv.bg",
                            EmailConfirmed = false,
                            FirstName = "Desislava",
                            FullName = "Desislava Genova",
                            LastName = "Genova",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST9@ABV.BG",
                            PasswordHash = "AQAAAAEAACcQAAAAENyqArIdmq8JoZ/6vVRoPFbq5rHek7NiY+PiUPNSPNukE552p3UPOXww5YNc8th5JQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "994aefdd-04c6-4258-a083-6370e257e42b",
                            TwoFactorEnabled = false
                        },
                        new
                        {
                            Id = "1",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "60eee900-da82-4ca0-99ac-932a553732a1",
                            Email = "test@abv.bg",
                            EmailConfirmed = true,
                            FirstName = "Martin",
                            FullName = "Martin Genchev",
                            LastName = "Genchev",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST@ABV.BG",
                            NormalizedUserName = "MARTIN",
                            PasswordHash = "AQAAAAEAACcQAAAAEEkywrlotJJtj+zb6XodgLkRVYtH40AbO1WK7C1/w8staiR61Kc3mrBw9OnfoHESOQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "0f2747cd-c9ea-4902-b216-2fc2974b8325",
                            TwoFactorEnabled = false,
                            UserName = "martin"
                        },
                        new
                        {
                            Id = "2",
                            AccessFailedCount = 0,
                            ConcurrencyStamp = "3458195d-6ed0-41a4-872b-80b59b3879ec",
                            Email = "test1@abv.bg",
                            EmailConfirmed = true,
                            FirstName = "Ivan",
                            FullName = "Ivan Ivanov",
                            LastName = "Ivanov",
                            LockoutEnabled = false,
                            NormalizedEmail = "TEST1@ABV.BG",
                            NormalizedUserName = "IVAN",
                            PasswordHash = "AQAAAAEAACcQAAAAEOJsLDsvNV9j/AMbxvgFe/1cUgty+k4asb2f2EIu69yyehzL/m4mghALf5n9biPXOQ==",
                            PhoneNumberConfirmed = false,
                            RefreshTokenExpiryTime = new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            SecurityStamp = "bcfb3a34-5a67-465e-854e-c71ee3aa786f",
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
                            ConcurrencyStamp = "9318b18d-3a9e-4d2d-8647-09213a788659",
                            Name = "admin",
                            NormalizedName = "ADMIN"
                        },
                        new
                        {
                            Id = "user_role",
                            ConcurrencyStamp = "44834457-541e-4a5e-836b-9cd5b8720e07",
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
