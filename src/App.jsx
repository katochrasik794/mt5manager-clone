
// import Topbar from "./components/Topbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";

// import FooterBar from "./components/FooterBar";

// export default function App() {


//   return (
//     <>
//     <Router>
//       <Topbar/>
//       <Sidebar />
//       <Routes>
//         {/* <Route path="/" element={<Dashboard />} /> */}
//       </Routes>
//       <FooterBar />
//     </Router>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import FooterBar from "./components/FooterBar";

// pages you already have
import Dashboard from "./components/Dashboard"; // your Dashboard.jsx
import UsersPage from "./pages/UsersPage";
// If you have other page components, import them here:
// import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // close mobile sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="h-screen flex flex-col">
      {/* Topbar - always visible */}
      <Topbar onToggleSidebar={() => setSidebarOpen((s) => !s)} />

      {/* Middle area: sidebar + changing dashboard content */}
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Dashboard area that will change by route */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UsersPage />} />
            {/* Add your other route entries here */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
      </div>

      {/* Footer always visible */}
      <FooterBar />
    </div>
  );
}
