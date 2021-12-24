﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ShoppingCart.DTOs
{
    public class Paginate
    {
        [JsonPropertyName("total")]
        public int Total { get; set; }
        [JsonPropertyName("next_curesor")]
        public string NextCursor { get; set; }

        public Paginate(int total, string nextCursor)
        {
            Total = total;
            NextCursor = nextCursor;
        }
    }
}
