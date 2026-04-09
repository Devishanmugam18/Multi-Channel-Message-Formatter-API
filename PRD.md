Product Requirements Document (PRD)

Product: Multi-Channel Message Formatter API

1. Overview
   The Multi-Channel Message Formatter is a backend service that transforms a single marketing message into channel-specific formats such as WhatsApp, Email, and SMS.

2. Objective
   Build a simple backend API that accepts a message and channel, then returns a formatted message suitable for that platform.

3. Target Users

- Marketing teams
- Developers
- CRM tools

4. Problem Statement
   Different communication channels require different formats. Manually rewriting messages is time-consuming and inconsistent.

5. Solution
   Provide an API that formats messages automatically based on the channel.

6. API Endpoint
   POST /format-message

7. Request Example
   {
   "message": "Big sale this weekend! Get 20% off all items",
   "channel": "whatsapp"
   }

8. Response Example
   {
   "formatted_message": "🔥 Big Sale This Weekend!\nGet 20% off all items 🎉"
   }

9. Supported Channels

- WhatsApp
- Email
- SMS

10. Formatting Rules
    WhatsApp: Emojis, engaging tone, line breaks
    Email: Subject line, formal tone
    SMS: Short and concise

11. Non-Functional Requirements

- Fast response time
- Scalable
- Maintainable code

12. Edge Cases

- Empty message
- Invalid channel
- Long messages

13. Deliverables

- Source code
- README
- Sample outputs

14. Tech Stack

- Node.js / Express (recommended)

15. Constraints

- No database
- Keep solution simple
