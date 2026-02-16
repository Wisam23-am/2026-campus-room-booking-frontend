export interface BookingStatus {
  value: 0 | 1 | 2;
  label: string;
  color: string;
}

export interface RoomBooking {
  id: number;
  roomName: string;
  bookedBy: string;
  purpose?: string;
  startTime: string;
  endTime: string;
  status: 0 | 1 | 2;
  createdAt: string;
  updatedAt?: string;
  isDeleted?: boolean;
}

export interface CreateBookingDto {
  roomName: string;
  bookedBy: string;
  purpose?: string;
  startTime: string;
  endTime: string;
}

export interface UpdateBookingDto {
  roomName?: string;
  bookedBy?: string;
  purpose?: string;
  startTime?: string;
  endTime?: string;
  status?: 0 | 1 | 2;
}

export interface PaginatedResponse<T> {
  data: T[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  role: 0 | 1;
  createdAt: string;
  updatedAt?: string;
  token?: string;
}

export interface Room {
  id: number;
  name: string;
  building: string;
  floor: number;
  capacity: number;
  category: string;
  description?: string;
  status: 0 | 1; // 0 = Active, 1 = Inactive
  createdAt: string;
  updatedAt?: string;
}

export interface BookingQueryParams {
  search?: string;
  status?: 0 | 1 | 2;
  startDate?: string;
  endDate?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}
