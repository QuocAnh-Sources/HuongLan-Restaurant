// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Nội dung trang thay đổi */}
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}