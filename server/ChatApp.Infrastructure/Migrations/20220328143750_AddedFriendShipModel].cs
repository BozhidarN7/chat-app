using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ChatApp.Infrastructure.Migrations
{
    public partial class AddedFriendShipModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Friendships",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    UserSendId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserReceiveId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Friendships", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Friendships_AspNetUsers_UserSendId",
                        column: x => x.UserSendId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_Friendships_UserSendId",
                table: "Friendships",
                column: "UserSendId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Friendships");

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
    }
}
