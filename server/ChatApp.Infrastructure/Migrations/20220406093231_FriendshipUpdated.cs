using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class FriendshipUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<Guid>(
                name: "RoomId",
                table: "Friendships",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "9318b18d-3a9e-4d2d-8647-09213a788659");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "44834457-541e-4a5e-836b-9cd5b8720e07");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "60eee900-da82-4ca0-99ac-932a553732a1", "AQAAAAEAACcQAAAAEEkywrlotJJtj+zb6XodgLkRVYtH40AbO1WK7C1/w8staiR61Kc3mrBw9OnfoHESOQ==", "0f2747cd-c9ea-4902-b216-2fc2974b8325" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "3458195d-6ed0-41a4-872b-80b59b3879ec", "AQAAAAEAACcQAAAAEOJsLDsvNV9j/AMbxvgFe/1cUgty+k4asb2f2EIu69yyehzL/m4mghALf5n9biPXOQ==", "bcfb3a34-5a67-465e-854e-c71ee3aa786f" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "RefreshTokenExpiryTime", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "257aa2fe-65ec-4287-95a6-8a15091773e0", 0, "907f15e6-978e-4438-a58e-1c35d34670ca", "test4@abv.bg", false, "Georgi", "Georgi Stoynov", "Stoynov", false, null, "TEST4@ABV.BG", null, "AQAAAAEAACcQAAAAEK4LKiTdGDqSZb4FjHIRYfnu5g/HYWNvsbpnzdMwbODuBNYiBVJPVbNzPD71eWimqQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "00c6635b-ac22-4a6d-9885-3c68b1a4fa60", false, null },
                    { "404a553f-4026-416a-a4e3-635c762bf6ae", 0, "c8e1cdd4-4a98-4c2c-a0d5-910a4066235c", "test6@abv.bg", false, "Atanas", "Atanas Marinov", "Marinov", false, null, "TEST6@ABV.BG", null, "AQAAAAEAACcQAAAAED4DVDcJbl9FBu+T2LyvasxDY3bSlDDLt3SWvf8F23G9ThWyYJ5J00hCH9lJS7iSdg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "fb9a1531-08ed-4546-9ac0-913bb9a8dca9", false, null },
                    { "482e8837-ffb1-4fd7-ba20-69563293f4f0", 0, "4ce78ffb-d61f-4bd9-8946-e8e9bb94f8ff", "test8@abv.bg", false, "Ani", "Ani Mincheva", "Mincheva", false, null, "TEST8@ABV.BG", null, "AQAAAAEAACcQAAAAEKv8F3nSCkfUeNhPaQpXl1y6S7+59NgPHTIR5cemdsH3hIw4rLe3chTm0PQdWMSMuA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "3e38bdf3-c75e-4ae6-83a6-1db020fd0941", false, null },
                    { "a0a1d293-6322-495e-bc63-8e42e3200cda", 0, "a1923d82-39c0-4a04-a271-e6d54a389def", "test5@abv.bg", false, "Momchil", "Momchil Ivanov", "Ivanov", false, null, "TEST5@ABV.BG", null, "AQAAAAEAACcQAAAAEAD3Ln7V2MEfgCO3sFQHpvihYOwNZk1wv0x1iGltCBHN3smeWrr/NxRuemKFvy9Iiw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "5a42d0ec-b42f-4396-88d9-708a26a5c8f3", false, null },
                    { "dd6744d1-9e5c-4dd1-b500-8a718bb742d6", 0, "54e239cc-01ef-4d19-9f17-966cc682a5bf", "test9@abv.bg", false, "Desislava", "Desislava Genova", "Genova", false, null, "TEST9@ABV.BG", null, "AQAAAAEAACcQAAAAENyqArIdmq8JoZ/6vVRoPFbq5rHek7NiY+PiUPNSPNukE552p3UPOXww5YNc8th5JQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "994aefdd-04c6-4258-a083-6370e257e42b", false, null },
                    { "faf93ff1-b8da-46e8-90fe-4643a3ed79e7", 0, "e4525ce0-8a85-4c6e-b1b6-035165f1feeb", "test3@abv.bg", false, "Boris", "Boris Stamatov", "Stamatov", false, null, "TEST3@ABV.BG", null, "AQAAAAEAACcQAAAAENmhiCocm7flRSkLeyzrxB1LFZk/dvN6OZFXmN3aFYr6XILTRzK/2B9zwjQC12jqbw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "546a2cbd-ea86-4827-b55b-eb194c7b88a4", false, null },
                    { "fca1d495-d330-4fce-a920-a5c013bf1ce5", 0, "174cdb78-efca-4ba4-999b-a53ac743155c", "test7@abv.bg", false, "Ivet", "Ivet Nikolova", "Nikolova", false, null, "TEST7@ABV.BG", null, "AQAAAAEAACcQAAAAENwq38mvhaDz3Q9uTYCs2S3pQ9XrNd/Pl9wrY2cmnFsErWlL4w0Hc+G4HzFEGQnFUg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "3961e864-581d-4e1d-bd8c-95945c68b853", false, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "257aa2fe-65ec-4287-95a6-8a15091773e0");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "404a553f-4026-416a-a4e3-635c762bf6ae");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "482e8837-ffb1-4fd7-ba20-69563293f4f0");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a0a1d293-6322-495e-bc63-8e42e3200cda");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dd6744d1-9e5c-4dd1-b500-8a718bb742d6");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "faf93ff1-b8da-46e8-90fe-4643a3ed79e7");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "fca1d495-d330-4fce-a920-a5c013bf1ce5");

            migrationBuilder.AlterColumn<string>(
                name: "RoomId",
                table: "Friendships",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier");

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
    }
}
