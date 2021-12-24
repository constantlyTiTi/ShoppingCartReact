using Amazon.S3;
using ShoppingCart.DBContext;
using ShoppingCart.Interfaces;
using ShoppingCart.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MSSQLDbContext _db;
        public UnitOfWork(MSSQLDbContext db)
        {
            _db = db;
            Rate = new RateRepo(_db);
            SP_Call = new SP_Call(_db);
            User = new UserRepo(_db);
            OrderItem = new OrderItemRepo(_db);
            OrderDetails = new OrderDetailsRepo(_db);
            ItemFile = new ItemFileRepo(_db);
            Item = new ItemRepo(_db);
            //S3Services = new S3Sevices(s3);
            ShoppingCartItems = new ShoppingCartItemRepo(_db);

        }

        public IRateRepo Rate { get; set; }
        public ISP_Call SP_Call { get; set; }
        public IUserRepo User { get; set; }
        public IOrderItemRepo OrderItem { get; set; }
        public IOrderDetailsRepo OrderDetails { get; set; }
        public IItemFileRepo ItemFile { get; set; }
        public IItemRepo Item { get; set; }
        //public IS3Services S3Services { get; set; }
        public IShoppingCartItemRepo ShoppingCartItems { get; set; }

        public void Dispose()
        {
            var result = DisposeAsync();
        }

        public async Task DisposeAsync()
        {
            await _db.DisposeAsync();
        }

        public void Save()
        {
            _db.SaveChanges();
        }

    }
}
