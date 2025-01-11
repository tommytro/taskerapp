namespace Tasker.Models;

public class TaskItem
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime CreatedDate { get; set; }
    public int UserId { get; set; }
    public virtual User User { get; set; }


}
