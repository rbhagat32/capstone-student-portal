import { useState } from "react";
import { authApi } from "../api/authApi";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (rollNumber: string, password: string) => {
    try {
      setLoading(true);
      setError("");
      const res = await authApi.login(rollNumber, password);
      return res.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
