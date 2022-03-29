using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class ExtendedFriendShipModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RoomId",
                table: "Friendships",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "18f70481-c488-4140-ab66-9e3e806adcbd");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "88e4c445-bb6b-4c89-8bf6-776936b1a9d0");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "68ced828-6157-4b44-a616-b94dad7244b8", "AQAAAAEAACcQAAAAEG6mNO59UrF7bMbe5LooQuRYtuokX3V85gayhNer6VqdX8NASC/qIiM8cy2jszgMHg==", "b30d9480-4644-45ae-a84b-a24ea9bd5018" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "342fbc59-c7e7-4757-b35f-d5d2276f6456", "AQAAAAEAACcQAAAAEDohpTbkjFlu08mbTU0bGbKcizr4+CD8gRbC3gvlSiBPGA9aFcCcXrnyMStjmxRXug==", "ee605926-6e80-4c09-be2b-661c38a1b1e2" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RoomId",
                table: "Friendships");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "admin_role",
                column: "ConcurrencyStamp",
                value: "5fbd9ef3-6738-4368-8ece-9701753206a2");

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "user_role",
                column: "ConcurrencyStamp",
                value: "6078c4ba-fef2-412f-9581-afd24245bc68");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "1",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "da222f28-7523-486a-9030-7781e33c1bf5", "AQAAAAEAACcQAAAAEGcfggEIZP5FCdGMaBRbeh9fnSytWIRhXEoS4ysLwe+FVFARgxWt1CzPbPubkS3cmw==", "2c8b87c5-f663-4c13-aa31-3004b337a7e2" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "e290202e-c298-44de-b42b-165f5141dd82", "AQAAAAEAACcQAAAAECzMKexWVSSq6j9dt3Y6QcFdiuBu8xZhXLYgQ41EIpuhA0dTnvPQ4C0ynfzh1FR4qA==", "97917717-44d7-46c9-9105-416c2c7c6f18" });
        }
    }
}
