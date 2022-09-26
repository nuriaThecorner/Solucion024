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
    public class ProveedoresController : ApiController
    {
        private NorthWindTuneadoDbContext db = new NorthWindTuneadoDbContext();

        // GET: api/Proveedores
        public IList<Proveedor> GetEmpleado()
        {
            IList<Proveedor> proveedoresTabla = db.Proveedor.ToList();
            IList<Proveedor> proveedores = new List<Proveedor>();
            foreach (var proveedorTabla in proveedoresTabla)
            {
                Proveedor proveedor = new Proveedor();
                proveedor.supplierID = proveedorTabla.supplierID;
                proveedor.supplierName = proveedorTabla.supplierName;
                proveedor.ContactName = proveedorTabla.ContactName;
                proveedor.Address = proveedorTabla.Address;
                proveedor.City = proveedorTabla.City;
                proveedor.PostalCode = proveedorTabla.PostalCode;
                proveedor.Country = proveedorTabla.Country;
                proveedor.Phone = proveedorTabla.Phone;


                proveedores.Add(proveedor);
            }
            return proveedores;
        }

        // GET: api/Proveedores/5
        [ResponseType(typeof(Proveedor))]
        public IHttpActionResult GetEmpleado(int id)
        {
            Proveedor proveedorTabla = db.Proveedor.Find(id);
            if (proveedorTabla == null)
            {
                return NotFound();
            }

            Proveedor proveedor = new Proveedor();
            proveedor.supplierID = proveedorTabla.supplierID;
            proveedor.supplierName = proveedorTabla.supplierName;
            proveedor.ContactName = proveedorTabla.ContactName;
            proveedor.Address = proveedorTabla.Address;
            proveedor.City = proveedorTabla.City;
            proveedor.PostalCode = proveedorTabla.PostalCode;
            proveedor.Country = proveedorTabla.Country;
            proveedor.Phone = proveedorTabla.Phone;

            return Ok(proveedor);
        }

        // PUT: api/Proveedores/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProveedor(int id, Proveedor proveedor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != proveedor.supplierID)
            {
                return BadRequest();
            }

            db.Entry(proveedor).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProveedorExists(id))
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

        // POST: api/Proveedores
        [ResponseType(typeof(Proveedor))]
        public IHttpActionResult PostProveedor(Proveedor proveedor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Proveedor.Add(proveedor);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = proveedor.supplierID }, proveedor);
        }

        // DELETE: api/Proveedores/5
        [ResponseType(typeof(Proveedor))]
        public IHttpActionResult DeleteProveedor(int id)
        {
            Proveedor proveedor = db.Proveedor.Find(id);
            if (proveedor == null)
            {
                return NotFound();
            }

            db.Proveedor.Remove(proveedor);
            db.SaveChanges();

            return Ok(proveedor);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProveedorExists(int id)
        {
            return db.Proveedor.Count(e => e.supplierID == id) > 0;
        }
    }
}