const base = {
  viewPorts: [
    { width: 1920, height: 1080 },
    { width: 500, height: 800, isMobile: true },
  ],
};

module.exports = {
  id: 'a5e85ee4-91d6-4577-953c-4f866d0a1bfe',
  name: 'wades',
  bucket: 'rootid-visualreg',
  multidev: 'boostidup',
  pages: [{
    ...base,
    path: '/',
    ignore: ['iframe'],
    elements: [
      '.field--name-body',
      '#block-bootstrap-search',
      ['#navbar', {
        failureThreshold: 0.02,
      }],
    ],
  }, {
    ...base,
    path: '/404',
  }, {
    ...base,
    path: '/user/1',
  }],
};
