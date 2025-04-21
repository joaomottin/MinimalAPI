using Microsoft.AspNetCore.Mvc;
using API.Modelos;
using Microsoft.EntityFrameworkCore;

namespace MinimalAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class RestaurantesController : ControllerBase
{
    private readonly AppDataContext _context;

    public RestaurantesController(AppDataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Restaurante>>> Get()
    {
        return await _context.Restaurantes.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Restaurante>> Get(int id)
    {
        var restaurante = await _context.Restaurantes.FindAsync(id);

        if (restaurante == null)
            return NotFound();

        return restaurante;
    }

    [HttpPost]
    public async Task<ActionResult<Restaurante>> Post(Restaurante restaurante)
    {
        _context.Restaurantes.Add(restaurante);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(Get), new { id = restaurante.Id }, restaurante);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Restaurante restaurante)
    {
        if (id != restaurante.Id)
            return BadRequest();

        _context.Entry(restaurante).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Restaurantes.Any(r => r.Id == id))
                return NotFound();
            else
                throw;
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var restaurante = await _context.Restaurantes.FindAsync(id);
        if (restaurante == null)
            return NotFound();

        _context.Restaurantes.Remove(restaurante);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
