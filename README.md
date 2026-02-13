# Campus Room Booking System - Frontend

React + TypeScript frontend untuk sistem peminjaman ruangan kampus dengan Tailwind CSS.

## 🎨 Design

Desain UI/UX dibuat dengan Stitch dan di-convert ke React TypeScript components. Menggunakan Tailwind CSS untuk styling dengan dark mode support.

## 📋 Features

- 🔐 **User Authentication** - Login page dengan form validation
- 📊 **User Dashboard** - Dashboard dengan stats dan recent bookings
- 📋 **Booking Management** - List, create, edit, delete bookings
- 🔍 **Search & Filter** - Search by room name, filter by status, pagination
- ✅ **Admin Panel** - Approval queue, room management, statistics
- 🎭 **Role-based Access** - Different UI untuk user dan admin
- 🌙 **Dark Mode** - Full dark mode support
- 📱 **Responsive** - Mobile-first design, works on all devices

## 📁 Project Structure

```
src/
├── pages/                 # Page components
│   ├── LoginPage.tsx
│   ├── UserDashboardPage.tsx
│   ├── BookingListPage.tsx
│   ├── CreateBookingPage.tsx
│   ├── AdminDashboardPage.tsx
│   ├── AdminApprovalsPage.tsx
│   └── AdminRoomsPage.tsx
├── components/            # Reusable components
│   └── Sidebar.tsx
├── layouts/               # Layout components
│   └── MainLayout.tsx
├── services/              # API services
│   ├── api.ts            # Axios instance
│   └── booking.service.ts
├── types/                 # TypeScript types
│   └── index.ts
├── constants/             # Constants
│   ├── api.ts
│   └── booking.ts
├── App.tsx               # Main app with routing
├── App.css               # Tailwind CSS
└── index.css             # Global styles
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ 
- npm atau yarn
- Backend API running di `http://localhost:5168`

### Installation

```bash
# Navigate to frontend directory
cd 2026-campus-room-booking-frontend

# Install dependencies
npm install

# Copy .env.example to .env dan sesuaikan jika perlu
cp .env.example .env

# Start development server
npm start
```

Aplikasi akan membuka di `http://localhost:3000`

## � Developer Mode (Testing without Login)

Developer mode memungkinkan testing tanpa perlu login. Berguna untuk development lokal cepat.

### Setup Developer Mode

Edit `.env` dan set:

```env
REACT_APP_DEV_MODE=true
REACT_APP_DEV_ROLE=user  # atau 'admin'
```

### Cara Kerja

- Ketika aplikasi dimulai, jika `REACT_APP_DEV_MODE=true`, automatic login dilakukan
- Default role bisa dikonfigurasi via `REACT_APP_DEV_ROLE`
- Token dibuat otomatis dengan timestamp (`dev-token-{timestamp}`)
- Console akan menampilkan: `🔧 Developer Mode: Auto-logged in as user`

### Quick Login pada Login Page (Dev Mode Aktif)

Ketika dev mode aktif, login page menampilkan 2 tombol quick login:
- 👤 **Login as User** - Quick login dengan role user
- 👨‍💼 **Login as Admin** - Quick login dengan role admin

Klik tombol untuk instant login tanpa perlu memasukkan credentials.

**⚠️ Catatan**: Developer mode hanya berfungsi di development environment (`NODE_ENV=development`), bukan di production.

## 📝 Environment Variables

Copy `.env.example` ke `.env` dan sesuaikan:

```env
REACT_APP_API_BASE_URL=http://localhost:5168
REACT_APP_ENVIRONMENT=development

# Developer Mode
REACT_APP_DEV_MODE=false
REACT_APP_DEV_ROLE=user
```

## 🔄 API Integration

Frontend menggunakan axios untuk komunikasi dengan backend API. API base URL dapat dikonfigurasi melalui environment variables.

### Booking Service

```typescript
import { bookingService } from './services/booking.service';

// Get all bookings
const response = await bookingService.getBookings({
  search: 'Lab',
  status: 0,
  page: 1,
  pageSize: 10
});

// Get single booking
const booking = await bookingService.getBookingById(1);

// Create booking
const newBooking = await bookingService.createBooking({
  roomName: 'Lab 1',
  bookedBy: 'John Doe',
  startTime: '2026-02-10T08:00:00',
  endTime: '2026-02-10T10:00:00'
});

// Update booking
const updated = await bookingService.updateBooking(1, {
  status: 1
});

// Delete booking
await bookingService.deleteBooking(1);
```

## 🔐 Authentication

Login menggunakan token yang disimpan di localStorage. Token akan otomatis ditambahkan ke setiap request via axios interceptor.

```typescript
// Login
localStorage.setItem('authToken', 'token-value');
localStorage.setItem('userRole', 'user' | 'admin');

// Logout
localStorage.removeItem('authToken');
localStorage.removeItem('userRole');
```

## 🎯 Pages & Routes

### User Routes
- `/login` - Login page
- `/dashboard` - User dashboard
- `/bookings` - Booking list
- `/bookings/create` - Create new booking

### Admin Routes
- `/admin/dashboard` - Admin dashboard
- `/admin/approvals` - Approval queue
- `/admin/rooms` - Room management

## 🛠️ Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Icons**: Emoji (future: Heroicons atau Material Icons)

## 📦 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm build

# Run tests
npm test

# Eject (one-way operation, be careful!)
npm eject
```

## 🐛 Development Tips

### Form Validation

Gunakan HTML5 validation attributes dan custom validation messages:

```typescript
<input
  type="email"
  required
  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  onInvalid={(e) => e.target.setCustomValidity('Invalid email')}
/>
```

### API Error Handling

```typescript
try {
  await bookingService.createBooking(data);
} catch (error: any) {
  const message = error.response?.data?.message || 'Unknown error';
  console.error('Error:', message);
}
```

### Dark Mode

Dark mode dapat diaktifkan via class pada `<html>` element:

```typescript
// Enable dark mode
document.documentElement.classList.add('dark');

// Disable dark mode
document.documentElement.classList.remove('dark');
```

## 📚 Documentation

- [Database Schema](../docs/architecture/database-schema.md)
- [System Design](../docs/architecture/system-design.md)
- [UI/UX Prompt](../docs/design/ui-ux-prompt.md)
- [API Documentation](../docs/api/api-documentation.md)

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/nama-fitur`
2. Commit changes: `git commit -m "feat: description"`
3. Push to branch: `git push origin feature/nama-fitur`
4. Create Pull Request ke `develop`

## 📄 License

MIT

## 👥 Team

- Frontend Lead: Development Team
- Backend Lead: Development Team
- Design: Figma / Stitch

## 📞 Support

Untuk pertanyaan atau issues, hubungi tim development atau buat issue di GitHub project board.

---

**Version**: 0.1.0  
**Last Updated**: 2026-02-10