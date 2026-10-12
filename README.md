# AliPortfolio

A personal portfolio mobile application built with React Native, Expo, and TypeScript. Showcases technical skills, education background, and projects developed during the SWE 3409 Mobile Application Development course at INES-Ruhengeri.

## 📱 Features

- **Home** - Personal introduction with profile photo, bio, and key information
- **Skills & Education** - Technical skills tags and education history
- **Projects** - Project portfolio with detailed views
- **Profile** - Editable profile information with photo management
- **About** - App information, privacy policy, and technical details
- **Offline-first** - Core functionality works without internet connection
- **Local persistence** - Data stored securely using AsyncStorage

## 🛠 Tech Stack

- **Framework**: React Native 0.86.3 / Expo SDK 57
- **Language**: TypeScript
- **Navigation**: React Navigation 7 (Bottom Tabs + Stack)
- **State Management**: React Context + AsyncStorage
- **UI Components**: Custom components with design system
- **Image Handling**: Expo ImagePicker (camera/gallery)
- **Build**: EAS Build (Expo Application Services)

## 📋 Project Info

| Detail | Value |
|--------|-------|
| **Full Name** | Ali Salaheldin |
| **Registration Number** | 2526883 |
| **Verification Code** | MOB-A2-6883 |
| **Course** | SWE 3409 - Mobile Application Development |
| **Institution** | INES-Ruhengeri |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun
- Expo CLI (`npm install -g expo-cli`)
- EAS CLI (`npm install -g eas-cli`)

### Installation

```bash
# Clone the repository
git clone https://github.com/l33kang/-MOB_A2_2526883.git
cd AliPortfolio

# Install dependencies
npm install

# Start development server
npx expo start
```

### Run on Device/Emulator

```bash
# Android
npx expo start --android

# iOS (macOS only)
npx expo start --ios

# Web
npx expo start --web
```

## 🏗 Building APK

### Local Build (requires Android SDK)

```bash
npx eas-cli@latest build --platform android --profile preview --local
```

### Cloud Build (EAS)

```bash
# Configure project (first time)
npx eas-cli@latest init --account YOUR_ACCOUNT

# Build APK
npx eas-cli@latest build --platform android --profile preview --wait
```

The APK will be available for download from the EAS dashboard or GitHub Actions artifacts.

## 📁 Project Structure

```
AliPortfolio/
├── .github/workflows/      # GitHub Actions CI/CD
├── assets/                 # Images, icons, fonts
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Avatar.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   └── Tag.tsx
│   ├── data/
│   │   └── initialData.ts  # Default profile, skills, projects
│   ├── hooks/
│   │   └── useProfile.ts   # Profile state management
│   ├── navigation/
│   │   ├── AppNavigator.tsx
│   │   └── types.ts
│   ├── screens/
│   │   ├── AboutScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   ├── ProfileEditorScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   ├── ProjectDetailsScreen.tsx
│   │   ├── ProjectsScreen.tsx
│   │   └── SkillsEducationScreen.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   ├── styled.tsx      # Design system (colors, spacing, typography)
│   │   └── validation.ts
│   └── app.json
├── eas.json                # EAS Build configuration
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Design System

The app uses a comprehensive design system in `src/utils/styled.tsx`:

- **Colors**: Semantic color palette (light/dark theme ready)
- **Spacing**: Consistent 8px base scale (xs, sm, md, lg, xl, xxl)
- **Typography**: Hierarchical type scale (h1-h4, body, caption, etc.)
- **Shadows**: Platform-aware elevation/shadows
- **Border Radius**: Consistent rounding scale
- **Components**: Pre-styled Card, Button, Input, Tag, Avatar

## 📦 Key Dependencies

```json
{
  "expo": "~57.0.27",
  "react": "19.2.3",
  "react-native": "0.86.3",
  "@react-navigation/native": "^7.5.0",
  "@react-navigation/bottom-tabs": "^7.20.0",
  "@react-navigation/native-stack": "^7.20.0",
  "expo-image-picker": "^57.0.20",
  "expo-camera": "^57.0.6",
  "expo-updates": "~57.0.25",
  "react-native-reanimated": "4.5.1",
  "react-native-gesture-handler": "~2.32.0",
  "react-native-safe-area-context": "~5.7.0",
  "react-native-screens": "~4.26.0",
  "@react-native-async-storage/async-storage": "2.2.0"
}
```

## 🔧 Configuration

### EAS Build (`eas.json`)

```json
{
  "build": {
    "preview": {
      "distribution": "internal",
      "android": { "buildType": "apk" }
    },
    "production": {
      "android": { "buildType": "apk" }
    }
  }
}
```

### App Config (`app.json`)

- Package name: `rw.ac.ines.ug2526883.aliportfolio`
- Runtime version policy: `appVersion`
- Permissions: Camera, Storage, Audio

## 🧪 Quality Checks

```bash
# TypeScript type checking
npx tsc --noEmit

# Expo doctor (dependency validation)
npx expo-doctor

# Linting
npx expo lint
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 👨‍💻 Developer

**Ali Salaheldin**  
Registration: 2526883  
Verification: MOB-A2-6883  
Course: SWE 3409 Mobile Application Development  
Institution: INES-Ruhengeri

---

Built as part of the SWE 3409 Mobile Application Development course at INES-Ruhengeri.