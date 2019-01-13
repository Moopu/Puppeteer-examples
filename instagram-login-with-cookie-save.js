const puppeteer = require('puppeteer');
const username = 'test';
const password = 'test';

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['---window-size=1920, 1080']
	})

  const page = await browser.newPage();
  page.setViewport({height: 1080, width: 1920});
  await page.goto('https://www.instagram.com/accounts/login/');


//wait for submit button before being able to start code
//	await page.waitForSelector('#f2871eb45a7c598');
   await page.waitFor(() => document.querySelectorAll('input').length);
  
//   //Select the search input field and enter the text you want to search
await page.type('[name=username]', username)
await page.type('[name=password]', password)

await page.click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > button')
	await page.waitFor(3000)
// Save Session Cookies
const cookiesObject = await page.cookies()

const fs = require('fs')
//Write cookies to json file
fs.writeFile(
	'test.json',
	JSON.stringify(cookiesObject, 2 , null),
	(err) => err ? console.error("Data not written", err) : console.log("Data Written")
)

  		  await browser.close();
})();
//	await page.waitFor(3000);


