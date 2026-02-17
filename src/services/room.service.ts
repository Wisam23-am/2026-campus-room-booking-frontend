import apiClient from "./api";
import { PaginatedResponse, Room } from "../types";

const ROOMS_ENDPOINT = "/api/rooms";

export type RoomQueryParams = {
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
};

export type RoomSchedule = {
  bookingId: number;
  roomName: string;
  bookedBy: string;
  purpose: string;
  startTime: string;
  endTime: string;
  status: number;
};

export type RoomAvailabilityQuery = {
  startTime: string;
  endTime: string;
};

export type RoomAvailabilityResponse = {
  roomId: number;
  roomName: string;
  isAvailable: boolean;
  message: string;
  conflictingBookings: RoomSchedule[];
};

export type CreateRoomDto = {
  name: string;
  building: string;
  floor?: number;
  capacity: number;
  category?: string;
  description?: string;
  status?: number;
};

export type UpdateRoomDto = Partial<CreateRoomDto>;

export const roomService = {
  getRooms: async (params?: RoomQueryParams): Promise<PaginatedResponse<Room>> => {
    const response = await apiClient.get<PaginatedResponse<Room>>(ROOMS_ENDPOINT, {
      params,
    });
    return response.data;
  },

  getRoomById: async (id: number): Promise<Room> => {
    const response = await apiClient.get<Room>(`${ROOMS_ENDPOINT}/${id}`);
    return response.data;
  },

  getRoomSchedule: async (
    id: number,
    from?: string,
    to?: string
  ): Promise<RoomSchedule[]> => {
    const response = await apiClient.get<RoomSchedule[]>(
      `${ROOMS_ENDPOINT}/${id}/schedule`,
      {
        params: { from, to },
      }
    );
    return response.data;
  },

  checkRoomAvailability: async (
    id: number,
    query: RoomAvailabilityQuery
  ): Promise<RoomAvailabilityResponse> => {
    const response = await apiClient.get<RoomAvailabilityResponse>(
      `${ROOMS_ENDPOINT}/${id}/availability`,
      {
        params: query,
      }
    );
    return response.data;
  },

  createRoom: async (data: CreateRoomDto): Promise<Room> => {
    const response = await apiClient.post<Room>(ROOMS_ENDPOINT, data);
    return response.data;
  },

  updateRoom: async (id: number, data: UpdateRoomDto): Promise<Room> => {
    const response = await apiClient.put<Room>(`${ROOMS_ENDPOINT}/${id}`, data);
    return response.data;
  },

  deleteRoom: async (id: number): Promise<void> => {
    await apiClient.delete(`${ROOMS_ENDPOINT}/${id}`);
  },
};
