const Apify = require('apify');

Apify.main(async () => {
    const proxyConfiguration = await Apify.createProxyConfiguration({
        groups: ['GOOGLE_SERP'],
    });
  const browser = await Apify.launchPuppeteer();
    
    const proxyUrl = proxyConfiguration.newUrl();
    const query = encodeURI('Apple iPhone XS 64GB');

    const { body } = await Apify.utils.requestAsBrowser({
        url: `http://www.google.co.uk/search?tbm=shop&q=${query}`,
        proxyUrl,
    });

    console.log(body);
});