using API.Modelos;

namespace Namespace;

public class Prato
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public decimal Preco { get; set; }

    public int? RestauranteId { get; set; }
    public Restaurante? Restaurante { get; set; }
}