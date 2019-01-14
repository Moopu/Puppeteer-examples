const puppeteer = require('puppeteer');
const edit = require('./edit')
const fs = require('fs');
const cookiesFilePath = '/test.json';

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['---window-size=1920, 1080']
	})
	const page = await browser.newPage();
	page.setViewport({height: 726, width: 1540});
	await page.goto('https://www.instagram.com/accounts/login/');

//wait for submit button before being able to start code
//	await page.waitForSelector('#f2871eb45a7c598');
   await page.waitFor(() => document.querySelectorAll('input').length);
  
// //   //Select the search input field and enter the text you want to search
await page.type('[name=username]', edit.username)
await page.type('[name=password]', edit.password)

 await page.click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > button')
 await page.waitFor(2000)
	//Go to the page you want to search for.
	await page.goto(`https://www.instagram.com/explore/tags/${edit.searchWord}`)
	await page.waitFor(2000)
	//click on first image
	await page.click('#react-root > section > main > article > div.EZdmt > div > div > div:nth-child(1) > div:nth-child(1) > a > div')
	await page.waitFor(2000)
	//Start like loop with pressing next
	for (let i = 0; i < 100; i++) {
		await page.waitForSelector('body > div:nth-child(13) > div > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n')
		await page.click('body > div:nth-child(13) > div > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n')
		await page.waitFor(500)
		await page.click('body > div:nth-child(13) > div > div.EfHg9 > div > div > a.HBoOv.coreSpriteRightPaginationArrow')
	console.log(i);
	}
	// await browser.close();
})();
//	await page.waitFor(3000);