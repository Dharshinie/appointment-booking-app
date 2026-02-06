# Firebase Integration Setup Guide

This document provides step-by-step instructions to set up Firebase for your Appointment App.

## Prerequisites

- Node.js and npm installed
- A Google account
- Firebase CLI (optional, but recommended)

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Give your project a name (e.g., "DD Salon App")
4. Accept the terms and create the project
5. Wait for the project to be created

## Step 2: Get Firebase Credentials

1. In Firebase Console, click on your project
2. Click the gear icon (⚙️) and select "Project settings"
3. Scroll to "Your apps" section
4. Click on the Web icon (</>) to create a web app
5. Register the app with any name (e.g., "DD Salon Web")
6. Copy the Firebase configuration object (you'll need the firebaseConfig)

Your config should look like:
```javascript
{
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
}
```

## Step 3: Set Up Environment Variables

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Fill in the values from your Firebase config:

```
REACT_APP_FIREBASE_API_KEY=your_api_key_here
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

3. Restart your development server for changes to take effect

## Step 4: Enable Firestore Database

1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in "Test mode" (for development)
4. Choose the location closest to you
5. Click "Enable"

## Step 5: Set Up Firestore Security Rules (Important!)

1. Go to Firestore Database → Rules tab
2. Replace the rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write for appointments collection
    match /appointments/{document=**} {
      allow read, write: if request.auth == null || request.auth.uid != null;
    }
  }
}
```

3. Click "Publish"

⚠️ **Important**: These are test rules. For production, use proper authentication!

## Step 6: Update Your Application

The app now includes Firebase integration. Here's how to use it:

### Appointments Component
The Appointments page now auto-saves to Firebase:
- Appointments are saved to Firestore when you book
- Data persists even if you close the browser

### AppointmentListPage
Displays all appointments from Firestore:
- Auto-loads appointments on page load
- Delete synchronizes with Firebase

### Firebase Service Functions

```javascript
import { 
  addAppointmentToFirebase,
  getAppointmentsFromFirebase,
  deleteAppointmentFromFirebase,
  updateAppointmentInFirebase,
  getAppointmentsByDate
} from './services/appointmentService'

// Add appointment
const id = await addAppointmentToFirebase(appointmentData)

// Get all appointments
const appointments = await getAppointmentsFromFirebase()

// Delete appointment
await deleteAppointmentFromFirebase(appointmentId)

// Update appointment
await updateAppointmentInFirebase(appointmentId, updateData)

// Get by date
const dayAppointments = await getAppointmentsByDate('2026-02-05')
```

## Switching Between Local Storage and Firebase

### To Use Firebase (Default):
The app is configured to use Firebase by default. Make sure your `.env` file has valid Firebase credentials.

### To Use Local Storage:
If Firebase fails or you want to use local storage as fallback:
1. The app automatically falls back to local storage if Firebase is unavailable
2. Data will be stored in browser's localStorage

## Troubleshooting

### "Firebase configuration error"
- Make sure your `.env` file exists and contains valid credentials
- Restart the dev server after adding `.env`
- Check that all Firebase credentials are correct

### "Permission denied" error
- Go to Firestore Database → Rules
- Make sure rules allow read/write (test mode is enabled)
- For production, implement proper authentication

### "No appointments showing"
- Open browser DevTools (F12)
- Check Console tab for error messages
- Verify Firebase credentials in `.env`
- Check if Firestore Database is enabled

### Connection issues
- Verify your internet connection
- Check if Firebase API is accessible
- Check browser's Storage → Application → Cookies (look for firebase tokens)

## Security Considerations

⚠️ **Important for Production:**

1. **Use Environment Variables**: Never commit `.env` file to git
2. **Enable Authentication**: Implement Firebase Auth for real users
3. **Update Firestore Rules**: Implement proper authentication rules
4. **Use HTTPS**: Always deploy with HTTPS
5. **Validate Data**: Validate all inputs before saving to Firebase
6. **Rate Limiting**: Implement Firebase rate limiting rules

## Database Structure

Your Firestore database will have the following structure:

```
appointments/
  ├─ {appointmentId1}
  │  ├─ name: "John Doe"
  │  ├─ date: "2026-02-10"
  │  ├─ time: "10:30"
  │  ├─ service: "Hair Cut"
  │  ├─ createdAt: timestamp
  │  └─ updatedAt: timestamp
  └─ {appointmentId2}
     └─ ...
```

## Next Steps

1. **Add Authentication**: Implement Firebase Auth for user-specific appointments
2. **Add Photos**: Use Firebase Storage for user/appointment photos
3. **Notifications**: Set up Firebase Cloud Messaging for appointment reminders
4. **Analytics**: Enable Firebase Analytics to track app usage
5. **Real-time Sync**: Use Firestore real-time listeners for live updates

## Helpful Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Firebase Web Setup](https://firebase.google.com/docs/web/setup)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

## Support

For issues or questions:
1. Check the browser console for error messages
2. Review Firebase Console for any visible issues
3. Refer to Firebase official documentation
4. Check network tab in DevTools for API calls
