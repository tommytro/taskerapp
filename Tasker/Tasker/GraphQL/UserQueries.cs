namespace Tasker.GraphQL;

[QueryType]
public class UserQueries
{
    [UseProjection]
    [UseFiltering]
    [UseSorting]
    public async Task<List<User>> GetUsers([Service] DatabaseContext databaseContext)
    {
        return await databaseContext.Users.ToListAsync();
    }
}
