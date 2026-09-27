using Microsoft.AspNetCore.Mvc;

namespace AzInterPartlayish.Controllers
{
    public class NewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
