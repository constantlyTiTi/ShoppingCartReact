﻿using ShoppingCart.DTOs;
using ShoppingCart.Interfaces;
using ShoppingCart.Models;
using ShoppingCart.Models.Enums;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ShoppingCart.Controllers
{
    [Route("api/order")]
    [ApiController]
    [Authorize]
    public class OrdersController : ControllerBase
    {
        /*private readonly UserManager<User> _userManager;*/
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public OrdersController(IUnitOfWork unitOfWork, SignInManager<IdentityUser> signInManager, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _signInManager = signInManager;
            _mapper = mapper;
        }
        [HttpPost("place-order")]
        public async Task<IActionResult> PlaceOrder(ShoppingCartDTO shoppingCart)
        {
            await _unitOfWork.ShoppingCartItems.RemoveAll(shoppingCart.UserName);
            OrderDetails Order = _mapper.Map<OrderDetails>(shoppingCart);
            _unitOfWork.OrderDetails.Add(Order);
            OrderDetails addedOrder = _unitOfWork.OrderDetails.GetAllOrdersByUserName(Order.UserName).Result.Last();
            return Ok(addedOrder);
        }

        [HttpGet("user-orders/{username}")]
        public IActionResult GetOrders(string username, DateTime? start_date = null, DateTime? end_date = null,
            int items_per_page = 10, string next_cursor = "0")
        {
            Paginate paginate = new Paginate(items_per_page, next_cursor);
            OrderList orderList = _mapper.Map<OrderList>(paginate);
            IEnumerable<OrderDetails> orders = _unitOfWork.OrderDetails.GetAllOrdersByDateTime(start_date, end_date, username).Result;
            IEnumerable<OrderDetailDTO> orderDto = _mapper.Map<IEnumerable<OrderDetails>, IEnumerable<OrderDetailDTO>>(orders);
            _mapper.Map(orderDto, orderList);
            return Ok(orderList);
        }

        [HttpGet("{order_id}")]
        public IActionResult GetOrderItems(long order_id)
        {
            IEnumerable<OrderItem> orderItems = _unitOfWork.OrderItem.GetItemsByOrderId(order_id).Result;
            IEnumerable<long> orderItem_itemIds = orderItems.Select(i => i.ItemId);
            IEnumerable<Item> items = (IEnumerable<Item>)_unitOfWork.Item.GetAllByIds(orderItem_itemIds).Result;
            IEnumerable<ItemDTO> itemDTOs = _mapper.Map<IEnumerable<Item>, IEnumerable<ItemDTO>>(items);

            /*IEnumerable<ItemFile> itemFiles = _unitOfWork.ItemFile.GetAllItemByIds(itemDTOs.Select(i => i.ItemId)).Result;*/
            foreach (var item in itemDTOs)
            {
                /* _mapper.Map(itemFiles.Where(i => i.ItemId == item.ItemId), item);*/
                _mapper.Map(orderItems.First(i => i.OrderId == order_id && i.ItemId == item.ItemId), item);
            }
            OrderDetailDTO orderDetailDTO = _mapper.Map<OrderDetailDTO>(itemDTOs);
            orderDetailDTO.OrderId = order_id;

            return Ok(orderDetailDTO);

        }

        [HttpDelete("user-orders/{username}/{order_id}")]
        public IActionResult DeleteOrder(string username, long order_id)
        {
            if (_unitOfWork.OrderDetails.Get(order_id).UserName != username)
            {
                var model = new ErrorMsg { Error = "You are not allow to modify this order" };
                return BadRequest(model);
            }
            _unitOfWork.OrderDetails.Remove(order_id);
            _unitOfWork.OrderItem.RemoveRange(_unitOfWork.OrderItem.GetItemsByOrderId(order_id).Result);
            _unitOfWork.Save();
            return Ok();
        }

    }
}
