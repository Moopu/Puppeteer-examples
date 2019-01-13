const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		headless: false,
		args: ['---window-size=1920, 1080']
	})
  const page = await browser.newPage();
  page.setViewport({height: 1080, width: 1920});
  await page.goto('https://google.com');

  //wait for submit button before being able to start code
  await page.waitForSelector('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)');
  
  //Select the search input field and enter the text you want to search
  await page.focus('#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input');
  await page.keyboard.type('Pikachu');

	//Click the search button or press enter options
	await page.click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)');
		//await page.keyboard.press('Enter');

	//await the search page header 
		await page.waitForSelector('#hdtb-msb-vis > div:nth-child(2) > a');
		await page.screenshot({path: 'example.png'});
  		// await browser.close();
})();
//	await page.waitFor(3000);