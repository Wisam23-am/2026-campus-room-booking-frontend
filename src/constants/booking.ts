import { BookingStatus } from '../types';

export const BOOKING_STATUS: Record<number, BookingStatus> = {
  0: { value: 0, label: 'Pending', color: '#FF9800' },
  1: { value: 1, label: 'Approved', color: '#4CAF50' },
  2: { value: 2, label: 'Rejected', color: '#F44336' },
};

export const BOOKING_STATUS_COLORS = {
  pending: 'bg-yellow-100 text-yellow-800',
  approved: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800',
};

export const ROOM_CATEGORIES = ['Lab', 'Seminar', 'Meeting', 'Classroom', 'Library'];
