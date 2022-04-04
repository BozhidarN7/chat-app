using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class FriendShipExtended : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2dac5aa3-184f-4c6d-8354-9124b3f937cb");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5468ebf0-ecce-4f3f-8579-7f65c88115e3");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5dd0f0b6-e025-4612-8f00-d0da266e59a6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "612f17b3-ab0d-49e3-8bf6-180e7c72ca48");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "70c8574c-b586-4d06-80ba-8dee70797a0c");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d1a4741e-bd6d-46ac-89e5-9f10d8ebf010");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "ec27ed22-7d04-41e5-a43e-f010a6d1d0d5");

            migrationBuilder.AddColumn<bool>(
                name: "Accepted",
                table: "Friendships",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Rejected",
                table: "Friendships",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "b0185dfb-a786-4655-87a5-5bf756b09b88");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "5c453aec-e2c5-43a2-9cf6-4be37e35bf1a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a9c7c5d8-a8b0-4834-abab-199f37e19828", "AQAAAAEAACcQAAAAEO2+1cZC/XN9OlIi7nADFWvuXkwpaktXmVVBWn+9IL8M/0KlV56maGjUPRkqTUFYPQ==", "e652066e-0bff-4f4d-aa7a-c035859cb075" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "942f6812-ec28-44a3-ab10-cd82318f9b68", "AQAAAAEAACcQAAAAEKA7EiF2erBYy7D918O2TSDZgZA5+oZkr6Srbz73q/AKmoerBACMsN5zcZqBsgkojA==", "11723bcd-83c6-45cd-ab79-7ad4b2f6c488" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "RefreshTokenExpiryTime", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "276a0d21-5c6e-4926-8292-73cd6de81761", 0, "703ee31a-2492-499e-b5e4-9b5604ba0a49", "test3@abv.bg", false, "Boris", "Boris Stamatov", "Stamatov", false, null, "TEST3@ABV.BG", null, "AQAAAAEAACcQAAAAEBgfVpjfGNzO5aYpsbSiY7YDsfpfE/PZyEyQE9PWOofjnfqs/xm3+7Fs7Cox8H/sDA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "75c5a736-d5f7-406c-8d42-3acd3adca733", false, null },
                    { "434109d5-00b4-4c7d-9151-0db22166480a", 0, "f74abf1a-ab6d-43f3-9a18-3c399e838d5d", "test9@abv.bg", false, "Desislava", "Desislava Genova", "Genova", false, null, "TEST9@ABV.BG", null, "AQAAAAEAACcQAAAAEIu4WUg90fXa2mWfdSYiDJpdCEtY/jVk2Ra/Y7y9y/eJxtT+axtA8zitkrWLxrEHfQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "8a18413c-aa04-4b9a-b485-5c0c16d7870f", false, null },
                    { "4f30fd51-cccd-4c9a-9994-4ad4f5ff5424", 0, "b9b7b584-02a7-40c6-a705-d2b4e170dd55", "test7@abv.bg", false, "Ivet", "Ivet Nikolova", "Nikolova", false, null, "TEST7@ABV.BG", null, "AQAAAAEAACcQAAAAELrVbPyMoXlnfZJcCNWpJC+bIWz5fbcigIU58OAeR4tIT2PqDAaZrG7lxay1UCioAg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "c344a386-808f-462e-a33e-0b29271794bc", false, null },
                    { "84094bf7-6604-409c-866c-0eff2d18e24e", 0, "7a015499-19a9-4cc2-a399-47aa435eca69", "test4@abv.bg", false, "Georgi", "Georgi Stoynov", "Stoynov", false, null, "TEST4@ABV.BG", null, "AQAAAAEAACcQAAAAEDfTmoj8HcArl9/F2aD3nmVcMVxlkHxPWwiA2VL4Hqc/4mkMO/MKAFS9Xsn5G/ke9A==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "fbeda325-f824-4083-bed0-f112c528fddc", false, null },
                    { "9e74c4ff-d166-40d4-9a5f-12bd8ccccb4a", 0, "7c505140-9a8f-46c5-a676-248f441d3cb2", "test5@abv.bg", false, "Momchil", "Momchil Ivanov", "Ivanov", false, null, "TEST5@ABV.BG", null, "AQAAAAEAACcQAAAAEOYzDsqbiu6wHJdvsbc0XJOE50HGb1cZaZB5PJjHoxEjTWt7gd2Sj/nobwISur6+OQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "5b18531b-6de0-4a2c-b7f6-bffe288f5122", false, null },
                    { "a8eb158e-3e48-4e14-8329-04ae21b840af", 0, "2abd84b0-3b6c-4137-a70f-f9b3faf6aa7f", "test8@abv.bg", false, "Ani", "Ani Mincheva", "Mincheva", false, null, "TEST8@ABV.BG", null, "AQAAAAEAACcQAAAAEFzvPwdfY7iovtNGR4l5upUhj3DY494mW0UKD8CVOagjoqNc8f88f7xuGvFA0SpUqw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "a2812f22-1080-4d43-bff7-dfa86da607b8", false, null },
                    { "a93c9764-3ab7-4e1e-93dc-1f883a708cb0", 0, "9a536e3b-2766-4d47-8448-e94692708e31", "test6@abv.bg", false, "Atanas", "Atanas Marinov", "Marinov", false, null, "TEST6@ABV.BG", null, "AQAAAAEAACcQAAAAEE8VF18t/SCrXY3DTwHQOCWGw3a/g/La2cCdHvL4maa3rHG4rfOnlrqbZyWz4E/pjg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "e49e27fb-bb58-468e-803b-610446c56cae", false, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "276a0d21-5c6e-4926-8292-73cd6de81761");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "434109d5-00b4-4c7d-9151-0db22166480a");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "4f30fd51-cccd-4c9a-9994-4ad4f5ff5424");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "84094bf7-6604-409c-866c-0eff2d18e24e");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "9e74c4ff-d166-40d4-9a5f-12bd8ccccb4a");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a8eb158e-3e48-4e14-8329-04ae21b840af");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a93c9764-3ab7-4e1e-93dc-1f883a708cb0");

            migrationBuilder.DropColumn(
                name: "Accepted",
                table: "Friendships");

            migrationBuilder.DropColumn(
                name: "Rejected",
                table: "Friendships");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "108fdf10-81ce-4651-a570-c61442c8d119");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "877044c7-4ca0-4e0c-8422-e5759025d385");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "3db58d5a-3703-4c5c-b30b-9ab4fe179c73", "AQAAAAEAACcQAAAAEMoseAkgq7cdaoG/FUU41LTgpqqh0hZNqvW4O1VjH52ldkBIo7rH0Y906rXGAfsDjA==", "8bbfbeb1-eaa2-4d09-a399-9849cefacd86" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "39205a71-7df1-4a23-95bb-ed905aeeb5b4", "AQAAAAEAACcQAAAAEIf1dJcDOwC87pOjQ0XP9oC2aPL9r/FD6Iq0iabfhLNWS1jKW7TmT2x8+9pIGLHJog==", "9f4c1a13-ffaa-4f5b-a99b-a96679243afb" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "RefreshTokenExpiryTime", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "2dac5aa3-184f-4c6d-8354-9124b3f937cb", 0, "29a298e0-8d6a-4b26-89b7-2c1255c29090", "test5@abv.bg", false, "Momchil", "Momchil Ivanov", "Ivanov", false, null, "TEST5@ABV.BG", null, "AQAAAAEAACcQAAAAEJphdw4O/0tiPY+em/RHgeSPhikIHGgiSLSHzFjDoTUI5j9MgGTm392cbabkgDLh7g==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "2fee700d-848c-48eb-9012-c089a7090cb7", false, null },
                    { "5468ebf0-ecce-4f3f-8579-7f65c88115e3", 0, "a4439712-88ab-4b66-b4f1-d0ca7b69b071", "test4@abv.bg", false, "Georgi", "Georgi Stoynov", "Stoynov", false, null, "TEST4@ABV.BG", null, "AQAAAAEAACcQAAAAEJTYeQDCQZ9STAwQTyHl2dHNuUu+K7qtJEn7S2BM27Z09wJUGZgobJgvBLpFsWIONQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "991ff552-7e10-4013-96b7-30e8d77ee986", false, null },
                    { "5dd0f0b6-e025-4612-8f00-d0da266e59a6", 0, "354ed75b-b6e3-4a06-a8b8-1d55db5568a3", "test9@abv.bg", false, "Desislava", "Desislava Genova", "Genova", false, null, "TEST9@ABV.BG", null, "AQAAAAEAACcQAAAAEL0IttKdRYNLod3FwVoCulMlcONUdlY/KXREF4jXsS/BvKN2s/KCzh5dfv+K2C6lmw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "0ff0bfe9-47c0-47e7-a849-619c4dff4a46", false, null },
                    { "612f17b3-ab0d-49e3-8bf6-180e7c72ca48", 0, "7008a58c-1c07-49ca-902c-76cb24c0840d", "test3@abv.bg", false, "Boris", "Boris Stamatov", "Stamatov", false, null, "TEST3@ABV.BG", null, "AQAAAAEAACcQAAAAEG0NJ/5B60WTOqbs16wFLBW+cCU+1sLpROK6ToEL4B50mw2fdCjpSMt82K35v3E8kw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "461d57a0-b63b-48df-8c52-8609d71555fa", false, null },
                    { "70c8574c-b586-4d06-80ba-8dee70797a0c", 0, "4e9be68b-611f-45f7-8af4-2fc365e53775", "test7@abv.bg", false, "Ivet", "Ivet Nikolova", "Nikolova", false, null, "TEST7@ABV.BG", null, "AQAAAAEAACcQAAAAED1mjtORfVua9yv4Dp+ZinT8srXiwY2V5TsWUvbcrS5TomGcPR5TOePF/CxCrinRsQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "f0c48490-e4d8-410f-966b-41f56c2507a5", false, null },
                    { "d1a4741e-bd6d-46ac-89e5-9f10d8ebf010", 0, "beb81bc0-95c6-48fa-ba4d-78c758850c29", "test6@abv.bg", false, "Atanas", "Atanas Marinov", "Marinov", false, null, "TEST6@ABV.BG", null, "AQAAAAEAACcQAAAAEJULt3Sln76t+MnxGqqSWLgcgkocuCocXjglRna53R1TDKRSOkQesbH10LZ1nLFVfg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "be083bd0-8a61-4dd1-a065-c52fff836857", false, null },
                    { "ec27ed22-7d04-41e5-a43e-f010a6d1d0d5", 0, "92d14ac6-e5fe-4c75-a3ae-9170f8da8343", "test8@abv.bg", false, "Ani", "Ani Mincheva", "Mincheva", false, null, "TEST8@ABV.BG", null, "AQAAAAEAACcQAAAAEIda7MY0KdoS6eV/I3hi8090eQcKV0Vktd0Qivm0PxlihldcSDeyEliU38f/ZfJWvA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "5a34c42c-9076-4943-b86f-b06ad153eaa2", false, null }
                });
        }
    }
}
