const got = require("got");
const HttpsProxyAgent = require("https-proxy-agent");

// Replace <YOUR_PROXY_PASSWORD> below with your password
// found at https://my.apify.com/proxy
const proxyUrl = "http://auto:<YOUR_PROXY_PASSWORD>@proxy.apify.com:8000";

async function useProxy() {
  const response = await got("http://proxy.apify.com/?format=json", {
    agent: {
      https: new HttpsProxyAgent(proxyUrl),
    },
  });
  console.log(response.body);
}

useProxy();
