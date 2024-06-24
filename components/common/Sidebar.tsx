"use client";

import { Nav } from "@/components/ui/nav";
import { Button } from "../ui/button";
import {
  Archive,
  ArchiveX,
  LayoutDashboard,
  ShoppingCart,
  Trash2,
  UserRound,
  ChevronRight,
  X,
} from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [IsCollapsed, setIsCollapsed] = useState(true);

  function toggleSidebar() {
    setIsCollapsed(!IsCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3 pt-20 pb-10">
      <div>
        <Button
          onClick={toggleSidebar}
          className="bg-white text-black hover:bg-slate-300 "
        >
          {IsCollapsed ? <ChevronRight /> : <X />}
        </Button>
      </div>
      <Nav
        isCollapsed={IsCollapsed}
        links={[
          {
            title: "Dashboard",
            label: "128",
            icon: LayoutDashboard,
            variant: "default",
            href: "/",
          },
          {
            title: "Users",
            label: "9",
            icon: UserRound,
            variant: "ghost",
            href: "/users",
          },
          {
            title: "Order",
            label: "",
            icon: ShoppingCart,
            variant: "ghost",
            href: "/order",
          },
          {
            title: "Junk",
            label: "23",
            icon: ArchiveX,
            variant: "ghost",
            href: "#",
          },
          {
            title: "Trash",
            label: "",
            icon: Trash2,
            variant: "ghost",
            href: "#",
          },
          {
            title: "Archive",
            label: "",
            icon: Archive,
            variant: "ghost",
            href: "#",
          },
        ]}
      />
    </div>
  );
};

export default Sidebar;
