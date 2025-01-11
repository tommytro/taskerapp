using Microsoft.EntityFrameworkCore;

namespace Tasker;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    { }
    public DbSet<User> Users { get; set; }
    public DbSet<TaskItem> Tasks { get; set; }
}
