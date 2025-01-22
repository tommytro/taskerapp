using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Tasker.GraphQL;

[MutationType]
public class UserMutations
{
    public async Task<User> CreateUser([Service] DatabaseContext databaseContext, string userName, string email, string password)
    {
        var user = new User
        {
            UserName = userName,
            Email = email,
            PasswordHash = password,
            CreatedDate = DateTime.UtcNow
        };

        databaseContext.Users.Add(user);
        await databaseContext.SaveChangesAsync();

        return user;
    }

    public async Task<User> UpdateUserAsync([Service] DatabaseContext databaseContext, int id, string userName)
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

    public async Task<bool> DeleteUser([Service] DatabaseContext databaseContext, int id)
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
