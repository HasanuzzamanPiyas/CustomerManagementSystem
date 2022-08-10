using CustomerManager.MODEL;
using Microsoft.EntityFrameworkCore;


namespace CustomerManager.Data
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext(DbContextOptions<CustomerDbContext> options) : base(options)
        {

        }
        public virtual DbSet<Customer> Customers { get; set; }

    }

}

