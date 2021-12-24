using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Interfaces
{
    public interface IItemFileRepo : IMSSQLRepo<ItemFile>
    {
        Task UpdateItem(ItemFile item);
        void RemoveByItemId(long itemId);
        Task<IEnumerable<ItemFile>> GetItemByItemId(long itemId);
        Task<IEnumerable<ItemFile>> GetAllItemByIds(IEnumerable<long> ids);
    }
}
