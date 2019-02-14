const base = {
  viewPorts: [
    { width: 1920, height: 1080 },
    { width: 500, height: 800, isMobile: true },
  ],
  visualReg: true,
};

module.exports = {
  id: 'a5e85ee4-91d6-4577-953c-4f866d0a1bfe',
  name: 'wades',
  bucket: 'rootid-visualreg',
  multidev: 'boostidup',
  pages: [{
    ...base,
    path: '/',
  }, {
    ...base,
    path: '/404',
  }, {
    ...base,
    path: '/user/1',
  }],
};
