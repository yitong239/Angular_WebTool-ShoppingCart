using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace webapi.Modules
{
    public class CartItem
    {
        public int ProductId { get; set; }
        public String ProductName { get; set; }
        public String Img { get; set; }

        public int Qty { get; set; }
    }
}
