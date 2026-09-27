using Microsoft.AspNetCore.Mvc;

namespace AzInterPartlayish.Controllers
{
    public class ServicesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
