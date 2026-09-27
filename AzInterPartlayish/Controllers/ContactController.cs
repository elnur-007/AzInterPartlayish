using Microsoft.AspNetCore.Mvc;

namespace AzInterPartlayish.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
