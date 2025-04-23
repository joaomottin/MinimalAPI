using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Namespace;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Namespace
{
    [ApiController]
    [Route("[controller]")]
    public class PratosController : ControllerBase
    {
        private readonly AppDataContext _context;

        public PratosController(AppDataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Prato>>> Get()
        {
            return await _context.Pratos
                .Include(p => p.Restaurante)
                .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Prato>> Get(int id)
        {
            var prato = await _context.Pratos
                .Include(p => p.Restaurante)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (prato == null)
                return NotFound();

            return prato;
        }

        [HttpPost]
        public async Task<ActionResult<Prato>> Post(Prato prato)
        {
            _context.Pratos.Add(prato);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Get), new { id = prato.Id }, prato);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Prato prato)
        {
            if (id != prato.Id)
                return BadRequest();

            _context.Entry(prato).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Pratos.Any(p => p.Id == id))
                    return NotFound();
                else
                    throw;
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var prato = await _context.Pratos.FindAsync(id);
            if (prato == null)
                return NotFound();

            _context.Pratos.Remove(prato);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}