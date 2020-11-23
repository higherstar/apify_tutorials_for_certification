// Single IP address for multiple requests
// Use a single IP address until it fails (gets retired).

const Apify = require("apify");
Apify.main(async () => {
  const requestList = await Apify.openRequestList("my-list", [
    "http://proxy.apify.com/?format=json",
    "http://proxy.apify.com",
  ]);

  const proxyConfiguration = await Apify.createProxyConfiguration();

  const crawler = new Apify.PuppeteerCrawler({
    requestList,
    proxyConfiguration,
    useSessionPool: true,
    sessionPoolOptions: {
      sessionOptions: { maxPoolSize: 1 },
      // maxPoolSize = Increase 1....n according to pooling
    },
    handlePageFunction: async ({ page, request, proxyInfo }) => {
      console.log(await page.content());
    },
  });

  await crawler.run();
});
