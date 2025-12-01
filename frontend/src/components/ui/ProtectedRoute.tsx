import { authApi } from "@/api/authApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { toast } from "react-toastify";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verify = async () => {
      try {
        const res = await authApi.checkLogin();

        if (!res.data?.isLoggedIn) {
          toast.info("Please login to continue.");
          navigate("/login");
        }
      } catch {
        toast.error("Session expired. Please login again.");
        navigate("/login");
      } finally {
        setChecking(false);
      }
    };

    verify();
  }, [navigate]);

  if (checking) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
        <HashLoader color="#2563eb" size={60} />
        <p className="mt-4 text-lg font-medium text-gray-700">
          Verifying access...
        </p>
      </div>
    );
  }

  return <>{children}</>;
}
