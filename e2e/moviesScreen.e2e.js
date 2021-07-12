describe('moviesScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should scroll to bottom and use pagination buttons', async () => {
    await element(by.label('Movies')).tap();
    await element(by.id('scrollView')).scrollTo('bottom', 'fast');
    await element(by.label('Next')).tap();
    await element(by.id('scrollView')).scrollTo('bottom', 'fast');
    await element(by.text('Prev')).tap();
  });

  it('should filter the list of movies', async () => {
    await element(by.label('Movies')).tap();
    await element(by.id('filter')).replaceText('terminator');
  });
});
