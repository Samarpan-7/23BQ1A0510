const { Log } = require('./index');

/**
 * Test Examples for Logging Middleware
 * Run: node test.js
 */

async function runTests() {
  console.log('🧪 Testing Logging Middleware\n');

  // Test 1: Backend error log
  console.log('Test 1: Backend error log');
  await Log('backend', 'error', 'handler', 'received string, expected bool');

  // Test 2: Backend fatal log
  console.log('\nTest 2: Backend fatal log');
  await Log('backend', 'fatal', 'db', 'Critical database connection failure.');

  // Test 3: Frontend info log
  console.log('\nTest 3: Frontend info log');
  await Log('frontend', 'info', 'component', 'User clicked notification button');

  // Test 4: Frontend debug log
  console.log('\nTest 4: Frontend debug log');
  await Log('frontend', 'debug', 'api', 'Fetching notification list from server');

  // Test 5: Shared middleware log
  console.log('\nTest 5: Shared middleware log');
  await Log('backend', 'warn', 'middleware', 'Authentication token expired');

  console.log('\n✅ All tests completed!');
}

runTests();
