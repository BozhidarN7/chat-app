using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class AddedNewUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "2d821221-0ae0-4e4e-96bd-2bb4da4b951f");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "764138aa-3ec5-4981-94ed-5d85ef921ec4");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "5638daa1-3c12-4cbf-984b-c36b60e4e7e4", "AQAAAAEAACcQAAAAEG+974uTtMjSVFiQQKnBzuDH5YSqwkxa6WM4lwVeYjYpts9qd+rlDChTTWWbsqUEow==", "73d92470-3bd7-472d-880c-b8ddc2279dfc" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "399be32b-3afd-43ee-9e62-7f4423853570", "AQAAAAEAACcQAAAAEBN8OeeUr4NvLkKUX+22gL+DvRo72Rpaxsv7HJ+Zo0iIEwUz8HPCICjkU1KRTM00bQ==", "7edba5d8-4a29-4fe9-b70b-a110b0fc9a58" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "FirstName", "FullName", "LastName", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "RefreshToken", "RefreshTokenExpiryTime", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "07cce3a4-17ef-49b8-89a8-9087e3b0d2a5", 0, "10ab48d1-6eab-4471-b13d-be9aa9e10ed1", "test5@abv.bg", false, "Momchil", "Momchil Ivanov", "Ivanov", false, null, "TEST5@ABV.BG", null, "AQAAAAEAACcQAAAAEMT+JHHve5J6uBrs4ZNdJJbkoo60VT4MoC7QSYazzOrw0OmCXlC/MnleioPOAQGREA==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "7ade6c34-fe77-448a-bf51-bd883809103e", false, null },
                    { "0e32b8f5-b9bd-4705-a678-6e1dab7b9f24", 0, "11846e88-88b4-45d7-aecb-d097cbc8c4e0", "test8@abv.bg", false, "Ani", "Ani Mincheva", "Mincheva", false, null, "TEST8@ABV.BG", null, "AQAAAAEAACcQAAAAEAw5JAx8EslwfCcyeNuJ1VRtrFbQw7KD8pI+L89b/fKW6CBeQ+LriEM6HMwfw3YNPg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "7a38c09b-13a6-4818-b9ae-1639b85d85b5", false, null },
                    { "2488c88d-af83-48de-ac2b-5fc7da11a879", 0, "c87ce6f6-443e-4012-b264-a1d63a212e26", "test3@abv.bg", false, "Boris", "Boris Stamatov", "Stamatov", false, null, "TEST3@ABV.BG", null, "AQAAAAEAACcQAAAAEOCjgjUICy8+K9FJ3t3LNSeokndVkr0PgK1Uh4sCj76fZczcv3t4BSxy8QK0x9au8A==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "d4fe23af-0408-4c79-9f51-20e36f5ba6fd", false, null },
                    { "474cbefd-4291-4fd8-85df-2790e616101b", 0, "59407313-7c1e-4e4c-afde-164baad826de", "test9@abv.bg", false, "Desislava", "Desislava Genova", "Genova", false, null, "TEST9@ABV.BG", null, "AQAAAAEAACcQAAAAEGbzWWlPtPLD4bu4pERBxIXZ/cENuD/YjKRK58AsaoDG6Od/6HbjQ8DWcrmFnt7Lfg==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "36008ae0-b7f6-4fe8-8328-8a5955c270d1", false, null },
                    { "5b9dc696-c906-4aad-b2c6-e03552dae31a", 0, "2bbce539-6791-402e-985a-34654734505e", "test6@abv.bg", false, "Atanas", "Atanas Marinov", "Marinov", false, null, "TEST6@ABV.BG", null, "AQAAAAEAACcQAAAAEP7bmEAwdFyPUMvN+aFRKPtPNe6mqX9n4xtWnRKkhn+tyKKqLJ0EgpoFQGyhZ2e0nQ==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "12485cf4-21dd-4cad-bc93-21c147ae01ce", false, null },
                    { "dad8db26-ab2b-49ba-945d-7caff76c4798", 0, "967bb2ad-8c5a-491a-8407-76576e7b674c", "test7@abv.bg", false, "Ivet", "Ivet Nikolova", "Nikolova", false, null, "TEST7@ABV.BG", null, "AQAAAAEAACcQAAAAELHPnlJlr86pqyhysXh9popUft6u5KYaCyDb2bdQcaSCH3SLN3dATogXRKZKjAStAw==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "df5a66f1-37d6-44a3-8a3b-30fa78430d57", false, null },
                    { "e9a9c5a3-68f5-4dfd-ba69-3fea8aea1c2d", 0, "23bbdeca-5ad9-4423-827f-ccc1b7d502d3", "test4@abv.bg", false, "Georgi", "Georgi Stoynov", "Stoynov", false, null, "TEST4@ABV.BG", null, "AQAAAAEAACcQAAAAEPB/scUZhJ7PwWM8jD2j+KYOlTjdbCO9hucBWZ1lDC+K52lxk8TIYxADo7B6DIWQ8A==", null, false, null, new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "f6612a15-1d28-41b0-9368-3b0e0f7668db", false, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "07cce3a4-17ef-49b8-89a8-9087e3b0d2a5");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0e32b8f5-b9bd-4705-a678-6e1dab7b9f24");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2488c88d-af83-48de-ac2b-5fc7da11a879");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "474cbefd-4291-4fd8-85df-2790e616101b");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "5b9dc696-c906-4aad-b2c6-e03552dae31a");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "dad8db26-ab2b-49ba-945d-7caff76c4798");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "e9a9c5a3-68f5-4dfd-ba69-3fea8aea1c2d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "419727f5-90cd-454d-aad8-6bfc82a7ec53");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "19240cba-5885-43bd-9c90-232c96edbdf5");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "7ca80919-fc4c-4ce9-bc83-9796a6c3abfd", "AQAAAAEAACcQAAAAEPKaPnUESGJubNyI4TUPFHS1ByXCajWlSSiSBRzC2YX52cRUdlL02OPRuuBks9ytwQ==", "fabe2c88-65f4-42c3-9bb1-c327ca4370e1" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a454c478-4012-4952-8ff5-240ca101c4a7", "AQAAAAEAACcQAAAAEECDLklsCXoyY9xGu5s1rnJSbF8U65Ldvx5XAaQ7qUM96xz+9px+JgPyqRiktM7ajQ==", "efdd4e8c-728d-465e-b3e9-ff4c43415a2b" });
        }
    }
}
