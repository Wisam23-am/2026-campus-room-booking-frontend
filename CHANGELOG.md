# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
