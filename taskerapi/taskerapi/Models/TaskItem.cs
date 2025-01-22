namespace Tasker.Models;

public class TaskItem
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string? Description { get; set; }
    public DateTime CreatedDate { get; set; }
    public virtual required User User { get; set; }


}
