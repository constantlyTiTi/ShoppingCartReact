using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.Models
{
    [Table("ItemFile")]
    public class ItemFile
    {
        public long ItemFileId { get; set; }
        public long ItemId { get; set; }

        [Column("FilePath")]
        public string ImgFileKey { get; set; }

        public ItemFile(long itemId, string imgFileKey)
        {
            ItemId = itemId;
            ImgFileKey = imgFileKey;
        }
    }
}
