# Multi-Channel-Message-Formatter-API
## Overview
The Multi-Channel Message Formatter is a backend API built using Node.js and Express that converts a single marketing message into platform-specific formats like WhatsApp, Email, and SMS.

## Objective
Different communication channels require different message styles. This API automates the formatting process to save time and ensure consistency.

## Tech Stack
* Node.js
* Express.js

## Project Structure
project/
│
├── app.js
├── routes/
│   └── messageRoutes.js
├── controllers/
│   └── messageController.js
├── services/
│   └── formatterService.js

## Design Decisions

### 1. Layered Architecture

The project follows a clean separation of concerns:

* **Routes** → Handle API endpoints
* **Controllers** → Handle request & response logic
* **Services** → Contain business logic (formatting)
This makes the code:
* Maintainable
* Scalable
* Easy to test
---
### 2. Formatter Mapping Pattern

Instead of using multiple `if-else` statements, a formatter map is used:

```js
const formatters = {
  whatsapp: formatWhatsApp,
  email: formatEmail,
  sms: formatSMS,
};
```
 Benefits:
* Easy to add new channels
* Cleaner and more readable code
---
### 3. Error Handling Strategy
* Input validation is done in the controller
* Service throws errors for unsupported channels
* Controller catches and returns appropriate HTTP responses
---

## Instructions to Run

### 1. Clone the repository

```
git clone <your-repo-url>
cd <project-folder>
```
---

### 2. Install dependencies

```
npm install
```
---

### 3. Start the server

```
node app.js
```

or (if using nodemon):

```
npx nodemon app.js
```

---

### 4. Server will run on

```
http://localhost:3000
```

---

##  API Endpoint

### POST `/format-message`

---

##  Request Body

```json
{
  "message": "Big sale this weekend! Get 20% off all items",
  "channel": "whatsapp"
}
```

---

## Sample Outputs

###  WhatsApp

```json
{
  "formatted_message": "🔥 Big sale this weekend! Get 20% off all items\nDon't miss out! 🎉"
}
```

---

### Email

```json
{
  "formatted_message": "Subject: Exclusive Offer\n\nDear Customer,\n\nBig sale this weekend! Get 20% off all items\n\nBest regards,\nAgentz"
}
```

---

### SMS

```json
{
  "formatted_message": "Big sale this weekend! Get 20% off all items"
}
```

*(If message exceeds 50 characters, it will be truncated with "...")*

---

##  Error Responses

### Missing Message

```json
{
  "error": "Message is required"
}
```

---

### Missing Channel

```json
{
  "error": "Channel is required"
}
```

---

### Invalid Channel

```json
{
  "error": "Unsupported channel: instagram"
}
```

---

## 🧪 Testing Tools
* Postman
---

Built as part of backend learning and API design practice.
