using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Interfaces
{
    public interface IOrderItemRepo : IMSSQLRepo<OrderItem>
    {
        public Task<IEnumerable<OrderItem>> GetOrdersByItem(long itemId);
        public Task<IEnumerable<OrderItem>> GetItemsByOrderId(long orderId);
        public Task UpdateItemQuantity(long orderId, long ItemId, int quantity);
    }
}
