import React, { useState } from 'react';
import OrderList from '../components/OrderList';
import TopBar from '../components/TopBar';
import Sidebar from '../components/Sidebar';
import RightBar from '../components/RightBar';

export default function Order() {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);

  return (
    <div className="flex w-full h-[75.375rem] bg-white overflow-hidden">
      {/* LEFT Sidebar */}
      {leftOpen && (
        <div className="flex-shrink-0 w-[13.25rem] border-r border-black/10 bg-white">
          <Sidebar />
        </div>
      )}

      {/* MAIN Wrapper (TopBar + Content) */}
      <div className="flex flex-1 flex-col overflow-hidden bg-white">
        {/* TopBar */}
        <TopBar
          leftOpen={leftOpen}
          onToggleLeft={() => setLeftOpen(!leftOpen)}
          onToggleRight={() => setRightOpen(!rightOpen)}
        />

        {/* Main Content */}
        <div className="flex-1 p-[1.25rem] bg-white overflow-hidden">
          <div className="w-full max-w-[90rem] mx-auto h-[75.375rem]">
            {/* Heading */}
            <div className="inline-block rounded-lg px-2 py-1">
              <h2 className="font-semibold text-sm leading-5 text-[#1C1C1C]">
                Orders
              </h2>
            </div>

            {/* Orders Component */}
            <OrderList />
          </div>
        </div>
      </div>

     
    </div>
  );
}