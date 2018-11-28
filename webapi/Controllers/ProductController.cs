using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Modules;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        public static List<Product> all = new List<Product>();
        public static Boolean flag = true;
        public ProductController()
        {
            if (flag)
            {
                Product p = new Product { ProductId = 0, Description = "Eye Shadow", Img = "../../assets/Toofaced.png", ProductName = "Too Faced", Price = 49 ,Qty =0};
                Product p1 = new Product { ProductId = 1, Description = "Luxe Sleep Mask", Img = "../../assets/la.jpg", ProductName = "La Prairie", Price = 375 , Qty=0};
                Product p2 = new Product { ProductId = 2, Description = "Loubibelle Lip Beauty Oil", Img = "../../assets/louboutin.jpg", ProductName = "Louboutin", Price = 70, Qty =0  };
                all.Add(p);
                all.Add(p1);
                all.Add(p2);
                flag = false;

            }
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {  
            return all;
        }

        [HttpGet("{key}")]
        public List<Product> Get(string key)
        {
            List<Product> res = new List<Product>();
            foreach (Product p in all)
            {
                if (p.ProductName.IndexOf(key, StringComparison.CurrentCulture) != -1)
                    res.Add(p);
            }
            return res;
        }


        [HttpPost]
        public ActionResult<string> Post(Product p)
        {
            foreach(Product product in all)
            {
                if (string.Equals(p.ProductName, product.ProductName))
                {
                    return NotFound();
                }
            }
            all.Add(p);
            Reorder();
            return Ok();
            
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, Product product)
        {
            for (int i = all.Count - 1; i >= 0; i--)
            {
                if (all[i].ProductId == id) all[i] = product;
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IEnumerable<Product> Delete(int id)
        {
            
           for (int i =all.Count - 1; i >= 0; i--)
            {
              if (all[i].ProductId == id)
              {
                  all.RemoveAt(i);
                  return all;
               }
           }
           return null;
        }
        public void Reorder()
        {
            for(int i = 0; i<all.Count; i++)
            {
                all[i].ProductId = i;
            }

        }
    }
}