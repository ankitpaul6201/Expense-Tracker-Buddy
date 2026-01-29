# Mobile App Build Guide

Your Tracker Project has been converted into a hybrid mobile app using **Capacitor**.

## Changes Made
- Moved all web files (`index.html`, `sw.js`, `404.html`) into a new `www` folder.
- Initialized a Node.js project (`package.json`) and installed Capacitor.
- Configured Android platform.

## 📱 How to Build for Android

1. **Prerequisites**: Ensure you have [Android Studio](https://developer.android.com/studio) installed.
2. Open the project in Android Studio:
   - Command line: `npx cap open android`
   - OR: Open Android Studio -> "Open" -> Select the `c:\Users\ankit\Desktop\tracker-project\android` folder.
3. Wait for Gradle sync to finish.
4. **Run**: Click the "Run" (Play) button to launch on an Emulator or connected device.
5. **Build APK**: Go to `Build` > `Build Bundle(s) / APK(s)` > `Build APK(s)`. The APK will be generated in `android/app/build/outputs/apk/debug/`.

## 🍎 How to Build for iOS

**Note**: Building iOS apps (`.ipa`) requires a Mac with Xcode installed. You cannot build the iOS app directly on Windows.

If you have access to a Mac:
1. Copy this entire project folder to the Mac.
2. Run `npm install`.
3. Run `npx cap add ios`.
4. Run `npx cap open ios`.
5. Build using Xcode.

## 🌐 Web Deployment (Netlify/Firebase)

- **Firebase**: The `firebase.json` has been updated to publish the `www` folder. You can deploy as usual with `firebase deploy`.
- **Netlify**: Log in to your Netlify dashboard for this site. Change the **Publish directory** from `.` (root) to `www`.

## ⚠️ Important Note on Google Auth

You are using Google Sign-In with a popup. In some mobile environments, this might be restricted. If you encounter issues logging in on the mobile app:
1. Ensure your Firebase project accepts requests from `localhost` and `capacitor://localhost` (Add these to Authorized Domains in Firebase Console > Authentication > Settings).
2. If it still fails, you may need to implement the native `capacitor-auth` plugin, which requires adding SHA-1 fingerprints to your Firebase Android app setup.

## ✅ Applied Fixes & APK Location

- **Build Fix**: Updated `proguard-android.txt` to `proguard-android-optimize.txt` in the Capacitor Android library to support Gradle 9.0+.
- **APK Location**: After the build completes, your APK will be located at:
  `c:\Users\ankit\Desktop\tracker-project\android\app\build\outputs\apk\debug\app-debug.apk`

You can install this APK on your Android device to test the app.
