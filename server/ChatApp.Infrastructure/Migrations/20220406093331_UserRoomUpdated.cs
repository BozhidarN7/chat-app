using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class UserRoomUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "ece50194-d368-4f04-b4bf-364a8a9abadd");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "da308489-8b52-4744-a86c-b1a3e9b1338a");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ad07f42a-2ac7-4009-adfc-3f0367e79677", "AQAAAAEAACcQAAAAECx9Kwus6kskygm93zq+YmsNGE7u5q7CPC89HaRrpIBldiK4rbZqLaWcMYZOlscOnA==", "f14123cf-989f-4086-abe2-415a23f6cd79" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "f539565c-df0a-4cc0-86ec-fa1836f57b03", "AQAAAAEAACcQAAAAEBimm2a/D0Fx+rScdxQXLrAT5hocoL67fbtMTdhNDRy0l1HuMVHbH384dDBW6ErKoA==", "3ca4c67a-fdbf-4f66-83ed-3ac61b8b6add" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "RefreshTokenExpiryTime", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "05825369-b1b4-4545-a98f-f30bbca776ad", 0, "f7a8dbde-3c13-4b2e-bb01-e949cae46e8d", "test4@abv.bg", false, "Georgi", "Georgi Stoynov", "Stoynov", false, null, "TEST4@ABV.BG", null, "AQAAAAEAACcQAAAAEKAkGAI+BxCNvAKYQ/8AwPViEatzUeJyoIl6Q1uxNqaTuRqAlKQywfgVMSuvCb2NJQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "1113d905-e329-4528-a25d-570bdc4f3881", false, null },
                    { "451be6fc-3128-4ff8-ab45-a9fb6ce468bb", 0, "769cd077-bc66-407e-b565-c5110b83f069", "test9@abv.bg", false, "Desislava", "Desislava Genova", "Genova", false, null, "TEST9@ABV.BG", null, "AQAAAAEAACcQAAAAEDfvC7J+DpUOGK261/7oTQfHq8Lh8HgjOyfGWuhwkMS1b6JEy3TyNQGNVjovaZxuvQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "219a0921-66b5-4680-9b58-42da93e870a0", false, null },
                    { "60c7d5a2-6607-4207-a9df-229edd051547", 0, "35747e04-29c0-4ff1-9bcc-ef2a63721268", "test3@abv.bg", false, "Boris", "Boris Stamatov", "Stamatov", false, null, "TEST3@ABV.BG", null, "AQAAAAEAACcQAAAAEHPJabGbFfbzq6AgFvV4XEgc11fb03P5J44yTOGLZMxIlUqpHypzjDClDkoYbhJ5cw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "cf16b605-067e-49a9-81ad-f917cefa1266", false, null },
                    { "6a9bc8ba-f969-441a-810b-bbc972efc3a7", 0, "053c1a2d-d5f6-47d9-9c87-8bbba9898cb5", "test8@abv.bg", false, "Ani", "Ani Mincheva", "Mincheva", false, null, "TEST8@ABV.BG", null, "AQAAAAEAACcQAAAAEBLi1yzaSLNkjdD8OwXLZWxczZZ6bEJU2L7kEnKB3UjSYPS4AypTEH9xTO0//9jAVw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "eaf9d035-3a9c-4104-b069-ace55580fbac", false, null },
                    { "8b961203-84cc-44fb-b10a-d3b8221d985d", 0, "2ea1c928-f23a-40b2-b0ed-35893c83a0d9", "test5@abv.bg", false, "Momchil", "Momchil Ivanov", "Ivanov", false, null, "TEST5@ABV.BG", null, "AQAAAAEAACcQAAAAEFGMmTFCsdR1csj+Wg8zb/yT0P+5smX2A8cjtMrhYiP4HqWPW16yQl3GTNlnG9O+KA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "ba6c2e95-5afe-430f-abee-f6673ed82383", false, null },
                    { "a82abb7e-2679-4dd4-977e-82dee43682e3", 0, "be18d5c9-bd07-41ac-950d-422c0f7645a2", "test7@abv.bg", false, "Ivet", "Ivet Nikolova", "Nikolova", false, null, "TEST7@ABV.BG", null, "AQAAAAEAACcQAAAAEFdPx4OBJHQdDHnctwOOobc+H6lLUPogXsQNvSj3AMvWNgLuMkEuP9jCy6VPTMwx2g==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "00e2d6b5-2370-416c-bdda-d748c1a58ce6", false, null },
                    { "aa705904-a2df-489b-8fe5-1a1cde90f072", 0, "d060e0cd-608b-4cb1-9c29-17e6f5ff92cf", "test6@abv.bg", false, "Atanas", "Atanas Marinov", "Marinov", false, null, "TEST6@ABV.BG", null, "AQAAAAEAACcQAAAAEBJd1JN3KebSQUq19MnAOSTpH3ipayQyT9N0tpiEAnSsRGSCjROv+/uJ2zFCZFJT1w==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "d89b95ac-843a-4f2e-b4e1-fa34b4ff8030", false, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "05825369-b1b4-4545-a98f-f30bbca776ad");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "451be6fc-3128-4ff8-ab45-a9fb6ce468bb");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "60c7d5a2-6607-4207-a9df-229edd051547");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "6a9bc8ba-f969-441a-810b-bbc972efc3a7");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "8b961203-84cc-44fb-b10a-d3b8221d985d");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "a82abb7e-2679-4dd4-977e-82dee43682e3");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "aa705904-a2df-489b-8fe5-1a1cde90f072");

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
    }
}
