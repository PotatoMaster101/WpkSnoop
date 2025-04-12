using System.CommandLine;
using WpkSnoop.Cli;

var pathArg = new Argument<string>("path") { Description = "Path to the JS file containing the chunk loader" };
var dirOpt = new Option<bool>("-d", "--dir") { Description = "Specifies that the path is a directory path" };
var verboseOpt = new Option<bool>("-v", "--verbose") { Description = "Specifies verbose output" };
var domainOpt = new Option<string>("-D", "--domain") { Description = "Specifies the base URL for chunk file GET requests" };
var proxyOpt = new Option<string>("-x", "--proxy") { Description = "Specifies the proxy URL for chunk file GET requests" };
var headersOpt = new Option<List<string>>("-H", "--header") { Description = "Specifies the HTTP headers for chunk file GET requests" };
var insecureOpt = new Option<bool>("-k", "--insecure") { Description = "Specifies to not validate HTTPS certificates for chunk file GET requests" };
var threadsOpt = new Option<int>("-t", "--threads") { Description = "Specifies the number of threads to use", DefaultValueFactory = _ => int.MaxValue };

var rootCmd = new RootCommand("Webpack Chunk Loader Extractor")
{
    pathArg,
    dirOpt,
    verboseOpt,
    domainOpt,
    proxyOpt,
    headersOpt,
    insecureOpt,
    threadsOpt,
};

rootCmd.SetAction(async parse =>
{
    var path = parse.GetRequiredValue(pathArg);
    var dir = parse.GetValue(dirOpt);
    var verbose = parse.GetValue(verboseOpt);
    var domain = parse.GetValue(domainOpt) ?? string.Empty;
    var proxy = parse.GetValue(proxyOpt) ?? string.Empty;
    var headers = parse.GetValue(headersOpt) ?? [];
    var insecure = parse.GetValue(insecureOpt);
    var threads = parse.GetValue(threadsOpt);
    var args = new CliOptions(path, dir, verbose, domain, proxy, headers, insecure, threads);
    await CliHelper.Run(args);
});
return await rootCmd.Parse(args).InvokeAsync();
