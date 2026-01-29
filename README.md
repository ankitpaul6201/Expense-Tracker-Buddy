# 💎 Expense Tracker Buddy

> **Master your student finances with style.**  
> A smart, cross-platform expense tracker built for students to manage semester budgets, track daily spending, and visualize financial habits.

![Project Banner](https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop)  
*(Replace with actual screenshot if available)*

## 🚀 Features

-   **📊 Smart Dashboard**: visualizes semester budget vs. total spent.
-   **🌓 Dark/Light Mode**: Beautiful UI that adapts to your preference.
-   **📈 Visual Analytics**: Interactive Pie and Line charts (powered by Chart.js).
-   **📅 Semester Management**: Organize expenses by semester (Sem 1 - Sem 8).
-   **📱 Cross-Platform**: Works as a **Progressive Web App (PWA)** and a **Native Android App**.
-   **🔒 Secure Auth**: Google Sign-In authentication via Firebase.
-   **☁️ Real-time Sync**: Data persists across devices using Firebase Realtime Database.

## 🛠️ Tech Stack

-   **Frontend**: HTML5, Vanilla JavaScript (ES6+)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
-   **Charts**: [Chart.js](https://www.chartjs.org/)
-   **Backend**: [Firebase](https://firebase.google.com/) (Auth, Realtime Database)
-   **Mobile**: [Capacitor.js](https://capacitorjs.com/) (Android)
-   **Hosting**: [Netlify](https://www.netlify.com/)

## ⚡ Quick Start

### Prerequisites
-   Node.js installed
-   Git installed

### 1. Clone the Repository
```bash
git clone https://github.com/ankitpaul6201/College-Expense-Tracker.git
cd College-Expense-Tracker
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally (Web)
This compiles the Tailwind CSS and watches for changes.
```bash
npm run build
# Open index.html in your browser via Live Server or similar
```

### 4. Build for Android
To generate the APK:
```bash
# 1. Sync web assets to Android project
npx cap sync android

# 2. Open Android Studio (optional) or build directly
./gradlew assembleDebug
```
The APK will be located at:  
`android/app/build/outputs/apk/debug/app-debug.apk`

## 🌐 Deployment

This project is configured for **Netlify**.
-   **Build Command**: `npm run build`
-   **Publish Directory**: `www`

## 📂 Project Structure

```
├── android/             # Native Android project files
├── src/                 # Source files (Tailwind input)
├── www/                 # Public web assets (HTML, Compiled CSS, JS)
│   ├── css/             # Compiled styles
│   ├── js/              # Local libraries (Chart.js)
│   └── index.html       # Main application entry
├── capacitor.config.json # Capacitor configuration
├── netlify.toml         # Netlify deployment config
└── tailwind.config.js   # Tailwind theme configuration
```

## 🤝 Contributing

Contributions are always welcome! Please create a pull request or open an issue.

---
*Built with ❤️ by [Ankit Paul](https://github.com/ankitpaul6201)*
