using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Router.Helpers
{
    public static class Helpers
    {
        public static IHtmlString ServerSideInclude(this HtmlHelper helper, string serverPath)
        {
            var filePath = HttpContext.Current.Server.MapPath(serverPath);

            var markup = File.ReadAllText(filePath);
            return new HtmlString(markup);
        }
    }
}