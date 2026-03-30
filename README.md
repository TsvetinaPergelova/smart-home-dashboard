# Smart Home Dashboard

A modern web application for controlling and monitoring smart home devices in real-time. Built with React, TypeScript, and Vite.

## 🏠 Functionality

### Core Features

- **Device Control** - Toggle smart devices on/off with real-time status updates
- **Sensor Monitoring** - Track temperature and humidity readings across your home
- **Energy Consumption** - Monitor total energy usage and track power consumption per device
- **Scene Management** - Create and apply predefined automation scenes
- **Activity Logging** - Real-time log of all device actions and system events
- **Room Organization** - View and manage devices organized by room
- **Persistent Storage** - All settings and device states saved locally using browser localStorage
- **Responsive Design** - Works seamlessly on desktop and mobile devices

### Pages

1. **Dashboard** (Home) - Main control center with:
   - Device grid for quick access
   - Sensor panel showing environmental data
   - Scene controls for automation
   - Activity log with action history

2. **Rooms** - Dedicated view for organizing and controlling devices by room

## 🛠️ Tech Stack

- **Framework**: React 19.2.4
- **Language**: TypeScript 5.9
- **Build Tool**: Vite 8.0
- **Routing**: React Router DOM 7.13
- **Styling**: CSS3
- **Development Experience**: HMR (Hot Module Replacement), ESLint

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Step 1: Clone or Navigate to Project

```bash
cd smart-home-dashboard
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ActivityLog.tsx    # Activity/event log display
│   ├── DeviceCard.tsx     # Individual device control card
│   ├── DeviceGrid.tsx     # Grid view of all devices
│   ├── RoomsPage.tsx      # Rooms organization page
│   ├── SceneControls.tsx  # Scene management interface
│   └── SensorPanel.tsx    # Environmental sensors display
├── hooks/
│   └── useSmartHome.ts   # Custom hook for smart home logic
├── utils/
│   ├── energy.ts         # Energy calculation utilities
│   └── format.ts         # Formatting utilities
├── data/
│   └── initialDevices.ts # Initial device configuration
├── types.ts              # TypeScript type definitions
├── App.tsx               # Main application component
├── App.css               # Application styling
└── main.tsx              # Application entry point
```

## 💾 Data Persistence

The application uses browser localStorage to persist:

- Device states and configurations
- Activity logs
- Current scene settings

Data persists between sessions and survives page refreshes.

## 🎯 Usage

1. **Control Devices**: Toggle devices on/off from the device grid
2. **Monitor Sensors**: View real-time temperature and humidity data
3. **Check Energy**: See total energy consumption and per-device usage
4. **Apply Scenes**: Select and apply predefined automation scenes
5. **View History**: Check the activity log for all system events
6. **Organize by Room**: Navigate to the Rooms page for room-based device management

## 📝 Features

- Real-time device state synchronization
- Automatic calculation of energy consumption
- Timestamped activity logging
- Scene-based automation
- Responsive grid and layout design

---

**Version**: 0.0.0
