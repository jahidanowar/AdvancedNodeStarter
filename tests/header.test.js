const puppeteer = require("puppeteer");

test(`Header`, async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto("https://jahid.dev");
});
