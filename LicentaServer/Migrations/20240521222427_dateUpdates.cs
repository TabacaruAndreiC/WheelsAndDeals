using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LicentaServer.Migrations
{
    /// <inheritdoc />
    public partial class dateUpdates : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "LastUpdateOn",
                table: "Brands",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "LastUpdatedBy",
                table: "Brands",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LastUpdateOn",
                table: "Brands");

            migrationBuilder.DropColumn(
                name: "LastUpdatedBy",
                table: "Brands");
        }
    }
}
