import * as puppeteer from 'puppeteer';

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto('https://www.heb.com');
await page.screenshot({ path: 'screenshot.png' });

await page.goto('https://www.heb.com/search/?q=goldfish');
await page.screenshot({ path: 'screenshot-goldfish.png' });
await browser.close();

console.log('Screenshot is ready:', './screenshot-goldfish.png');
