using Microsoft.AspNetCore.Mvc;

namespace AzInterPartlayish.Controllers
{
    public class NewsContentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
