const PROXY_CONFIG = [
  {
    context: ['/'],
    target: 'http://localhost:8080/',
    segure: false,
    levelLog: 'debug'
  }
];

module.exports = PROXY_CONFIG;
