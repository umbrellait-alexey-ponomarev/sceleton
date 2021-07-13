describe('detailsScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show details screen ', async () => {
    await element(by.text('Movies')).tap();
    await element(by.text('Details')).atIndex(0).tap();
    await element(by.text('Back')).tap();
    await element(by.text('Details')).atIndex(2).tap();
    await element(by.text('Read in browser')).tap();
  });
});
