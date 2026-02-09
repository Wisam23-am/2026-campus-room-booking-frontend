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
  isDeleted: boolean;
}

export interface CreateBookingDto {
  roomName: string;
  bookedBy: string;
  purpose?: string;
  startTime: string;
  endTime: string;
}

export interface UpdateBookingDto extends CreateBookingDto {
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
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  token?: string;
}

export interface Room {
  id?: number;
  name: string;
  building: string;
  floor: number;
  capacity: number;
  category: string;
  description?: string;
  amenities?: string[];
  status?: 'active' | 'inactive';
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
