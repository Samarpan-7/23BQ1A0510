# Notification Fetcher

A professional Node.js script to fetch campus notifications from a protected API and sort them by priority and recency.

## Features

✅ **Robust API Integration**
- Handles protected routes with Bearer token authentication
- Comprehensive error handling
- Network error detection

✅ **Advanced Sorting Algorithm**
- Primary: Type-based priority (Placement > Result > Event)
- Secondary: Timestamp-based recency (Latest first)
- Custom weight-based sorting system

✅ **Professional Output**
- Formatted console display with emoji indicators
- Statistics and distribution analysis
- Clear error messages

## Setup

```bash
npm install
```

## Configuration

Edit `index.js` and replace the placeholder token:

```javascript
const API_CONFIG = {
  url: 'http://4.224.186.213/evaluation-service/notifications',
  headers: {
    'Authorization': 'Bearer YOUR_TOKEN_HERE',  // ← Replace this
    'Content-Type': 'application/json'
  }
};
```

## Usage

```bash
npm start
```

or

```bash
node index.js
```

## API Response Format

Expected API response:

```json
{
  "notifications": [
    {
      "ID": "notif-001",
      "Type": "Placement",
      "Message": "Your placement interview is scheduled",
      "Timestamp": "2026-06-05 10:30:00"
    },
    ...
  ]
}
```

## Sorting Priority

1. **Primary Sort (Weight):**
   - Placement: Weight 3 (Highest)
   - Result: Weight 2
   - Event: Weight 1 (Lowest)

2. **Secondary Sort (Recency):**
   - If Type is the same, most recent timestamp comes first

## Output Example

```
═══════════════════════════════════════════════════════════════
📌 TOP 10 PRIORITY NOTIFICATIONS
═══════════════════════════════════════════════════════════════

1. 🎯 [Placement]
   ID: notif-001
   Message: Your placement interview is scheduled
   Timestamp: 2026-06-05 10:30:00

2. 📊 [Result]
   ID: notif-002
   Message: Your exam result is published
   Timestamp: 2026-06-05 09:15:00

...
```

## Error Handling

- **401 Unauthorized**: Invalid or expired token
- **Network Error**: API endpoint unreachable
- **Invalid Response**: Malformed API data

## Code Structure

```javascript
// Priority weights dictionary
NOTIFICATION_WEIGHTS = {
  'Placement': 3,
  'Result': 2,
  'Event': 1
}

// Custom sorting function
sortNotifications(a, b)
  - Compares weights
  - Falls back to timestamp comparison

// Main execution
fetchAndProcessNotifications()
  - Fetches from API
  - Sorts notifications
  - Displays top 10
  - Shows statistics
```

## Module Export

Can be imported as a module:

```javascript
const { fetchAndProcessNotifications, NOTIFICATION_WEIGHTS } = require('./index.js');

// Use in your own code
const topTen = await fetchAndProcessNotifications();
```

## Performance

- Efficient sorting: O(n log n) time complexity
- Single API call
- Minimal memory footprint

## License

ISC License
