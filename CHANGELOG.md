# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.0] - 2026-02-17

### Added - Room Integration & Layout Improvements (ISSUE #11, #12)
- SearchableRoomSelect component with typeahead/debounce functionality
- RoomsListPage fully integrated with backend API (search, pagination)
- RoomSchedulePage displays bookings with date range filters
- Room service enhanced with schedule & availability methods
- Profile security page integrated with change password API
- Self-service user profile page using `/api/auth/me` endpoint
- Centralized AdminLayout and UserLayout components
- Consistent sidebar navigation across all pages

### Changed
- CreateBookingPage now uses searchable room select (replaces text input)
- Refactored all admin pages to use centralized layout (removed internal sidebars/navbars)
- Improved error handling and messaging in UserProfilePage

### Fixed
- Removed broken Room Schedule links from navigation
- Fixed div tag balance issues in multiple admin pages
- Resolved TypeScript build errors related to Link imports

### Related Issues
- ISSUE #11: Room Integration & Searchable Room Select
- ISSUE #12: Centralized Layout Components

## [1.1.1] - 2026-02-16

### Fixed
- Register flow now calls backend `POST /api/auth/register` and redirects to `/login` on success
- Resolved merge conflicts with `develop` in register/auth service (PR maintenance)

## [1.1.0] - 2026-02-15

### Added
- Authentication service (auth.service.ts) with login/logout functionality
- Login page with email/password authentication
- Protected route component (ProtectedRoute.tsx) for route guards
- Route guards on admin and dashboard pages
- Remember-me checkbox for email persistence
- Password visibility toggle
- Client-side form validation and error handling
- Token and user info persistence in localStorage
- Automatic redirect to login for unauthenticated access

### Features
- Full authentication flow for development/testing
- Role-based route protection
- Session management with localStorage
- Frontend-backend API integration ready

## [1.0.0] - 2026-02-14

### Added
- Initial React + TypeScript frontend scaffold
- TailwindCSS setup
- Booking list page consumes backend API (`GET /api/roombooking`)

## [Unreleased]
