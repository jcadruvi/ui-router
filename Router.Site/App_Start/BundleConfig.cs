using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace Router.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            /*---------------------------------------------------------------------------------
            -- By default microsoft put *min.js and *min.cs in the ignore list. This means
            -- if you add a *min.js or *min.css file then it will be ignored. I clear the
            -- IgnoreList and add in the other 3 defaults so we can add .min files to bundles.
            ---------------------------------------------------------------------------------*/
            if (bundles.IgnoreList != null)
            {
                bundles.IgnoreList.Clear();
                bundles.IgnoreList.Ignore("*.intellisense.js");
                bundles.IgnoreList.Ignore("*-vsdoc.js");
                bundles.IgnoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);
            }

            bundles.Add(new StyleBundle("~/Content/layout-bundle-css")
                .Include("~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/Scripts/layout-bundle-javascript")
                .Include("~/Scripts/jquery-1.9.1.js",
                         "~/Scripts/angular.js",
                         "~/Scripts/angular-ui-router.js",
                         "~/Scripts/angular-animate.js",
                         "~/Scripts/app.js",
                         "~/Scripts/jobController.js",
                         "~/Scripts/jobListController.js",
                         "~/Scripts/storeController.js",
                         "~/Scripts/storeListController.js"));
        }
    }
}