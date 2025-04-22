using Microsoft.AspNetCore.Mvc;

namespace MinimalAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class PratoController : ControllerBase
{
    private static readonly List<Prato> Pratos = new()
    {
        new Prato { Id = 1, Nome = "Feijoada", Tipo = "Almoço", Pais = "Brasil", Descricao = "Prato típico brasileiro",},
        new Prato { Id = 2, Nome = "Sushi", Tipo = "Jantar", Pais = "Japão", Descricao = "Prato típico japonês", },
        new Prato { Id = 3, Nome = "Macarrão Carbonara", Tipo = "Almoço", Pais = "Itália", Descricao = "Massa com ovos, queijo, pancetta e pimenta-do-reino.",},
        new Prato { Id = 4, Nome = "Tacos", Tipo = "Jantar", Pais = "México", Descricao = "Tacos com carne marinada no estilo pastor.", },
    };

    [HttpGet]
    public ActionResult<IEnumerable<Prato>> GetTodos()
    {
        return Ok(Pratos);
    }

    [HttpGet("{id}")]
    public ActionResult<Prato> GetPorId(int id)
    {
        var prato = Pratos.FirstOrDefault(p => p.Id == id);
        if (prato == null)
            return NotFound();

        return Ok(prato);
    }

    [HttpPost]
    public ActionResult<Prato> Criar(Prato novoPrato)
    {
        novoPrato.Id = Pratos.Max(p => p.Id) + 1;
        Pratos.Add(novoPrato);
        return CreatedAtAction(nameof(GetPorId), new { id = novoPrato.Id }, novoPrato);
    }

    [HttpPut("{id}")]
    public IActionResult Atualizar(int id, Prato pratoAtualizado)
    {
        var pratoExistente = Pratos.FirstOrDefault(p => p.Id == id);
        if (pratoExistente == null)
            return NotFound();

        pratoExistente.Nome = pratoAtualizado.Nome;
        pratoExistente.Tipo = pratoAtualizado.Tipo;
        pratoExistente.Pais = pratoAtualizado.Pais;
        pratoExistente.Descricao = pratoAtualizado.Descricao;
        pratoExistente.ImagemUrl = pratoAtualizado.ImagemUrl;

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Deletar(int id)
    {
        var prato = Pratos.FirstOrDefault(p => p.Id == id);
        if (prato == null)
            return NotFound();

        Pratos.Remove(prato);
        return NoContent();
    }
}

public class Prato
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Tipo { get; set; }
    public string Pais { get; set; }
    public string Descricao { get; set; }
   
}
