namespace Tasker;

public class DatabaseContext : IdentityDbContext<User>
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    { }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        //add reqirements and sizes for columns here
    }
    public DbSet<TaskItem> Tasks { get; set; }
}
