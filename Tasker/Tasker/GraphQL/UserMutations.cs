using Microsoft.EntityFrameworkCore;

namespace Tasker.GraphQL;

[MutationType]
public class UserMutations
{
    private readonly DatabaseContext databaseContext;
    public UserMutations(DatabaseContext databaseContext)
    {
        this.databaseContext = databaseContext;
    }

    public async Task<User> CreateUser(string userName)
    {
        var user = new User
        {
            UserName = userName,
            CreatedDate = DateTime.UtcNow
        };

        databaseContext.Users.Add(user);
        await databaseContext.SaveChangesAsync();

        return user;
    }

    public async Task<User> UpdateUserAsync(int id, string userName)
    {
        var user = await databaseContext.Users.FindAsync(id);

        if (user == null)
        {
            throw new System.Collections.Generic.KeyNotFoundException($"User with ID {id} not found.");
        }

        user.UserName = userName;

        await databaseContext.SaveChangesAsync();

        return user;
    }

    public async Task<bool> DeleteUser(int id)
    {
        var user = await databaseContext.Users.FindAsync(id);

        if (user == null)
        {
            return false;
        }

        databaseContext.Users.Remove(user);
        await databaseContext.SaveChangesAsync();

        return true;
    }
}
