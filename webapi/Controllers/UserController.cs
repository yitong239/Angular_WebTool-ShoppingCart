using System;
using System.Collections;
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
    public class UserController : ControllerBase
    {
    
        public static List<User> users = new List<User>();
        public static User cur;
        public static Boolean flag = true;
        public UserController()
        {
            if (flag)
            {

                User admin = new User { UserName = "admin", PassWord = "admin", Cart = new List<CartItem>(), UserId = 0 };
                users.Add(admin);
                flag = false;
            }


        }

        [HttpGet]
        public IEnumerable<CartItem> Get()
        {
            return cur.Cart;
        }

        // POST api/values
        [HttpPost("{id}")]
        public ActionResult<int> Post(int id , LogInfo logInfo)
        {

            if (id == 1)
            {
                foreach (User u in users)
                {
                    if (String.Equals(u.UserName, logInfo.UserName) && String.Equals(u.PassWord, logInfo.PassWord))
                    {
                        cur = u;
                        return Ok(cur.UserId);
                    }
                }
                return NotFound();

            }
            else 
            {
                foreach (User user in users)
                {
                    if (string.Equals(user.UserName, logInfo.UserName))
                    {
                        return NotFound();
                    }
                }
                User u = new User { UserName = logInfo.UserName, PassWord = logInfo.PassWord, Cart = new List<CartItem>(), UserId = users.Count };
                users.Add(u);
                cur = u;
                return Ok(cur.UserId);
            }
       
        }

        // PUT api/values/5
        [HttpPut("{qty}")]
        public IEnumerable<CartItem> Put(int qty, Product product)
        {
           for (int i = cur.Cart.Count - 1; i >= 0; i--)
            {
                if (cur.Cart[i].ProductId == product.ProductId)
                {
                    cur.Cart[i].Qty = cur.Cart[i].Qty + qty;
                    return cur.Cart;
                }
            }
            cur.Cart.Add(new CartItem { ProductId = product.ProductId, ProductName = product.Description, Qty = product.Qty , Img=product.Img});
            return cur.Cart ;


        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IEnumerable<CartItem> Delete(int id)
        {
            for (int i = cur.Cart.Count - 1; i >= 0; i--)
            {
                if (cur.Cart[i].ProductId == id) { cur.Cart.RemoveAt(i);
                    return cur.Cart;
                }
            }
            return cur.Cart;
    
        }


    }
}