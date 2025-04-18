using API.Modelos;
using Microsoft.EntityFrameworkCore;

namespace Namespace
{
    public class AppDataContext : DbContext
    {
        public DbSet<Prato> Pratos { get; set; }
        public DbSet<Restaurante> Restaurantes { get; set; }

        public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Restaurante>().HasData(
                new Restaurante() { Id = 1, Nome = "Terrazza 40", Endereco = "Rua Padre Anchieta, 1287 - Curitiba", Telefone = "(41) 3014-0141" },
                new Restaurante() { Id = 2, Nome = "Barolo Curitiba", Endereco = "Av. Silva Jardim, 2487 - Curitiba", Telefone = "(41) 3243-3430" }
            );

            modelBuilder.Entity<Prato>().HasData(
                new Prato() { Id = 1, Nome = "Pato de Pomerode", Descricao = "Coxa e sobrecoxa de pato recheadas com miúdos, servidas com purê de batatas, chutney de maçãs e espuma de laranja.", Preco = 79.99m, RestauranteId = 1 },
                new Prato() { Id = 1, Nome = "Panza de Cerdo", Descricao = "Barriga de porco confitada, acompanhada de vagens grelhadas e purê de batatas. ", Preco = 99.99m, RestauranteId = 1 },
                new Prato() { Id = 2, Nome = "Robalo em Crosta de Castanha", Descricao = "Robalo coberto com crosta de castanha-de-caju, acompanhado de pappardelle ao molho de ervas e limão-siciliano.", Preco = 59.99m, RestauranteId = 2 },
                new Prato() { Id = 2, Nome = "Filé ao Molho de Mostarda com Ravioloni", Descricao = "Filé-mignon ao molho de mostarda, servido com ravioloni de queijo, tomate seco e aspargo.", Preco = 119.99m, RestauranteId = 2 }
            );
        }
    }
}
