exports.config = {
  specs: ['**/*.spec.coffee'],
  baseUrl: 'http://localhost:8000/',
  allScriptsTimeout: 30000,
  getPageTimeout: 30000,
  multiCapabilities: [
    {
      browserName: 'chrome',
      chromeOptions: { args: ['--no-sandbox'] },
    }
  ],
};
