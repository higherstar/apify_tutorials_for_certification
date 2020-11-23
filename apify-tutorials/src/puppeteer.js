const Apify = require("apify");
const puppeteer = require("puppeteer");
Apify.main(async () => {
  const input = {
    url: "https://docs.apify.com/actors/examples#puppeteer",
  };
  //  Apify.getValue('INPUT');

  if (!input || !input.url)
    throw new Error(
      'Invalid input, must be a JSON object with the "url" field!'
    );

  console.log("Launching Puppeteer...");
  // const browser = await Apify.launchPuppeteer();
  const browser = await puppeteer.launch({
    dumpio: true,
    headless: true,
  });
  console.log(`Opening URL: ${input.url}`);
  const page = await browser.newPage();
  await page.goto(input.url);

  // Get the "viewport" of the page, as reported by the page.
  console.log("Determining page dimensions...");
  const dimensions = await page.evaluate(() => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
    deviceScaleFactor: window.devicePixelRatio,
  }));
  console.log(`Dimension: ${JSON.stringify(dimensions)}`);

  // Grab a screenshot
  console.log("Saving screenshot...");
  const screenshotBuffer = await page.screenshot({ fullPage: true });
  await Apify.setValue("screenshot.png", screenshotBuffer, {
    contentType: "image/png",
  });

  console.log("Saving PDF snapshot...");
  const pdfBuffer = await page.pdf({ format: "A4" });
  console.log("Generating PDF... ")
  await page.pdf({ path: `screenshot.pdf`, format: "A4", pdfBuffer });
  // await Apify.setValue('page.pdf', pdfBuffer, { contentType: 'application/pdf' });

  console.log("Closing Puppeteer...");
  await browser.close();

  console.log("Done.");
  console.log(
    "You can check the output in the key-value on the following URLs:"
  );
  const storeId = process.env.APIFY_DEFAULT_KEY_VALUE_STORE_ID;
  console.log(
    `- https://api.apify.com/v2/key-value-stores/${storeId}/records/screenshot.png`
  );
  // NOTE: Adding disableRedirect=1 param, because for some reason Chrome doesn't allow pasting URLs to PDF
  // that redirect into the browser address bar (yeah, wtf...)
  console.log(
    `- https://api.apify.com/v2/key-value-stores/${storeId}/records/page.pdf?disableRedirect=1`
  );
});
