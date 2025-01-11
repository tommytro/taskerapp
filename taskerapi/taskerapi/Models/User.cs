namespace Tasker.Models;

public class User
{
    public int Id { get; set; }
    public string UserName { get; set; }
    public DateTime CreatedDate { get; set; }
    public virtual List<TaskItem> Tasks { get; set; }
}
