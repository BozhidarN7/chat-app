using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class ApplicationUserUpdated : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "0da0ee02-11e7-4a55-bfbb-992070199422");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "93417af1-b890-4241-af83-934e4f974448");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "d10d5852-51c1-42b8-8c2b-e8a88e47c146", "AQAAAAEAACcQAAAAEMzbMqfjRhPFb3DTh2879rtNwjLKI8+uwwky0UApNceXR8DLx9Nyg6OgD7e9Vh9W2w==", "bd234fc2-134f-4daa-88e6-3aa163cdb2b1" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "089caebe-dd56-4272-b990-1a92abfed71c", "AQAAAAEAACcQAAAAECdrrUt/Tc4m32VUGLUOGI8NVMVXzJciEETeiyMn9zF+25gNZBX+PBruqWegUydPOA==", "13ee8223-fef7-4971-b0f8-79c6df8d0742" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "CreatedAt", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "RefreshTokenExpiryTime", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "2a078f32-0d85-4ed9-a5d0-8cc51acee7ef", 0, "84e9ac51-a7e8-472b-8cd5-4bc1ebf93820", new DateTime(2022, 4, 16, 8, 21, 51, 263, DateTimeKind.Local).AddTicks(999), "test4@abv.bg", false, "Georgi", "Georgi Stoynov", "Stoynov", false, null, "TEST4@ABV.BG", null, "AQAAAAEAACcQAAAAEJ99FU8w8DzTAFI1xVgGhZmUksy4+FJgDUR47UhacxnfuAEcUvyhFnhS3cQOg2ZRZw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "56ccf7c0-dee0-42bd-8103-027a7aee1bf8", false, null },
                    { "48d135d8-a5b3-473f-bd40-de1ed1454e33", 0, "9fbc6386-f172-47f1-a4b3-ec0e03d6a147", new DateTime(2022, 4, 16, 8, 21, 51, 277, DateTimeKind.Local).AddTicks(9043), "test6@abv.bg", false, "Atanas", "Atanas Marinov", "Marinov", false, null, "TEST6@ABV.BG", null, "AQAAAAEAACcQAAAAEKay5Yh5gDsXhqbJ4ZdSA9bogPGqm2KGuhMXfWP3BNyLcxPP0OMw7PgyTArnDsL6Ig==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "5708d91e-ba49-4904-9d37-1d714f393528", false, null },
                    { "59755e5d-4155-4c4f-8537-5720b160fa0e", 0, "8f29d278-b27a-4f89-a837-e050102d692b", new DateTime(2022, 4, 15, 8, 21, 51, 292, DateTimeKind.Local).AddTicks(1465), "test8@abv.bg", false, "Ani", "Ani Mincheva", "Mincheva", false, null, "TEST8@ABV.BG", null, "AQAAAAEAACcQAAAAECJK5mv+EifxAnCBXAn2S75zZ1GErTWbdqNpxaZoefkzRFJ2dHkokOMdhyOZjphkGw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "419575fa-c76a-4f77-81ba-299110a1f2c8", false, null },
                    { "c29b5ca2-59a6-4690-a619-874f3065a518", 0, "86ceccb9-ed53-431b-a242-7a54d1198ba8", new DateTime(2022, 4, 16, 8, 21, 51, 270, DateTimeKind.Local).AddTicks(8872), "test5@abv.bg", false, "Momchil", "Momchil Ivanov", "Ivanov", false, null, "TEST5@ABV.BG", null, "AQAAAAEAACcQAAAAEFewJ0DQje2tpYh8/0ah+5YuAYzOgO8D6ISkZV79nqD0EeGXsX9G9CzGqP+c0lzECA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "601d9844-34e4-4ac0-b326-51b5bbf99376", false, null },
                    { "cda0eabf-217b-4d60-abe5-bcd88a508c13", 0, "793230a3-9a6f-4007-a981-ee6b4d55b5da", new DateTime(2022, 4, 15, 8, 21, 51, 299, DateTimeKind.Local).AddTicks(3762), "test9@abv.bg", false, "Desislava", "Desislava Genova", "Genova", false, null, "TEST9@ABV.BG", null, "AQAAAAEAACcQAAAAEE3qLz2+JX+2fIEgjjbUg+OE9O1uUXMQN7sHfYqZ5Jb+qZYfEGoZ7U3Duk2sEhyWNA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "1a2f0e8e-243c-4ae8-b0f1-81a5d3f9bb98", false, null },
                    { "d185bdf2-4039-4802-b187-6bef7c815575", 0, "963b6a5c-9ca5-418b-809d-cd5e1306c039", new DateTime(2022, 4, 15, 8, 21, 51, 255, DateTimeKind.Local).AddTicks(7001), "test3@abv.bg", false, "Boris", "Boris Stamatov", "Stamatov", false, null, "TEST3@ABV.BG", null, "AQAAAAEAACcQAAAAEAxKQJohNAg7lOFSqlVQ2zBUkS99t7/2jJppolZBZlpvpX1bm+RhgznF4Tf97SymgA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "e1cf6efb-9f35-4b2d-9ab4-1ad18a0dc67e", false, null },
                    { "ea6077fe-1772-4404-abee-9267d7b1da02", 0, "84d0a76e-a1f8-48a1-8e78-f921b9a2be62", new DateTime(2022, 4, 15, 8, 21, 51, 285, DateTimeKind.Local).AddTicks(1242), "test7@abv.bg", false, "Ivet", "Ivet Nikolova", "Nikolova", false, null, "TEST7@ABV.BG", null, "AQAAAAEAACcQAAAAEG3DL7ZTZSD3Pssu1PgxXYKxKYoN/r8itdJ/cBEig8WEHBl+Wl+HgRSVFZInM1zfyQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "0bc7c40a-e2f5-49bd-8fe2-6b0e48e6f588", false, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2a078f32-0d85-4ed9-a5d0-8cc51acee7ef");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "48d135d8-a5b3-473f-bd40-de1ed1454e33");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "59755e5d-4155-4c4f-8537-5720b160fa0e");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "c29b5ca2-59a6-4690-a619-874f3065a518");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "cda0eabf-217b-4d60-abe5-bcd88a508c13");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "d185bdf2-4039-4802-b187-6bef7c815575");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "ea6077fe-1772-4404-abee-9267d7b1da02");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "AspNetUsers");

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
    }
}
