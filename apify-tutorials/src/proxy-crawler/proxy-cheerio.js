const Apify = require("apify");

Apify.main(async () => {
  const proxyConfiguration = Apify.createProxyConfiguration();

  const requestList = Apify.openRequestList("my-list", [
    "http://proxy.apify.com",
  ]);

  const crawler = new Apify.CheerioCrawler({
    requestList,
    proxyConfiguration,
    handlePageFunction: async ({ request, response, body }) => {
      console.log(body);
    },
  });

  crawler.run();
});
