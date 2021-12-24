using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ShoppingCart.DTOs
{
    public class ItemDetails
    {
        public Item Item { get; set; }

        [JsonPropertyName("item_files")]
        public IEnumerable<ItemFile> ItemFiles { get; set; }
    }
}
