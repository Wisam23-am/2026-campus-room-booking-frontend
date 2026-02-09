import apiClient from './api';
import { RoomBooking, PaginatedResponse, CreateBookingDto, UpdateBookingDto, BookingQueryParams } from '../types';

const BOOKINGS_ENDPOINT = '/api/roombooking';

export const bookingService = {
  // Get all bookings with filters
  getBookings: async (params?: BookingQueryParams): Promise<PaginatedResponse<RoomBooking>> => {
    const response = await apiClient.get<PaginatedResponse<RoomBooking>>(BOOKINGS_ENDPOINT, { params });
    return response.data;
  },

  // Get single booking by id
  getBookingById: async (id: number): Promise<RoomBooking> => {
    const response = await apiClient.get<RoomBooking>(`${BOOKINGS_ENDPOINT}/${id}`);
    return response.data;
  },

  // Create new booking
  createBooking: async (data: CreateBookingDto): Promise<RoomBooking> => {
    const response = await apiClient.post<RoomBooking>(BOOKINGS_ENDPOINT, data);
    return response.data;
  },

  // Update booking
  updateBooking: async (id: number, data: UpdateBookingDto): Promise<RoomBooking> => {
    const response = await apiClient.put<RoomBooking>(`${BOOKINGS_ENDPOINT}/${id}`, data);
    return response.data;
  },

  // Delete booking
  deleteBooking: async (id: number): Promise<void> => {
    await apiClient.delete(`${BOOKINGS_ENDPOINT}/${id}`);
  },
};
