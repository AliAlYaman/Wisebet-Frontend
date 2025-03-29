import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Sidebar from "../components/common/SideBar";
import Footer from "../components/common/Footer";
import { ChevronRightIcon } from "../components/common/SportsIcons";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 overflow-hidden">
      <Header />
      
      <div className="flex flex-1">
        <main className="flex-1">
          <Outlet />
        </main>
        
        {/* Mobile sidebar toggle */}
        <div className="md:hidden fixed bottom-4 right-4 z-30">
          <button 
            className="rounded-full w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg flex items-center justify-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <ChevronRightIcon className={`h-6 w-6 transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        {/* Sidebar for desktop (fixed) */}
        <div className="hidden md:block w-80 shrink-0 border-l border-gray-800">
          <div className="sticky top-16 h-[calc(100vh-4rem)] bg-gray-900">
            <Sidebar />
          </div>
        </div>
        
        {/* Sidebar for mobile (sliding) */}
        <div 
          className={`md:hidden fixed inset-y-0 right-0 z-40 w-72 transition-transform duration-300 transform bg-gray-900 border-l border-gray-800 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-full pt-16">
            <Sidebar />
          </div>
        </div>
        
        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/70 z-30"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;