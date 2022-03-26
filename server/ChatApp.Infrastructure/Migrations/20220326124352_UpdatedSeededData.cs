using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class UpdatedSeededData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "b804d11d-cead-416a-962b-ad41885d9e7f");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "a486ed00-ef59-4c05-a4d2-5547b296ddbd");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "PasswordHash", "SecurityStamp" },
                values: new object[] { "35336a96-7275-413f-b6ee-0894d344001b", "TEST@ABV.BG", "AQAAAAEAACcQAAAAEEkTQAVQ/FMcOib9OgTRxWZs1mw/EmxoHXuUxH0dhtj2uC2X/DdLHWNRSmU/+vN1PQ==", "1eab1917-a377-4e57-9682-aec55f68fbe2" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "PasswordHash", "SecurityStamp" },
                values: new object[] { "68e1cbf2-a18d-45a3-9289-d7ffc09fb3c6", "TEST1@ABV.BG", "AQAAAAEAACcQAAAAEALg6xpGEJKKkTaR1QlKvha1bHDpgi/PLpX5Gwrva8poTzyI3cj5M6DuEglVzwrtCw==", "0362adea-22b1-46aa-a6fd-18855fcc6dc1" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "57dcfdb2-aebf-489e-946d-0dc7caeac061");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "3cf8a979-82d4-404d-8291-b7f61c6659d2");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "PasswordHash", "SecurityStamp" },
                values: new object[] { "a4358f5d-fd84-4935-a61a-2f319821b537", null, "AQAAAAEAACcQAAAAEJg7Nn0DdhkbhijDns9HBnBtYIFibL6qsH5gtYbLabqj7r1Djhw1BlBBvB8a2X7jdg==", "34021336-ea5b-4509-81ab-f1eb33358c77" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "PasswordHash", "SecurityStamp" },
                values: new object[] { "cadeb90d-2d23-48ef-bea6-aacf1a2d6e0f", null, "AQAAAAEAACcQAAAAENRP3AoidszVUDtGW1XSZBnm9GONkztBy+Mlny09jOMQdyUaGDpypj3l116at9MjEg==", "99a3d4f0-ebb0-4973-bc9d-bb63fc6fd2f6" });
        }
    }
}
