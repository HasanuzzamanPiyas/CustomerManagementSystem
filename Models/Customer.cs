using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CustomerManager.MODEL
{
    public class Customer
    {
        public string PhotoUrl { get; set; }

        [Display(Name = "Profile Photo")]
        [NotMapped]
        public IFormFile ProfilePhoto { get; set; }

        [Key]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(100)]
        [DisplayName("Name")]
        public string Name { get; set; } = "";

        [Required]
        [StringLength(50)]
        [DisplayName("Phone")]
        public string Phone { get; set; } = "";

        [Required]
        [StringLength(50)]
        [DisplayName("Discount")]
        public string Discount { get; set; } = "";

        [Required]
        [StringLength(10)]
        [DisplayName("Sex")]
        public string Sex { get; set; } 


        [Required]
        [StringLength(500)]
        [DisplayName("Remarks")]
        public string Remarks { get; set; } = "";


        [Required]
        [StringLength(100)]
        [DisplayName("PostCode")]
        public string PostCode { get; set; } = "";

        [Required]
        [StringLength(100)]
        [DisplayName("Thana")]
        public string Thana { get; set; } = "";

        [Required]
        [StringLength(100)]
        [DisplayName("Address")]
        public string Address1 { get; set; } = "";

        [Required]
        [StringLength(100)]
        [DisplayName("LandPhone")]
        public string LandPhone { get; set; } = "";
        [Required]
        [StringLength(100)]
        [DisplayName("PostOffice")]
        public string PostOffice { get; set; } = "";
        [Required]
        [StringLength(100)]
        [DisplayName("Zilla")]
        public string Zilla { get; set; } = "";
        [Required]
        [StringLength(100)]
        [DisplayName("PermanentAddress")]
        public string PermanentAddress { get; set; } = "";

    }
}
