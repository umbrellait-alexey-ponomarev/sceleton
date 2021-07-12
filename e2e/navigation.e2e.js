describe('navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should navigate to movies, home, animate and about screen', async () => {
    await element(by.label('Movies')).tap();
    await element(by.label('AnimateIt')).tap();
    await element(by.label('Home')).tap();
    await element(by.id('baseLayout')).swipe('right', 'fast', NaN, 0);
    await element(by.label('About')).tap();
    await element(by.text('GoBack')).tap();
  });
});
