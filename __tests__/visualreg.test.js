const prebuilt = require('boostid/tests');


describe('Visual regression on live', () => {
  prebuilt.visualRegOnLive();
});

describe('Visual regression on updates', () => {
  prebuilt.visualRegOnUpdates();
});
