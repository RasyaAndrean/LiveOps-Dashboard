# LiveOps Dashboard

LiveOps Dashboard for Rise of the Awakened: Soul Impact

## Features

1. **Event Manager** - Create and manage in-game events
2. **Mail System** - Send mails to users with attachments
3. **Coupon System** - Generate and track coupon codes
4. **AB Test** - Run A/B tests for game features
5. **Ban Hammer** - Ban users for cheating or violations

## Tech Stack

- React.js
- Firebase Admin SDK
- React Router
- CSS Modules

## Setup

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Deployment

Run `npm run build` to create a production build.

## Folder Structure

```
src/
├── components/
│   ├── Header.js
│   └── Sidebar.js
├── pages/
│   ├── Dashboard.js
│   ├── EventManager.js
│   ├── MailSystem.js
│   ├── CouponSystem.js
│   ├── ABTest.js
│   └── BanHammer.js
├── App.js
└── index.js
```

## Firebase Integration

The dashboard integrates with Firebase Admin SDK for:

- Remote Config updates
- Firestore operations
- User management
- Analytics tracking

## Security

- Role-based access control
- Audit logs for all actions
- Secure API endpoints
- Rate limiting for API calls
