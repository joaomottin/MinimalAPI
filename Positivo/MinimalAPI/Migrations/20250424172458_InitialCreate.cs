using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace MinimalAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Restaurantes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Endereco = table.Column<string>(type: "TEXT", nullable: false),
                    Telefone = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Restaurantes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Pratos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    Preco = table.Column<decimal>(type: "TEXT", nullable: false),
                    RestauranteId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pratos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Pratos_Restaurantes_RestauranteId",
                        column: x => x.RestauranteId,
                        principalTable: "Restaurantes",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Restaurantes",
                columns: new[] { "Id", "Endereco", "Nome", "Telefone" },
                values: new object[,]
                {
                    { 1, "Rua Padre Anchieta, 1287 - Curitiba", "Terrazza 40", "(41) 3014-0141" },
                    { 2, "Av. Silva Jardim, 2487 - Curitiba", "Barolo Curitiba", "(41) 3243-3430" }
                });

            migrationBuilder.InsertData(
                table: "Pratos",
                columns: new[] { "Id", "Descricao", "Nome", "Preco", "RestauranteId" },
                values: new object[,]
                {
                    { 1, "Coxa e sobrecoxa de pato recheadas com miúdos, servidas com purê de batatas, chutney de maçãs e espuma de laranja.", "Pato de Pomerode", 79.99m, 1 },
                    { 2, "Barriga de porco confitada, acompanhada de vagens grelhadas e purê de batatas. ", "Panza de Cerdo", 99.99m, 1 },
                    { 3, "Robalo coberto com crosta de castanha-de-caju, acompanhado de pappardelle ao molho de ervas e limão-siciliano.", "Robalo em Crosta de Castanha", 59.99m, 2 },
                    { 4, "Filé-mignon ao molho de mostarda, servido com ravioloni de queijo, tomate seco e aspargo.", "Filé ao Molho de Mostarda com Ravioloni", 119.99m, 2 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Pratos_RestauranteId",
                table: "Pratos",
                column: "RestauranteId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pratos");

            migrationBuilder.DropTable(
                name: "Restaurantes");
        }
    }
}
