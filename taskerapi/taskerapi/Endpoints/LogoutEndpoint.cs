using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace taskerapi.Endpoints;

[Route("")]
[ApiController]
public class LogoutEndpoint : ControllerBase
{

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        Debug.WriteLine("Logging out");
        // Delete the cookie by setting an expired date
        Response.Cookies.Append(
            "cookie",
            "", // Empty value
            new CookieOptions
            {
                Expires = DateTime.UtcNow.AddDays(-1), // Expired date
                HttpOnly = false, // Match the original cookie settings
                Secure = false,   // If the original cookie was Secure
                Path = "/",      // Match the original Path
                Domain = ".localhost"
            });

        return Ok(new { message = "Cookie deleted" });
    }

}
