import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer';
/*import HeroSection from './components/HeroSection';*/
import Navbar from './components/Navbar';
import UserProfile from './One/UserProfile';
import JobList from './Two/JobList';
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ScrollToHash from "./components/ScrollToHash";

function App() {
  return (
    <div>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
