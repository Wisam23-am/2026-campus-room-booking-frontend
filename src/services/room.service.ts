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
};
