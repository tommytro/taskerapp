using HotChocolate.Authorization;

namespace Tasker.GraphQL;

[QueryType]


public class UserQueries
{

    [UseProjection]
    [UseFiltering]
    [UseSorting]
    [Authorize]
    public async Task<List<User>> GetUsers([Service] DatabaseContext databaseContext)
    {
        var users = databaseContext.Users.ToListAsync();
        return await users;
    }

    [UseProjection]
    [UseFiltering]
    [UseSorting]
    [Authorize]
    public async Task<List<User>> CheckUsername([Service] DatabaseContext databaseContext, string username)
    {
        var users = databaseContext.Users.Where(x => x.UserName == username).ToListAsync();
        return await users;
    }
}
