'use strict';

module.exports.hello = async (event) => {

  const chromium = require("@sparticuz/chrome-aws-lambda");
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  let page = await browser.newPage();

  await page.goto(event.url || 'https://arjon.es');

  const title = await page.title();

  await browser.close()
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        title: title,
        input: event,
        chromiumExecutablePath: await chromium.executablePath
      },
      null,
      2
    ),
  };
};
