import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
  children: ReactNode;
}
function DashboardLayout({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-theme-base-1">
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
