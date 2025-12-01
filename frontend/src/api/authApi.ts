import axiosClient from "./axiosClient";

export const authApi = {
  checkLogin: () => axiosClient.get("/api/auth/check"),

  login: (rollNumber: string, password: string) =>
    axiosClient.post("/api/auth/login", {
      rollNumber,
      password,
    }),

  logout: () => axiosClient.post("/api/auth/logout"),

  getLoggedInStudent: () => axiosClient.get("/api/auth/get-student"),
};
