const puppeteer = require('puppeteer');
const username = 'test';
const password = 'test';
const fs = require('fs');
const cookiesFilePath = '/test.json';

(async () => {
	const browser = await puppeteer.launch({
		headless: true,
		args: ['---window-size=1920, 1080']
	})
	const page = await browser.newPage();
	page.setViewport({height: 1080, width: 1920});

// 	const previousSession = fs.fsync(cookiesFilePath)
// if (previousSession) {
//   // If file exist load the cookies
//   const cookiesArr = require(`.${cookiesFilePath}`)
//   if (cookiesArr.length !== 0) {
//     for (let cookie of cookiesArr) {
//       await page.setCookie(cookie)
//     }
//     console.log('Session has been loaded in the browser')
//     return true
//   }
// }
// else{
// 	console.log('no prev session')
// }

  await page.goto('https://www.instagram.com/accounts/login/');

//wait for submit button before being able to start code
//	await page.waitForSelector('#f2871eb45a7c598');
//    await page.waitFor(() => document.querySelectorAll('input').length);
  
// //   //Select the search input field and enter the text you want to search
// await page.type('[name=username]', username)
// await page.type('[name=password]', password)

// await page.click('#react-root > section > main > div > article > div > div:nth-child(1) > div > form > div:nth-child(3) > button')
	await page.waitFor(3000)
  		 await browser.close();
})();
//	await page.waitFor(3000);


// Save Session Cookies
// const cookiesObject = await page.cookies()
// // Write cookies to temp file to be used in other profile pages
// jsonfile.writeFile(cookiesFilePath, cookiesObject, { spaces: 2 },
//  function(err) { 
//   if (err) {
//   console.log('The file could not be written.', err)
//   }
//   console.log('Session has been successfully saved')
// })