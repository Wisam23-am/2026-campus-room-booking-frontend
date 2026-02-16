import apiClient from "./api";
import { User, PaginatedResponse } from "../types";

const USERS_ENDPOINT = "/api/users";

type UpdateUserPayload = Pick<User, "fullName" | "email" | "role">;

interface GetUsersParams {
  page?: number;
  pageSize?: number;
  search?: string;
  role?: number;
}

export const userService = {
  getUsers: async (params?: GetUsersParams): Promise<PaginatedResponse<User>> => {
    const response = await apiClient.get<PaginatedResponse<User>>(USERS_ENDPOINT, { params });
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`${USERS_ENDPOINT}/${id}`);
    return response.data;
  },

  updateUser: async (id: number, data: UpdateUserPayload): Promise<User> => {
    const response = await apiClient.put<User>(`${USERS_ENDPOINT}/${id}`, data);
    return response.data;
  },
};
