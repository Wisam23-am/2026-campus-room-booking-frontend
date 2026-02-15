import apiClient from "./api";
import { User } from "../types";

const USERS_ENDPOINT = "/api/users";

type UpdateUserPayload = Pick<User, "fullName" | "email" | "role">;

export const userService = {
  getUserById: async (id: number): Promise<User> => {
    const response = await apiClient.get<User>(`${USERS_ENDPOINT}/${id}`);
    return response.data;
  },

  updateUser: async (id: number, data: UpdateUserPayload): Promise<User> => {
    const response = await apiClient.put<User>(`${USERS_ENDPOINT}/${id}`, data);
    return response.data;
  },
};
