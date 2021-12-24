using Microsoft.AspNetCore.Identity;
using ShoppingCart.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.TokenAuth
{
    public interface ITokenManager
    {

       string GenerateJwtToken(IdentityUser user, ProjectPSConfig psConfig);

    }
}
