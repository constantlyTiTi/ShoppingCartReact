﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ShoppingCart.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.DBContext
{
    public class MSSQLDbContext : IdentityDbContext
    {
        public MSSQLDbContext(DbContextOptions<MSSQLDbContext> options) : base(options) { }
        public DbSet<Rate> Rate { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<OrderDetails> OrderDetail { get; set; }
        public DbSet<Item> Item { get; set; }
        public DbSet<ItemFile> ItemFile { get; set; }
        public DbSet<ShoppingCartItem> ShoppingCartItem { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                        .HasKey(i => i.UserName);

            /*            modelBuilder.Entity<IdentityUser>()
                                    .ToTable("APIProjectUser");*/

            modelBuilder.Entity<OrderDetails>()
                        .HasKey(i => i.OrderId);

            modelBuilder.Entity<Item>()
                        .HasKey(i => i.ItemId);

            modelBuilder.Entity<ItemFile>()
                        .HasKey(i => i.ItemFileId);

            modelBuilder.Entity<OrderItem>()
                        .HasKey(i => i.OrderItemId);

            modelBuilder.Entity<ShoppingCartItem>()
                            .HasKey(i => i.ShoppingCartItemId);
            base.OnModelCreating(modelBuilder);
        }


    }
}
