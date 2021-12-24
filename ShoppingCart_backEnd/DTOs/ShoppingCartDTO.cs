﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ShoppingCart.DTOs
{
    public class ShoppingCartDTO
    {
        [JsonPropertyName("shopping_cart_items")]
        /*        public IEnumerable<ShoppingCartItem> ShoppingCartItems { get; set; }*/
        public IEnumerable<ItemDTO> ShoppingCartItems { get; set; }
        [JsonPropertyName("total_cost")]
        public double TotalCost { get; set; }
        [JsonPropertyName("shipping_address")]
        public string ShippingAddress { get; set; }
        [JsonPropertyName("user_name")]
        public string UserName { get; set; }
    }
}
