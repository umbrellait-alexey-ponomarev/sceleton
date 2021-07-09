describe('HomeScreen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show the step one message', async () => {
    await expect(element(by.id('HomeScreen'))).toBeVisible();
  });
});
