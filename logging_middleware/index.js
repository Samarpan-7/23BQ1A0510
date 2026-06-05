const axios = require('axios');

// Valid constants for logging
const VALID_STACKS = ['backend', 'frontend'];
const VALID_LEVELS = ['debug', 'info', 'warn', 'error', 'fatal'];

// Backend-only packages
const BACKEND_PACKAGES = ['cache', 'controller', 'cron_job', 'db', 'domain', 'handler', 'repository', 'route', 'service'];

// Frontend-only packages
const FRONTEND_PACKAGES = ['api', 'component', 'hook', 'page', 'state', 'style'];

// Shared packages (both backend and frontend)
const SHARED_PACKAGES = ['auth', 'config', 'middleware', 'utils'];

// Combine all valid packages
const ALL_PACKAGES = [...BACKEND_PACKAGES, ...FRONTEND_PACKAGES, ...SHARED_PACKAGES];

/**
 * Reusable Logger Function
 * Makes an API call to the Test Server to log events
 * 
 * @param {string} stack - "backend" or "frontend" (lowercase)
 * @param {string} level - "debug", "info", "warn", "error", "fatal" (lowercase)
 * @param {string} packageName - Package name (lowercase)
 * @param {string} message - Log message
 * @returns {Promise<Object>} - API response with logID
 */
async function Log(stack, level, packageName, message) {
  try {
    // Validation checks
    if (!stack || !level || !packageName || !message) {
      throw new Error('All parameters (stack, level, package, message) are required');
    }

    // Convert to lowercase for comparison
    const stackLower = String(stack).toLowerCase();
    const levelLower = String(level).toLowerCase();
    const packageLower = String(packageName).toLowerCase();

    // Validate stack
    if (!VALID_STACKS.includes(stackLower)) {
      throw new Error(`Invalid stack: "${stack}". Must be one of: ${VALID_STACKS.join(', ')}`);
    }

    // Validate level
    if (!VALID_LEVELS.includes(levelLower)) {
      throw new Error(`Invalid level: "${level}". Must be one of: ${VALID_LEVELS.join(', ')}`);
    }

    // Validate package
    if (!ALL_PACKAGES.includes(packageLower)) {
      throw new Error(`Invalid package: "${packageName}". Must be one of: ${ALL_PACKAGES.join(', ')}`);
    }

    // Prepare request body
    const requestBody = {
      stack: stackLower,
      level: levelLower,
      package: packageLower,
      message: String(message)
    };

    // Make API call to Test Server
    const response = await axios.post(
      'http://4.224.186.213/evaluation-service/logs',
      requestBody
    );

    console.log(`✅ Log created successfully - ID: ${response.data.logID}`);
    return response.data;

  } catch (error) {
    if (error.response) {
      console.error(`❌ API Error (${error.response.status}):`, error.response.data);
      return { error: error.response.data, status: error.response.status };
    } else if (error.request) {
      console.error('❌ Network Error:', error.message);
      return { error: 'Network error - could not reach server', message: error.message };
    } else {
      console.error('❌ Validation Error:', error.message);
      return { error: error.message };
    }
  }
}

module.exports = { Log, VALID_STACKS, VALID_LEVELS, BACKEND_PACKAGES, FRONTEND_PACKAGES, SHARED_PACKAGES };
