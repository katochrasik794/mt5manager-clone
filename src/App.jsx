// import React, { useState, useEffect } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";

// import Topbar from "./components/Topbar";
// import NavigatorSidebar from "./components/Sidebar";
// import FooterBar from "./components/FooterBar";

// // pages you already have
// import Dashboard from "./components/Dashboard"; // your Dashboard.jsx
// import UsersPage from "./pages/UsersPage";
// import ClientPage from "./pages/clients/ClientPage";
// import Clients from "./pages/clients/Clients";
// import OnlineUsers from "./pages/clients/OnlineUsers";
// import TradingAccounts from "./pages/clients/TradingAccounts";
// import Positions from "./pages/clients/Positions";
// import Orders from "./pages/clients/Orders";
// // If you have other page components, import them here:
// // import SettingsPage from "./pages/SettingsPage";

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const location = useLocation();

//   // close mobile sidebar on route change
//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [location]);

//   return (
//     <div className="h-screen flex flex-col">
//       {/* Topbar - always visible */}
//       <Topbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />

//       {/* Middle area: sidebar + changing dashboard content */}
//       <div className="flex">
//         <NavigatorSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

//         {/* Dashboard area that will change by route */}
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<ClientPage />} />
//             <Route path="/users" element={<UsersPage />} />
//             <Route path="/clients" element={<Clients />} />
//             <Route path="/clients-dashboard" element={<ClientPage />} />
//             <Route path="/online-users" element={<OnlineUsers />} />
//             <Route path="/trading-accounts" element={<TradingAccounts />} />
//             <Route path="/positions" element={<Positions />} />
//             <Route path="/orders" element={<Orders />} />
//             {/* Add your other route entries here */}
//             <Route path="*" element={<div>Page not found</div>} />
//           </Routes>
//         </main>
//       </div>

//       {/* Footer always visible */}
//       <FooterBar />
//     </div>
//   );
// }


import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Mycontext from "./context/Mycontext";

import Topbar from "./components/Topbar";
import NavigatorSidebar from "./components/Sidebar";
import FooterBar from "./components/FooterBar";

// pages you already have
import Dashboard from "./components/Dashboard"; // your Dashboard.jsx
import UsersPage from "./pages/UsersPage";
import ClientPage from "./pages/clients/ClientPage";
import Clients from "./pages/clients/Clients";
import OnlineUsers from "./pages/clients/OnlineUsers";
import TradingAccounts from "./pages/clients/TradingAccounts";
import Positions from "./pages/clients/Positions";
import Orders from "./pages/clients/Orders";


