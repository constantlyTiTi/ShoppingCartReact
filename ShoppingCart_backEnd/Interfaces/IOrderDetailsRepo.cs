using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Interfaces
{
    public interface IOrderDetailsRepo : IMSSQLRepo<OrderDetails>
    {
        Task<IEnumerable<OrderDetails>> GetOrderByOrderedTime(DateTime startTime, DateTime endTime, string userName);
        Task UpdateOrder(OrderDetails order);
        Task<IEnumerable<OrderDetails>> GetAllOrdersByUserName(string userName);
        Task<IEnumerable<OrderDetails>> GetAllOrdersByDateTime(DateTime? startTime, DateTime? endTime, string userName = "");
    }
}
