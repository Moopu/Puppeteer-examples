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
 await page.goto('https://www.instagram.com/accounts/activity/')
	await page.waitFor(3000)
	await page.evaluate (() => {
		const elements = document.querySelectorAll('[role=button] ._0mzm-')

		elements.forEach(element => {
			if(element.innerText === 'Follow') 
			{
				element.click()
				console.log('Account followed back')
			}
		})
	})
})();