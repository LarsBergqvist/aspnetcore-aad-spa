using Microsoft.AspNetCore.Mvc;

public class UserInfo
{
    public string Name { get; set; }
}

namespace WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WhoAmIController : ControllerBase
    {
        // GET: /<controller>/
        public UserInfo Index()
        {
            var principal = this.User;
            var userInfo = new UserInfo
            {
                Name = principal.Identity.Name
            };
            return userInfo;
        }
    }
}
