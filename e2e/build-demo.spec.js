const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

describe('Record videos', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it(':ios: Record demo video', async () => {
    await expect(element(by.id('WELCOME'))).toBeVisible();
    await expect(element(by.id('ROOT_OPEN_MODAL'))).toBeVisible();
    await element(by.id('ROOT_OPEN_MODAL')).tap();
    await expect(element(by.id('ROOT_OPEN_MODAL'))).toBeNotVisible();
  
    await expect(element(by.text('I`m a Modal and my depth is 1'))).toBeVisible();
    await expect(element(by.text('Go deeper (depth:1)'))).toBeVisible();
    await element(by.text('Go deeper (depth:1)')).tap();

    await sleep(500);
  
    await expect(element(by.text('I`m a Modal and my depth is 2'))).toBeVisible();
    await expect(element(by.text('Go deeper (depth:2)'))).toBeVisible();
    await element(by.text('Go deeper (depth:2)')).tap();
    await expect(element(by.text('I`m a Modal and my depth is 3'))).toBeVisible();

    await sleep(500);
    
    await expect(element(by.text('Close me (depth:3)'))).toBeVisible();
    await element(by.text('Close me (depth:3)')).tap();
    await expect(element(by.text('I`m a Modal and my depth is 3'))).toBeNotVisible();
    await expect(element(by.text('I`m a Modal and my depth is 2'))).toBeVisible();

    await sleep(1000);
    
    await element(by.text('I`m a Modal and my depth is 2')).swipe('down', 'slow', 0.5);
    await expect(element(by.text('I`m a Modal and my depth is 2'))).toBeNotVisible();
    await expect(element(by.text('I`m a Modal and my depth is 1'))).toBeVisible();

    await sleep(1000);
    
    await element(by.text('I`m a Modal and my depth is 1')).swipe('down', 'fast', 0.5);
    await expect(element(by.text('I`m a Modal and my depth is 1'))).toBeNotVisible();
    await expect(element(by.id('ROOT_OPEN_MODAL'))).toBeVisible();
  });

  it(':android: Record demo video', async () => {
    await sleep(2000);

    await expect(element(by.id('WELCOME'))).toBeVisible();
    await expect(element(by.id('ROOT_OPEN_MODAL'))).toBeVisible();
    await element(by.id('ROOT_OPEN_MODAL')).tap();

    await expect(element(by.text('I`m a Modal and my depth is 1'))).toBeVisible();
    await expect(element(by.text('Go deeper (depth:1)'))).toBeVisible();
    await element(by.text('Go deeper (depth:1)')).tap();

    await sleep(1000);

    await expect(element(by.text('I`m a Modal and my depth is 2'))).toBeVisible();
    await expect(element(by.text('Go deeper (depth:2)'))).toBeVisible();
    await element(by.text('Go deeper (depth:2)')).tap();
    await expect(element(by.text('I`m a Modal and my depth is 3'))).toBeVisible();

    await sleep(1500);

    await expect(element(by.text('Close me (depth:3)'))).toBeVisible();
    await element(by.text('Close me (depth:3)')).tap();
    await expect(element(by.text('I`m a Modal and my depth is 3'))).toBeNotVisible();
    await expect(element(by.text('I`m a Modal and my depth is 2'))).toBeVisible();

    await sleep(1500);

    await expect(element(by.text('Close me (depth:2)'))).toBeVisible();
    await element(by.text('Close me (depth:2)')).tap();
    await expect(element(by.text('I`m a Modal and my depth is 2'))).toBeNotVisible();
    await expect(element(by.text('I`m a Modal and my depth is 1'))).toBeVisible();

    await sleep(1500);

    await expect(element(by.text('Close me (depth:1)'))).toBeVisible();
    await element(by.text('Close me (depth:1)')).tap();
    await expect(element(by.text('I`m a Modal and my depth is 1'))).toBeNotVisible();
    await expect(element(by.id('ROOT_OPEN_MODAL'))).toBeVisible();
  });
});