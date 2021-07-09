describe('navigation', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('should navigate to movies, home and animate screen', async () => {
    await element(by.label('Movies')).tap();
    await element(by.text('Next')).tap();
    await element(by.text('Prev')).tap();
  });
});
