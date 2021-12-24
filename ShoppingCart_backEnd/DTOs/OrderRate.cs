using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ShoppingCart.DTOs
{
    public class OrderRate
    {
        [JsonPropertyName("order_details")]
        public OrderDetails OrderDetails { get; set; }

        [JsonPropertyName("order_items")]
        public IEnumerable<OrderItem> OrderItems { get; set; }
        public Rate Rate { get; set; }
        public IEnumerable<Item> Items { get; set; }

        [JsonPropertyName("item_covers")]
        public IEnumerable<ItemFile> ItemCovers { get; set; }
    }
}
