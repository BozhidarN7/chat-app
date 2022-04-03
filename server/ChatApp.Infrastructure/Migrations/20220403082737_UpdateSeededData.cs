using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class UpdateSeededData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                columns: new[] { "ConcurrencyStamp", "FirstName", "FullName", "LastName", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "3db58d5a-3703-4c5c-b30b-9ab4fe179c73", "Martin", "Martin Genchev", "Genchev", "MARTIN", "AQAAAAEAACcQAAAAEMoseAkgq7cdaoG/FUU41LTgpqqh0hZNqvW4O1VjH52ldkBIo7rH0Y906rXGAfsDjA==", "8bbfbeb1-eaa2-4d09-a399-9849cefacd86", "martin" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "FullName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "39205a71-7df1-4a23-95bb-ed905aeeb5b4", "Ivan Ivanov", "AQAAAAEAACcQAAAAEIf1dJcDOwC87pOjQ0XP9oC2aPL9r/FD6Iq0iabfhLNWS1jKW7TmT2x8+9pIGLHJog==", "9f4c1a13-ffaa-4f5b-a99b-a96679243afb" });

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                columns: new[] { "ConcurrencyStamp", "FirstName", "FullName", "LastName", "NormalizedUserName", "PasswordHash", "SecurityStamp", "UserName" },
                values: new object[] { "5638daa1-3c12-4cbf-984b-c36b60e4e7e4", "Bozhidar", null, "Nemski", "BOZHIDAR", "AQAAAAEAACcQAAAAEG+974uTtMjSVFiQQKnBzuDH5YSqwkxa6WM4lwVeYjYpts9qd+rlDChTTWWbsqUEow==", "73d92470-3bd7-472d-880c-b8ddc2279dfc", "bozhidar" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "FullName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "399be32b-3afd-43ee-9e62-7f4423853570", null, "AQAAAAEAACcQAAAAEBN8OeeUr4NvLkKUX+22gL+DvRo72Rpaxsv7HJ+Zo0iIEwUz8HPCICjkU1KRTM00bQ==", "7edba5d8-4a29-4fe9-b70b-a110b0fc9a58" });

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
    }
}
