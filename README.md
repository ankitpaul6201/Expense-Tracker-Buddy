# 💰 Expense Tracker Buddy

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform: Web | Android](https://img.shields.io/badge/Platform-Web%20%7C%20Android-blue)](https://capacitorjs.com/)

**Expense Tracker Buddy** is a modern, minimal, and futuristic expense management application designed for students and professionals. Built with a focus on ease of use, it allows users to track expenses and income across multiple semesters with beautiful visualizations and a premium "glassmorphism" interface.

<p align="center">
  <img src="assets/icon.png" width="150" alt="Expense Tracker Buddy Logo">
</p>

## ✨ Features

- **🎓 Semester-Based Tracking**: Organize your finances across 8 customizable semesters.
- **🌓 Dynamic Themes**: Full support for High-Contrast Light Mode and Futuristic Dark Mode.
- **📊 Interactive Analytics**: Real-time spending breakdown and monthly progress charts powered by Chart.js.
- **🔒 Secure Authentication**: Robust Email/Password authentication with Firebase, featuring password reset and profile management.
- **📱 Cross-Platform**: Fully responsive web dashboard that can be built into a native Android application via Capacitor.
- **✨ Premium UI**: Modern glassmorphism design with neumorphic elements for a high-end feel.
- **📑 Legal Compliance**: Built-in Privacy Policy and Terms of Service.

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Tailwind CSS (Modern Glassmorphism)
- **Database/Auth**: Firebase Firestore & Firebase Authentication
- **Charts**: Chart.js
- **Native Bridge**: Ionic Capacitor
- **Icons**: Lucide Icons

## 📁 Project Structure

```text
├── android/            # Native Android project (Capacitor)
├── assets/             # Raw icons and splash screen assets
├── www/                # Web application source code
│   ├── assets/         # Web-specific assets (logos, icons)
│   ├── index.html      # Main Dashboard & Login Logic
│   ├── privacy.html    # Privacy Policy
│   └── terms.html      # Terms of Service
├── capacitor.config.json # Capacitor configuration
└── firebase.json       # Firebase Hosting & Project configuration
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)
- [Firebase Account](https://firebase.google.com/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ankitpaul6201/tracker-project.git
   cd tracker-project
   ```

2. **Serve locally**:
   You can use any light server (like Python's `http.server`) to view the web project:
   ```bash
   python -m http.server 8080
   ```

3. **Android Build**:
   To generate a new APK:
   ```bash
   npx cap sync android
   cd android
   ./gradlew assembleDebug
   ```

## 🔐 Security Note

Sensitive configuration like `firebase-config.js` and `google-services.json` are excluded from the repository. Ensure you provide your own Firebase configuration files to run the project.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---
*Created with ❤️ by Ankit Paul*
