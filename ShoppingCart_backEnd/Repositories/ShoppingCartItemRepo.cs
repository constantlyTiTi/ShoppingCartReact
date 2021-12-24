﻿using ShoppingCart.DBContext;
using ShoppingCart.Interfaces;
using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Repositories
{
    public class ShoppingCartItemRepo : MSSQLRepo<ShoppingCartItem>, IShoppingCartItemRepo
    {
        private readonly MSSQLDbContext _db;
        public ShoppingCartItemRepo(MSSQLDbContext db) : base(db)
        {
            _db = db;
        }

        public void DeleteItemWithoutSave(long itemId, string userName)
        {
            var findObj = _db.ShoppingCartItem.FirstOrDefault(s => s.ItemId == itemId && s.UserName == userName);
            _db.Remove(findObj);
        }

        public IEnumerable<ShoppingCartItem> GetItems(string userName)
        {
            return _db.ShoppingCartItem.Where(s => s.UserName == userName);
        }

        public void UpdateItemQuantity(long itemId, int quantity, string userName)
        {
            var findObj = _db.ShoppingCartItem.FirstOrDefault(s => s.ItemId == itemId && s.UserName == userName);
            findObj.Quantity = quantity;
            _db.SaveChanges();
        }

        public Task RemoveAll(string userName)
        {
            Task task = Task.Factory.StartNew(() =>
            {
                var items = GetItems(userName);
                _db.RemoveRange(items);
                _db.SaveChanges();
            });
            return task;
        }
    }
}
