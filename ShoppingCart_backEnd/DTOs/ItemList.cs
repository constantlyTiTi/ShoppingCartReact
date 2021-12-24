using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ShoppingCart.DTOs
{
    public class ItemList
    {
        [JsonPropertyName("items")]
        public IEnumerable<ItemDTO> Items { get; set; }
        [JsonPropertyName("paginate")]
        public Paginate Paginate { get; set; }
    }
}
