import React, { useState } from "react";
import AnalyticsDashboard from "../components/AnalyticsDashboard";
import TopBar from "../components/TopBar";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import { useTheme } from "../hooks/useTheme"; // ✅ add theme hook here

export default function Dashboard() {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  // 🔥 Theme hook
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex w-full h-[75.375rem] bg-white dark:bg-black overflow-hidden">
      {/* LEFT Sidebar */}
      {leftOpen && (
        <div className="flex-shrink-0 w-[13.25rem] border-r border-black/10 bg-white dark:bg-black dark:border-gray-700">
          <Sidebar />
        </div>
      )}

      {/* MAIN wrapper (TopBar + Content) */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-black">
        {/* TopBar */}
        <TopBar
          leftOpen={leftOpen}
          onToggleLeft={() => setLeftOpen(!leftOpen)}
          onToggleRight={() => setRightOpen(!rightOpen)}
          onToggleTheme={toggleTheme}   // ✅ pass toggle
          theme={theme}                 // ✅ pass theme
        />

        {/* Main Content */}
        <div className="flex-1 p-[1.25rem] bg-white dark:bg-black overflow-hidden">
          <div className="w-full max-w-[90rem] mx-auto h-[75.375rem]">
            {/* Heading */}
            <div className="inline-block rounded-lg px-2 py-1">
              <h2 className="font-semibold text-sm leading-5 text-[#1C1C1C] dark:text-gray-200">
                eCommerce
              </h2>
            </div>

            {/* Dashboard Component */}
            <AnalyticsDashboard />
          </div>
        </div>
      </div>

      {/* RIGHT Sidebar */}
      {rightOpen && (
        <div className="flex-shrink-0 w-[17.5rem] border-l border-black/10 bg-white dark:bg-black dark:border-gray-700">
          <RightBar />
        </div>
      )}
    </div>
  );
}