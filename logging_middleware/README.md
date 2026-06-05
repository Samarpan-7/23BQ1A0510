# Logging Middleware

A reusable logging middleware package for tracking application events, errors, and debugging information.

## 📋 Installation

```bash
npm install
```

## 🚀 Usage

### Basic Function Call

```javascript
const { Log } = require('./index');

// Log an error
await Log('backend', 'error', 'handler', 'received string, expected bool');

// Log a frontend info message
await Log('frontend', 'info', 'component', 'User notification clicked');
```

### Function Signature
```
Log(stack, level, package, message)
```

## 📊 Valid Parameters

### Stack (lowercase only)
- `backend`
- `frontend`

### Level (lowercase only)
- `debug`
- `info`
- `warn`
- `error`
- `fatal`

### Package

**Backend Only:**
- `cache`, `controller`, `cron_job`, `db`, `domain`, `handler`, `repository`, `route`, `service`

**Frontend Only:**
- `api`, `component`, `hook`, `page`, `state`, `style`

**Shared (Backend & Frontend):**
- `auth`, `config`, `middleware`, `utils`

## 🧪 Running Tests

```bash
node test.js
```

---

## 📮 Testing in Postman

### Setup

1. **Open Postman**
2. **Create a new request**

### Test API Endpoint

**URL:** `http://4.224.186.213/evaluation-service/logs`

**Method:** `POST`

**Headers:**
```
Content-Type: application/json
```

---

### 📝 Example Requests (Copy & Paste in Postman)

#### 1. Backend Error Log
**Request Body:**
```json
{
  "stack": "backend",
  "level": "error",
  "package": "handler",
  "message": "received string, expected bool"
}
```

#### 2. Backend Fatal Database Error
**Request Body:**
```json
{
  "stack": "backend",
  "level": "fatal",
  "package": "db",
  "message": "Critical database connection failure."
}
```

#### 3. Frontend Component Info
**Request Body:**
```json
{
  "stack": "frontend",
  "level": "info",
  "package": "component",
  "message": "User clicked notification button"
}
```

#### 4. Frontend API Debug
**Request Body:**
```json
{
  "stack": "frontend",
  "level": "debug",
  "package": "api",
  "message": "Fetching notification list from server"
}
```

#### 5. Middleware Warning (Shared)
**Request Body:**
```json
{
  "stack": "backend",
  "level": "warn",
  "package": "middleware",
  "message": "Authentication token expired"
}
```

---

### ✅ Expected Success Response (Status 200)

```json
{
  "logID": "a4aad02e-19d0-4153-86d9-58bf55d7c402",
  "message": "log created successfully"
}
```

### ❌ Expected Error Response

```json
{
  "error": "Invalid stack value"
}
```

---

## 🔧 Steps to Test in Postman

1. Click **"+"** to create a new tab
2. Select **POST** method
3. Enter URL: `http://4.224.186.213/evaluation-service/logs`
4. Go to **Body** tab
5. Select **raw** and **JSON**
6. Copy & paste one of the example requests above
7. Click **Send**
8. Check the response (should show logID on success)

---

## 📌 Important Notes

- All parameters must be **lowercase** only (stack, level, package)
- API is a **protected route** (ensure proper access)
- Each log returns a unique `logID`
- Use appropriate log levels for different scenarios
- Keep messages descriptive for debugging purposes

---

## 💡 Use Cases

```javascript
// Application startup
Log('backend', 'info', 'service', 'Application started successfully');

// User actions
Log('frontend', 'info', 'hook', 'User logged in');

// Errors
Log('backend', 'error', 'controller', 'Failed to fetch user data');

// Debugging
Log('frontend', 'debug', 'state', 'Redux state updated');

// Critical issues
Log('backend', 'fatal', 'db', 'Database connection lost');
```
