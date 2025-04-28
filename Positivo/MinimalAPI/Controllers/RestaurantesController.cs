using API.Modelos;
using Microsoft.AspNetCore.Mvc;
using Namespace;

namespace API.Controllers;

[ApiController]
[Route("api/restaurantes")]
public class RestauranteController : ControllerBase
{
    private readonly AppDataContext _context;
    public RestauranteController(AppDataContext context) {
        this._context = context;
    }

    [HttpGet]
    public IActionResult ListAll() {
        List<Restaurante> restaurantes = _context.Restaurantes.ToList();
        return Ok(restaurantes);
    }

    [HttpGet("{id}")]
    public IActionResult FindById(int id) {
        var restaurante = _context.Restaurantes.Find(id);
        if (restaurante == null) {
            return NotFound();
        }

        return Ok(restaurante);    
    }
}