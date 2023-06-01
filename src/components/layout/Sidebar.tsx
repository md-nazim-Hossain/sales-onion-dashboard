"use client";
import { sidebarData } from "@data/NavData";
import { SidebarDataTypes } from "@type/Types";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[240px] bg-theme-base-2 h-[calc(100vh-89px)] relative">
      <div className="px-6 py-10">
        <ul className="space-y-10">
          {sidebarData.map((item: SidebarDataTypes, index: number) => (
            <li key={index}>
              <Link href={item.href} className="flex items-center gap-3">
                <item.icon
                  size={22}
                  className={`${
                    pathname === item.href ? "text-primary" : "text-secondary"
                  }`}
                />
                <h4
                  className={`${
                    pathname === item.href
                      ? "text-primary font-semibold"
                      : "text-secondary"
                  }`}
                >
                  {item.title}
                </h4>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={""}
          className="font-medium flex items-center gap-x-2 absolute bottom-5"
        >
          <FiLogOut size={18} />
          <p>Sign Out</p>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
