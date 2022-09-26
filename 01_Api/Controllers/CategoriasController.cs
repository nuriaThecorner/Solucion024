using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using _04_Data.Data;

namespace _01_Api.Controllers
{
    public class CategoriasController : ApiController
    {
        private NorthWindTuneadoDbContext db = new NorthWindTuneadoDbContext();

        // GET: api/Categorias
        public IList<Categoria> GetEmpleado()
        {
            IList<Categoria> categoriasTabla = db.Categoria.ToList();
            IList<Categoria> categorias = new List<Categoria>();
            foreach (var categoriaTabla in categoriasTabla)
            {
                Categoria categoria = new Categoria();
                categoria.CategoryID = categoriaTabla.CategoryID;
                categoria.CategoryName = categoriaTabla.CategoryName;
                categoria.Description = categoriaTabla.Description;

                categorias.Add(categoria);
            }
            return categorias;
        }

        // GET: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult GetEmpleado(int id)
        {
            Categoria categoriaTabla = db.Categoria.Find(id);
            if (categoriaTabla == null)
            {
                return NotFound();
            }

            Categoria categoria = new Categoria();
            categoria.CategoryID = categoriaTabla.CategoryID;
            categoria.CategoryName = categoriaTabla.CategoryName;
            categoria.Description = categoriaTabla.Description;


            return Ok(categoria);
        }


        // PUT: api/Categorias/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategoria(int id, Categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != categoria.CategoryID)
            {
                return BadRequest();
            }

            db.Entry(categoria).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoriaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Categorias
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult PostCategoria(Categoria categoria)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Categoria.Add(categoria);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = categoria.CategoryID }, categoria);
        }

        // DELETE: api/Categorias/5
        [ResponseType(typeof(Categoria))]
        public IHttpActionResult DeleteCategoria(int id)
        {
            Categoria categoria = db.Categoria.Find(id);
            if (categoria == null)
            {
                return NotFound();
            }

            db.Categoria.Remove(categoria);
            db.SaveChanges();

            return Ok(categoria);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoriaExists(int id)
        {
            return db.Categoria.Count(e => e.CategoryID == id) > 0;
        }
    }
}