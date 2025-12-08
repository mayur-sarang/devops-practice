const request = require('request');
const assert = require('assert');

request('http://localhost:3000', (error, response, body) => {
  assert.equal(body, 'Hello World from DevOps Practice!');
  console.log('Test passed!');
  process.exit(0);
});
