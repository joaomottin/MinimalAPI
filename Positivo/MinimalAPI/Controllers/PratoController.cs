using API.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Namespace;

namespace API.Controllers;

[ApiController]
[Route("api/pratos")]
public class PratoController : ControllerBase
{
    private readonly AppDataContext _context;
    public PratoController(AppDataContext context) {
        this._context = context;
    }

    [HttpGet]
    public IActionResult ListAll() {
        List<Prato> pratos = _context.Pratos
                                     .Include(p => p.Restaurante)
                                     .ToList();
        return Ok(pratos);
    }

    [HttpGet("{id}")]
    public IActionResult FindById(int id) {
        var prato = _context.Pratos
                            .Include(p => p.Restaurante)
                            .FirstOrDefault(p => p.Id == id);
        if (prato == null) {
            return NotFound();
        }

        return Ok(prato);    
    }

    [HttpPost]
    public IActionResult Create(Prato prato) {
        var restaurante = _context.Restaurantes.Find(prato.RestauranteId);

        if (restaurante == null) {
            return NotFound("Restaurante não encontrado");
        }

        prato.Restaurante = restaurante;
        _context.Pratos.Add(prato);
        _context.SaveChanges();

        return Created("", prato);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Prato prato) {
        var entitidade = _context.Pratos.Find(id);
        if (entitidade == null) {
            return NotFound("Prato não encontrado");
        }

        var restaurante = _context.Restaurantes.Find(prato.RestauranteId);
        if (restaurante == null) {
            return NotFound("Restaurante não encontrado");
        }

        entitidade.Restaurante = restaurante;
        entitidade.Nome = prato.Nome;
        entitidade.Descricao = prato.Descricao;
        entitidade.Preco = prato.Preco;

        _context.Pratos.Update(entitidade);
        _context.SaveChanges();
        return Ok(entitidade);
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id) {
        var prato = _context.Pratos.Find(id);
        if (prato == null) {
            return NotFound();
        }

        _context.Pratos.Remove(prato);
        _context.SaveChanges();
        return NoContent();
    }
}