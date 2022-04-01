using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class AddedFullNameToApplicationUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FullName",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "8e0114a5-dfb6-4dc7-ac81-bdcdce8303e3");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "b2dbb7df-dd98-424f-baff-9fbf12f86ee8");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ef88eac6-a68b-41c2-b378-3c652323eae1", "AQAAAAEAACcQAAAAEFn5Og550N0/vl0toPCrLK+ZNnsjXYKKFZeDo2zqu8huR9Tgs9mZgSbOatjPYFaR0g==", "0ecc24f9-a187-48f8-9764-647f74f42e01" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "139a8f06-e960-4358-84cb-4b86ff51eb75", "AQAAAAEAACcQAAAAEMaEhsfOWVy76gLoPOTrG43aZV/M0otT2QYzl+9Ub0K7ipiatE3tKJ5mAc1V8Ivk0A==", "3af93eda-b1ab-4d56-a319-060519a915c5" });
        }
    }
}
