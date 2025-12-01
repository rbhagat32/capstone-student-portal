import { useEffect, useState } from "react";
import { toast } from "sonner";
import { authApi } from "../api/authApi";
import { getAvatarURL } from "../utils/avatar";

export default function Navbar() {
  const [student, setStudent] = useState<any>(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await authApi.getLoggedInStudent();
        setStudent(res.data);
      } catch {
        toast.error("Failed to load user info");
      }
    };

    fetchStudent();
  }, []);

  return (
    <div className="fixed top-0 right-0 left-64 z-10 flex h-16 items-center justify-between bg-white px-6 shadow-md">
      <h2 className="text-xl font-semibold text-slate-700">Dashboard</h2>

      {/* User info */}
      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-medium text-slate-700">
            {student?.name ?? "Loading..."}
          </p>
          <p className="text-xs text-slate-500">{student?.rollNumber}</p>
        </div>

        {/* SAME AVATAR HERE */}
        {student ? (
          <img
            src={getAvatarURL(student.name, student.gender)}
            alt="Avatar"
            className="h-10 w-10 rounded-full border border-gray-300 shadow-sm"
          />
        ) : (
          <div className="h-10 w-10 animate-pulse rounded-full bg-slate-200" />
        )}
      </div>
    </div>
  );
}
