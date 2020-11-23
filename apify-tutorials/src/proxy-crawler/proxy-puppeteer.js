const Apify = require("apify");

Apify.main(async () => {
  const requestList = await Apify.openRequestList("my-list", [
    "http://proxy.apify.com/?format=json",
  ]);
  const proxyConfiguration = await Apify.createProxyConfiguration();

  const crawler = new Apify.PuppeteerCrawler({
    requestList,
    proxyConfiguration,
    handlePageFunction: async ({ page, request, proxyInfo }) => {
      console.log(await page.content());
    },
  });

  await crawler.run();
});
