const axios = require('axios');

/**
 * ============================================
 * NOTIFICATION FETCHER & PRIORITY SORTER
 * ============================================
 * 
 * Fetches campus notifications from API and
 * sorts them by priority and recency.
 */

// ========== CONFIGURATION ==========
const API_CONFIG = {
  url: 'http://4.224.186.213/evaluation-service/notifications',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'Content-Type': 'application/json'
  }
};

// ========== PRIORITY WEIGHTS ==========
// Higher weight = Higher priority
const NOTIFICATION_WEIGHTS = {
  'Placement': 3,
  'Result': 2,
  'Event': 1
};

/**
 * Parse timestamp string to Date object
 * Format: "YYYY-MM-DD HH:MM:SS"
 * 
 * @param {string} timestampStr - Timestamp string
 * @returns {Date} - Parsed date object
 */
function parseTimestamp(timestampStr) {
  try {
    return new Date(timestampStr.replace(' ', 'T'));
  } catch (error) {
    console.error(`Error parsing timestamp: ${timestampStr}`);
    return new Date(0); // Fallback to epoch
  }
}

/**
 * Custom sorting function for notifications
 * Primary: Weight (Placement > Result > Event)
 * Secondary: Recency (Latest first)
 * 
 * @param {Object} a - First notification
 * @param {Object} b - Second notification
 * @returns {number} - Sort order (-1, 0, 1)
 */
function sortNotifications(a, b) {
  // Primary sort: Compare weights (higher weight = higher priority)
  const weightA = NOTIFICATION_WEIGHTS[a.Type] || 0;
  const weightB = NOTIFICATION_WEIGHTS[b.Type] || 0;

  if (weightA !== weightB) {
    return weightB - weightA; // Higher weight first
  }

  // Secondary sort: Compare timestamps (newer first)
  const dateA = parseTimestamp(a.Timestamp);
  const dateB = parseTimestamp(b.Timestamp);

  return dateB - dateA; // More recent first
}

/**
 * Format notification for display
 * 
 * @param {Object} notification - Notification object
 * @param {number} index - Position in list
 * @returns {string} - Formatted notification
 */
function formatNotification(notification, index) {
  const priorityEmoji = {
    'Placement': '🎯',
    'Result': '📊',
    'Event': '📅'
  };

  const emoji = priorityEmoji[notification.Type] || '📌';

  return `
${index}. ${emoji} [${notification.Type}]
   ID: ${notification.ID}
   Message: ${notification.Message}
   Timestamp: ${notification.Timestamp}
  `;
}

/**
 * Fetch and process notifications
 */
async function fetchAndProcessNotifications() {
  try {
    console.log('🔄 Fetching notifications from API...\n');

    // Fetch data from API
    const response = await axios.get(API_CONFIG.url, {
      headers: API_CONFIG.headers
    });

    // Validate response
    if (!response.data || !response.data.notifications) {
      throw new Error('Invalid API response structure');
    }

    const notifications = response.data.notifications;
    console.log(`✅ Fetched ${notifications.length} total notifications\n`);

    // Sort notifications by priority and recency
    const sortedNotifications = notifications.sort(sortNotifications);

    // Get top 10
    const topTen = sortedNotifications.slice(0, 10);

    // Display results
    console.log('═══════════════════════════════════════════════════════════════');
    console.log('📌 TOP 10 PRIORITY NOTIFICATIONS');
    console.log('═══════════════════════════════════════════════════════════════');

    topTen.forEach((notification, index) => {
      console.log(formatNotification(notification, index + 1));
    });

    console.log('═══════════════════════════════════════════════════════════════');
    console.log(`\n📈 Sorting Applied:`);
    console.log('   Priority: Placement (3) > Result (2) > Event (1)');
    console.log('   Recency: Most recent first\n');

    // Statistics
    const typeCount = topTen.reduce((acc, notif) => {
      acc[notif.Type] = (acc[notif.Type] || 0) + 1;
      return acc;
    }, {});

    console.log('📊 Distribution in Top 10:');
    Object.entries(typeCount).forEach(([type, count]) => {
      console.log(`   ${type}: ${count}`);
    });

    return topTen;

  } catch (error) {
    if (error.response) {
      // API returned error response
      console.error('❌ API Error:');
      console.error(`   Status: ${error.response.status}`);
      console.error(`   Message: ${error.response.data.message || error.message}`);
    } else if (error.request) {
      // Request made but no response
      console.error('❌ Network Error: No response from server');
      console.error('   Make sure the API endpoint is accessible');
    } else {
      // Other errors
      console.error('❌ Error:', error.message);
    }
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  fetchAndProcessNotifications();
}

module.exports = {
  fetchAndProcessNotifications,
  NOTIFICATION_WEIGHTS,
  sortNotifications,
  parseTimestamp
};
