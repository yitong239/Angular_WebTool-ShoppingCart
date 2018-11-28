using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace angular
{
    public class Program
    {
        public static void Main(string[] args)
        {
           CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
             //WebHost.CreateDefaultBuilder(args)
                //.UseKestrel()
                //.UseContentRoot(Directory.GetCurrentDirectory())
                //.UseUrls("http://*:5001")  
                //.UseStartup<Startup>()
                //.Build();
    }
}
