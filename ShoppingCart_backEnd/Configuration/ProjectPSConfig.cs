using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Configuration
{
    public class ProjectPSConfig
    {
        public const string SectionName = "shoppingCart";
        public string LocalhostAccount { get; set; }
        public string LocalhostPassword { get; set; }
        public string AccessKeyID { get; set; }
        public string SecretAccessKey { get; set; }
        public string ConnectionString { get; set; } = "Server=(localdb)\\mssqllocaldb;Database=ShoppingCart;Trusted_Connection=True; MultipleActiveResultSets = True;";
        public string JwtSecretToken { get; set; } = "shoppingCartV2TingAspNETCore";
    }
}
