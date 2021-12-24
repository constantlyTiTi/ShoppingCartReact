using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ShoppingCart.Models
{
    [Table("APIUserIdentity")]
    public class User
    {
        [ServiceStack.DataAnnotations.PrimaryKey]
        [JsonPropertyName("user_name")]
        public string UserName { get; set; }
        public string Password { get; set; }

        [JsonPropertyName("ip_address")]
        public byte[] IpAddress { get; set; } = null;

        /*        [DataType(DataType.Date)]
                [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
                public DateTime LoginTime { get; set; }*/
    }
}
