const tests = require('boostid/tests');
const config = require('../boostid.config');


const testerSite = `https://${config.multidev}-${config.name}.pantheonsite.io`;


// tests.visualReg(
//   `https://dev-${config.name}.pantheonsite.io`,
//   testerSite,
//   config.pages,
// );

describe('Admin tests', () => {

  test('Login to Pantheon site as admin', async () => {
    await tests.login();
    await expect(page).toMatch('Configuration');
  });

  test('Create a node', async () => {
    await tests.addPageNode({
      title: 'Test page',
      body: 'Lorem ipsum',
    })
  });

});
