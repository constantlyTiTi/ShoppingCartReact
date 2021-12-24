using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Models
{
    [Table("OrderItem")]
    public class OrderItem
    {
        [ServiceStack.DataAnnotations.PrimaryKey]
        public long OrderItemId { get; set; }
        public long ItemId { get; set; }
        public long OrderId { get; set; }
        public int Quantity { get; set; } = 1;

    }
}
