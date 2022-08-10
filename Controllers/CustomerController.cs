using CustomerManager.Data;
using CustomerManager.MODEL;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace CustomerManager.Controllers
{
    public class CustomerController : Controller
    {
        private readonly CustomerDbContext _context;
        private readonly IWebHostEnvironment _webHost;

        public CustomerController(CustomerDbContext context, IWebHostEnvironment webHost)
        {
            _context = context;
            _webHost = webHost;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult GetAll()
        {
            List<Customer> customers;
            customers = _context.Customers.ToList();
            return Json(customers);
        }
        [HttpGet]
        public IActionResult Create()
        {
            Customer customer = new Customer();
            return View(customer);
        }

        [HttpPost]
        public IActionResult Create(Customer prm)
        {

            if (prm.CustomerId == 0)
            {
                _context.Add(prm);
            }
            else
            {

                var customerUpdate = _context.Customers.FirstOrDefault(s => s.CustomerId == prm.CustomerId);

                if (customerUpdate != null)
                {
                    _context.Entry<Customer>(customerUpdate).CurrentValues.SetValues(prm);
                }

            }

            _context.SaveChanges();
            return Json("Successfully Saved to Database");

        }

        public IActionResult Edit()
        {
            return Json("");
        }


    }
}
