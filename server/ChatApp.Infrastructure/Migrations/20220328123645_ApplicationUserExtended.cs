using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class ApplicationUserExtended : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RefreshToken",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "RefreshTokenExpiryTime",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "f1f39b7a-ddf2-4afe-96d0-f88c5118031d");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "2a38564f-102f-4072-99df-a6eae6b331b1");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "8aa39e2d-f333-420b-8174-18b84f2dbd59", "AQAAAAEAACcQAAAAEM8SLrhsZwRiS2SDeEqiDQ4L0kySxNgPLGQKnP+ip+qcG8a77rYV+XmHXD6N+exazg==", "46c306d1-2eaa-4d58-8e8f-85c46e6dcae0" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "d93a20cf-7b94-4be7-b0a4-698e1328060b", "AQAAAAEAACcQAAAAEKEykPIeVCIR9+V0yXhSJUPPJMsFlNfjimQXmXHN0hHu0PzXuvUryeHqO8cfXjL3Tw==", "2648585a-2f35-404b-a240-2ce54d63ed26" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RefreshToken",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "RefreshTokenExpiryTime",
                table: "AspNetUsers");

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
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "35336a96-7275-413f-b6ee-0894d344001b", "AQAAAAEAACcQAAAAEEkTQAVQ/FMcOib9OgTRxWZs1mw/EmxoHXuUxH0dhtj2uC2X/DdLHWNRSmU/+vN1PQ==", "1eab1917-a377-4e57-9682-aec55f68fbe2" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "68e1cbf2-a18d-45a3-9289-d7ffc09fb3c6", "AQAAAAEAACcQAAAAEALg6xpGEJKKkTaR1QlKvha1bHDpgi/PLpX5Gwrva8poTzyI3cj5M6DuEglVzwrtCw==", "0362adea-22b1-46aa-a6fd-18855fcc6dc1" });
        }
    }
}
