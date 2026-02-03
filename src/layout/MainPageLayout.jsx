import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { SideBar } from "../components/SideBar";
import { Outlet } from "react-router-dom";

export const MainPageLayout = () => {
  const [expandSidebar, setExpandSideBar] = useState(false);
  return (
    <div className="min-h-screen flex">
      <SideBar
        expandSidebar={expandSidebar}
        setExpandSideBar={setExpandSideBar}
      />
      <div className="flex flex-col flex-1">
        <Navbar setExpandSideBar={setExpandSideBar} />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
