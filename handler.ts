import chromium from "@sparticuz/chrome-aws-lambda";

export async function hello(event) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  });

  let page = await browser.newPage();

  await page.goto(event.url || "https://arjon.es");

  const title = await page.title();
  const html = await page.content();

  await browser.close();

  return {
    title: title,
    input: event,
    chromiumExecutablePath: await chromium.executablePath,
    html: html,
  };
}