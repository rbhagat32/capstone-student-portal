import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 min-h-screen w-full bg-gray-100">
        <Navbar />
        <div className="px-6 pt-20 pb-10">{children}</div>
      </div>
    </div>
  );
}
