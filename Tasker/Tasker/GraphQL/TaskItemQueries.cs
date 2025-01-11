namespace Tasker.GraphQL;

[QueryType]
public class TaskItemQueries
{
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public async Task<List<TaskItem>> GetTaskItems([Service] DatabaseContext databaseContext)
    {
        return await databaseContext.Tasks.Include(x => x.Name).ToListAsync();
    } 
}
