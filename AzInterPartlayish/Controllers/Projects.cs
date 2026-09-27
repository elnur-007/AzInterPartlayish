using Microsoft.AspNetCore.Mvc;

namespace AzInterPartlayish.Controllers
{
    public class Projects : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