export default function App() {
  const { mode } = useContext(Mycontext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(240); // default sidebar width
  const [footerHeight, setFooterHeight] = useState(40); // will be overridden to 10% of screen
  const [isSidebarResizing, setIsSidebarResizing] = useState(false);
  const [isMainResizing, setIsMainResizing] = useState(false);
  const [isFooterResizing, setIsFooterResizing] = useState(false);
  const isResizing = isSidebarResizing || isMainResizing || isFooterResizing;

  const location = useLocation();

  // close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  // Set initial footerHeight to 10% of screen height
  useEffect(() => {
    if (typeof window !== "undefined") {
      setFooterHeight(window.innerHeight * 0.1);
    }
  }, []);

  useEffect(() => {
    function handleMouseMove(e) {
      // Sidebar horizontal resize (left / right)
      if (isSidebarResizing) {
        const minWidth = 10;
        const maxWidth = window.innerWidth - 300;
        const newWidth = Math.min(Math.max(e.clientX, minWidth), maxWidth);
        setSidebarWidth(newWidth);
      }

      // Main horizontal resize (adjusts sidebar width)
      if (isMainResizing) {
        const minWidth = 10;
        const maxWidth = window.innerWidth - 300;
        const newWidth = Math.min(Math.max(e.clientX, minWidth), maxWidth);
        setSidebarWidth(newWidth);
      }

      // Footer vertical resize (up / down)
      if (isFooterResizing) {
        const minHeight = 30;
        const maxHeight = window.innerHeight - 10;
        // distance from cursor to bottom of window
        const calculatedHeight = window.innerHeight - e.clientY;
        const newHeight = Math.min(Math.max(calculatedHeight, minHeight), maxHeight);
        setFooterHeight(newHeight);
      }
    }

    function handleMouseUp() {
      if (isSidebarResizing) setIsSidebarResizing(false);
      if (isMainResizing) setIsMainResizing(false);
      if (isFooterResizing) setIsFooterResizing(false);
    }

    if (isSidebarResizing || isMainResizing || isFooterResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSidebarResizing, isMainResizing, isFooterResizing]);

  const handleSidebarResizeMouseDown = () => {
    setIsSidebarResizing(true);
  };

  const handleMainResizeMouseDown = () => {
    setIsMainResizing(true);
  };

  const handleFooterResizeMouseDown = () => {
    setIsFooterResizing(true);
  };

  return (
    <div
      className={`h-screen flex flex-col ${isResizing ? "select-none" : ""} ${mode}`}
      style={{ backgroundColor: mode === "dark" ? "#2c2c2c" : "white" }}
    >
      {/* Topbar - fixed to ~10% of screen height */}
      {/* <div style={{ height: "10vh", borderBottom: "1px solid #ccc" }}>
        <Topbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />
      </div> */}
      <Topbar />

      {/* Wrapper for middle (sidebar + main) and footer - occupies remaining 90% */}
      <div className="flex flex-col overflow-hidden" style={{ height: "90vh",
        padding: "10px 0px 0px 0px"
       }}>
        {/* Middle area: sidebar + changing dashboard content (≈80% initially) */}
        <div
          className="flex-1 grid overflow-hidden"
          style={{
            gridTemplateColumns: `${sidebarWidth}px 1px 1fr`,
            transition: isResizing ? "none" : "grid-template-columns 0.3s ease-in-out",
          }}
        >
          {/* Sidebar with stretchable width */}
          <div
            className={`relative h-full overflow-y-auto overflow-x-hidden border-r ${
              mode === "dark"
                ? "border-gray-700 bg-[#2c2c2c] custom-scrollbar"
                : "border-gray-200 bg-white custom-scrollbar-light"
            }`}
          >
            <NavigatorSidebar
              isOpen={sidebarOpen}
              onClose={() => setSidebarOpen(false)}
            />

            {/* Vertical resize handle on sidebar border */}
            <div
              onMouseDown={handleSidebarResizeMouseDown}
              className={`absolute top-0 right-0 h-full w-1 cursor-col-resize
                ${mode === "dark" ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}
                ${isSidebarResizing ? "bg-gray-500" : ""}`}
            />
          </div>

          {/* 1px gap */}
          <div></div>

          {/* Main area - stretches smoothly when sidebar is resized */}
          <main
            className={`overflow-auto relative ${
              mode === "dark" ? "bg-[#2c2c2c] custom-scrollbar" : "bg-white custom-scrollbar-light"
            }`}
          >
            {/* Horizontal resize handle on main's left border */}
            <div
              onMouseDown={handleMainResizeMouseDown}
              className={`absolute top-0 left-0 h-full w-1 cursor-col-resize
                bg-transparent hover:bg-gray-500/40
                ${isMainResizing ? "bg-gray-500" : ""} ${
                  mode === "dark" ? "hover:bg-gray-400/40" : ""
                }`}
            />

            <Routes>
              <Route path="/" element={<ClientPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/clients-dashboard" element={<ClientPage />} />
              <Route path="/online-users" element={<OnlineUsers />} />
              <Route path="/trading-accounts" element={<TradingAccounts />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/orders" element={<Orders />} />
              {/* Add your other route entries here */}
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </main>
        </div>

        {/* Horizontal resize handle above footer */}
        <div
          onMouseDown={handleFooterResizeMouseDown}
          className={`h-0.5 cursor-row-resize bg-transparent hover:bg-gray-500/40
            ${isFooterResizing ? "bg-gray-700" : ""} ${
            mode === "dark" ? "hover:bg-gray-400/40" : ""
          }`}
        />

        {/* Footer always visible, but height stretchable (initially ~10% of screen) */}
        <div
          className={`shrink-0 overflow-hidden border-t ${
            mode === "dark"
              ? "border-gray-700 bg-[#2c2c2c]"
              : "border-gray-200 bg-white"
          }`}
          style={{ height: footerHeight }}
        >
          <FooterBar setFooterHeight={setFooterHeight} />
        </div>
      </div>
    </div>
  );
}

