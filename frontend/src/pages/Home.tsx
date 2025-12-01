import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../api/authApi";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      try {
        const res = await authApi.checkLogin();
        if (res.data?.isLoggedIn) navigate("/dashboard");
        else navigate("/login");
      } catch {
        navigate("/login");
      }
    };

    check();
  }, [navigate]);

  return null; // nothing needed here
}
