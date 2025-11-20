
import Topbar from "./components/Topbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

import FooterBar from "./components/FooterBar";

export default function App() {


  return (
    <>
    <Router>
      <Topbar/>
      <Sidebar />
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Routes>
      <FooterBar />
    </Router>
    </>
  );
}
