describe('navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should navigate to movies, home, animate and about screen', async () => {
    // await element(by.text('Movies')).tap();
    // await element(by.text('AnimateIt')).tap();
    // await element(by.text('Home')).tap();
    await element(by.id('baseLayout')).swipe('right', 'slow');
    // await element(by.text('About')).tap();
    // await element(by.text('GoBack')).tap();
  });
});
