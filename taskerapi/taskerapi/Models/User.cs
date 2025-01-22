namespace Tasker.Models;

public class User : IdentityUser
{
    public DateTime CreatedDate { get; set; }
    public virtual List<TaskItem>? Tasks { get; set; }
}
