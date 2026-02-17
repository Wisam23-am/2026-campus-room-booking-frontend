# Campus Room Booking System - Frontend

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Version](https://img.shields.io/badge/version-1.2.0-blue.svg)](https://github.com/Wisam23-am/2026-campus-room-booking-frontend/releases/tag/v1.2.0)

Modern React + TypeScript frontend untuk sistem peminjaman ruangan kampus dengan Tailwind CSS, JWT Authentication, dan responsive design.

## 📖 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [Project Structure](#-project-structure)
- [Pages & Components](#-pages--components)
- [API Integration](#-api-integration)
- [Authentication](#-authentication)
- [Development Guide](#-development-guide)
- [Building for Production](#-building-for-production)
- [Contributing](#-contributing)

## ✨ Features

### User Features
- 🔐 **Authentication** - Login/Register dengan JWT
- 📊 **Dashboard** - User stats, recent bookings, quick actions
- 📋 **Booking Management** - Create, view, edit, delete bookings
- 🔍 **Search & Filter** - Advanced search dengan pagination
- 📅 **Room Schedule** - View room availability calendar
- 🏢 **Room Browser** - Browse available rooms dengan search
- 👤 **User Profile** - View & edit profile, change password
- 🔔 **Notifications** - Booking status updates

### Admin Features
- 👨‍💼 **Admin Dashboard** - System overview, statistics
- ✅ **Approval Queue** - Approve/reject pending bookings
- 🏢 **Room Management** - CRUD operations untuk rooms
- 👥 **User Management** - Manage users, roles
- 📊 **Reports & Analytics** - Booking statistics, trends
- 📝 **System Logs** - Activity tracking
- ⚙️ **System Settings** - Configure application

### UI/UX Features
- 🎨 **Modern Design** - Clean, professional interface
- 🌙 **Dark Mode Support** - Toggle between light/dark themes
- 📱 **Responsive** - Mobile-first, works on all devices
- ⚡ **Fast Performance** - Optimized rendering
- 🎯 **Intuitive Navigation** - Centralized sidebar layout
- 🔄 **Real-time Updates** - Auto-refresh booking status
- ✨ **Smooth Animations** - Tailwind transitions

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| [React](https://reactjs.org/) | 19.0 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.6 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Styling |
| [React Router](https://reactrouter.com/) | 7.1 | Client-side routing |
| [Axios](https://axios-http.com/) | 1.7 | HTTP client |
| [Material Icons](https://fonts.google.com/icons) | Latest | Icon library |

## 📦 Prerequisites

Pastikan sistem Anda memiliki:

- **[Node.js](https://nodejs.org/)** v16+ atau v18+ (recommended)
- **[npm](https://www.npmjs.com/)** v8+ atau **[yarn](https://yarnpkg.com/)** v1.22+
- **[Git](https://git-scm.com/)** untuk version control
- **Backend API** running di `http://localhost:5168` (lihat [backend repo](https://github.com/Wisam23-am/2026-campus-room-booking-backend))

Verifikasi instalasi:
```bash
node --version    # v18.x.x or higher
npm --version     # 8.x.x or higher
```

## 🚀 Installation

###1. Clone Repository

```bash
git clone https://github.com/Wisam23-am/2026-campus-room-booking-frontend.git
cd 2026-campus-room-booking-frontend
```

### 2. Install Dependencies

```bash
npm install
```

Atau menggunakan yarn:
```bash
yarn install
```

### 3. Setup Environment

```bash
# Copy .env.example ke .env
cp .env.example .env
```

Edit `.env` dan sesuaikan:
```env
REACT_APP_API_BASE_URL=http://localhost:5168
REACT_APP_ENVIRONMENT=development
```

### 4. Verify Installation

```bash
npm run build
```

Jika sukses, folder `build/` akan ter-generate.

## ⚙️ Configuration

### Environment Variables

File `.env`:

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:5168
REACT_APP_ENVIRONMENT=development

# Feature Flags (optional)
REACT_APP_ENABLE_ANALYTICS=false
REACT_APP_ENABLE_DARK_MODE=true
```

### API Base URL

Default API base URL adalah `http://localhost:5168`. Untuk production, ubah di `.env`:

```env
REACT_APP_API_BASE_URL=https://api.yourdomain.com
```

## 🏃 Running the Application

### Development Mode

```bash
npm start
```

Aplikasi akan terbuka di **http://localhost:3000**

- Auto-reload saat file berubah
- Hot Module Replacement (HMR) enabled
- React DevTools support

### Build for Production

```bash
npm run build
```

Optimized build akan ada di folder `build/`:
- Minified JS/CSS
- Tree-shaking enabled
- Source maps generated
- Bundle size: ~134 kB (gzipped)

### Test Production Build Locally

```bash
npm install -g serve
serve -s build -p 3000
```

## 📁 Project Structure

```
2026-campus-room-booking-frontend/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── robots.txt
├── src/
│   ├── components/         # Reusable components
│   │   ├── ProtectedRoute.tsx     # Route guard
│   │   ├── SearchableRoomSelect.tsx
│   │   └── Sidebar.tsx            # Navigation sidebar
│   ├── layouts/            # Layout wrappers
│   │   ├── AdminLayout.tsx        # Admin page wrapper
│   │   ├── UserLayout.tsx         # User page wrapper
│   │   └── MainLayout.tsx         # Public page wrapper
│   ├── pages/              # Page components
│   │   ├── LoginPage.tsx
│   │   ├── RegisterPage.tsx
│   │   ├── UserDashboardPage.tsx
│   │   ├── BookingListPage.tsx
│   │   ├── CreateBookingPage.tsx
│   │   ├── RoomsListPage.tsx
│   │   ├── RoomSchedulePage.tsx
│   │   ├── UserProfilePage.tsx
│   │   ├── ProfileSecurityPage.tsx
│   │   ├── AdminDashboardPage.tsx
│   │   ├── AdminApprovalsPage.tsx
│   │   ├── AdminRoomsPage.tsx
│   │   ├── AdminUserManagementPage.tsx
│   │   ├── ReportsAnalyticsPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── services/           # API services
│   │   ├── api.ts                 # Axios instance
│   │   ├── auth.service.ts        # Authentication
│   │   ├── booking.service.ts     # Booking APIs
│   │   ├── room.service.ts        # Room APIs
│   │   └── user.service.ts        # User APIs
│   ├── types/              # TypeScript types
│   │   └── index.ts
│   ├── constants/          # Constants
│   │   ├── api.ts
│   │   └── booking.ts
│   ├── utils/              # Utility functions
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global styles
│   ├── index.tsx           # Entry point
│   └── index.css           # Tailwind directives
├── .env.example            # Environment template
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🎨 Pages & Components

### Public Pages

**LoginPage** (`/login`)
- Email/password authentication
- Remember me checkbox
- Link to register page
- Error handling

**RegisterPage** (`/register`)
- User registration form
- Email validation
- Password strength indicator
- Auto-redirect to login

### User Pages

**UserDashboardPage** (`/dashboard`)
- User statistics cards
- Recent bookings table
- Quick action buttons
- Upcoming bookings

**BookingListPage** (`/bookings`)
- Full booking list with pagination
- Search and filter capabilities
- Status badges (Pending/Approved/Rejected)
- Quick actions (edit, delete, view details)

**CreateBookingPage** (`/bookings/create`)
- Searchable room select (typeahead)
- Date/time pickers
- Purpose textarea
- Real-time validation

**RoomsListPage** (`/rooms`)
- Browse all rooms
- Search by name/building
- View capacity & facilities
- Click to see schedule

**RoomSchedulePage** (`/rooms/:id/schedule`)
- Calendar view of bookings
- Date range filter
- Booking details on hover
- Check availability

**UserProfilePage** (`/profile`)
- View/edit profile info
- Avatar upload (future)
- Email verification status

**ProfileSecurityPage** (`/profile/security`)
- Change password form
- Current password verification
- Password strength meter

### Admin Pages

**AdminDashboardPage** (`/admin/dashboard`)
- System overview statistics
- Recent activity feed
- Quick management links
- Charts & graphs

**AdminApprovalsPage** (`/admin/approvals`)
- Pending booking queue
- Approve/reject actions
- Bulk operations
- Rejection reason modal

**AdminRoomsPage** (`/admin/rooms`)
- Room CRUD operations
- Search & pagination
- Status toggle (Active/Inactive)
- Facility management

**AdminUserManagementPage** (`/admin/users`)
- User CRUD operations
- Role assignment
- Account status management
- Search & filter

**ReportsAnalyticsPage** (`/admin/reports`)
- Booking statistics
- Room utilization rates
- User activity metrics
- Export to CSV (future)

### Shared Components

**Sidebar.tsx**
- Navigation menu
- Role-based links
- Active state highlighting
- Responsive collapse

**ProtectedRoute.tsx**
- Route guard component
- Token validation
- Role-based access control
- Auto-redirect to login

**SearchableRoomSelect.tsx**
- Typeahead room search
- Debounced API calls
- Keyboard navigation
- Custom option renderer

## 🔌 API Integration

### Services Architecture

```typescript
// services/api.ts - Axios instance with interceptors
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

// Request interceptor - add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor - handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Auto logout on 401
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
```

### Authentication Service

```typescript
// services/auth.service.ts
export const authService = {
  async login(email: string, password: string) {
    const response = await api.post('/api/auth/login', { email, password });
    const { token, userId, role } = response.data;
    
    localStorage.setItem('authToken', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('userRole', role);
    
    return response.data;
  },
  
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userRole');
  },
  
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  },
  
  getUserRole(): string | null {
    return localStorage.getItem('userRole');
  }
};
```

### Booking Service Example

```typescript
// Usage in components
import { bookingService } from '../services/booking.service';

// In component
const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchBookings();
}, []);

const fetchBookings = async () => {
  try {
    const response = await bookingService.getBookings({
      page: 1,
      pageSize: 10,
      status: 'Pending'
    });
    setBookings(response.data.data);
  } catch (error) {
    console.error('Failed to fetch bookings:', error);
  } finally {
    setLoading(false);
  }
};
```

## 🔐 Authentication

### Login Flow

1. User submits email/password
2. Frontend calls `POST /api/auth/login`
3. Backend returns JWT token + user info
4. Token saved to localStorage
5. Axios interceptor adds token to subsequent requests
6. Redirect to dashboard

### Protected Routes

```typescript
// App.tsx
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <UserLayout>
        <UserDashboardPage />
      </UserLayout>
    </ProtectedRoute>
  } 
/>
```

### Role-based Access

```typescript
// ProtectedRoute.tsx
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const isAuth = authService.isAuthenticated();
  const userRole = authService.getUserRole();
  
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  
  if (adminOnly && userRole !== 'Admin') {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};
```

### Test Credentials

**Admin:**
- admin@campus.edu / Password123!

**User:**
- john.doe@campus.edu / Password123!

## 💻 Development Guide

### Adding a New Page

1. Create component dalam `src/pages/`:
```typescript
// src/pages/NewPage.tsx
export const NewPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">New Page</h1>
    </div>
  );
};
```

2. Add route dalam `App.tsx`:
```typescript
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link di Sidebar (jika perlu)

### Adding a New API Service

1. Create service file:
```typescript
// src/services/example.service.ts
import api from './api';

export const exampleService = {
  async getData() {
    const response = await api.get('/api/example');
    return response.data;
  }
};
```

2. Import dan use di component

### Styling Guidelines

- Use Tailwind utility classes
- Follow mobile-first approach
- Use dark mode variants: `dark:bg-gray-800`
- Consistent spacing: p-4, p-6, p-8
- Color palette: blue for primary, gray for neutral

### TypeScript Types

```typescript
// src/types/index.ts
export interface Booking {
  id: number;
  roomName: string;
  purpose: string;
  startTime: string;
  endTime: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  bookedBy: string;
}

export interface Room {
  id: number;
  name: string;
  capacity: number;
  building: string;
  facilities: string;
}
```

## 🏗️ Building for Production

### Optimize Build

```bash
# Create optimized production build
npm run build

# Analyze bundle size
npm run build -- --stats
npx webpack-bundle-analyzer build/static/js/*.js
```

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
build

# Environment variables (set in Netlify dashboard)
REACT_APP_API_BASE_URL=https://api.yourdomain.com
```

### Deploy to Vercel

```bash
vercel --prod
```

### Deploy to GitHub Pages

```bash
npm install -g gh-pages

# Add to package.json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy
```

## 🤝 Contributing

### Git Workflow

1. **Create feature branch** from `develop`:
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name
```

2. **Commit dengan Conventional Commits**:
```bash
git add .
git commit -m "feat(booking): add calendar view"
```

3. **Push dan buat Pull Request**:
```bash
git push origin feature/your-feature-name
```

4. Create PR dari `feature/*` → `develop`
5. After merge, PR dari `develop` → `main` untuk release

### Code Standards

- Use functional components dengan hooks
- Follow React best practices
- Add TypeScript types untuk semua props
- Use meaningful variable names
- Comment complex logic
- Keep components small (<300 lines)

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md)

**Latest:** v1.2.0 (2026-02-17)
- Room integration dengan searchable select
- Profile security & change password
- Centralized layout components
- UI/UX improvements

## 🔗 Related Projects

- [Backend API](https://github.com/Wisam23-am/2026-campus-room-booking-backend)
- [Documentation](https://github.com/Wisam23-am/2026-campus-room-booking-docs)

---

**Made using React + TypeScript + Tailwind CSS**