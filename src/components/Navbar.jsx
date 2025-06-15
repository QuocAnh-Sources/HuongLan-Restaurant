// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Tải categories từ Firebase
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const snapshot = await getDocs(collection(db, "categories"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
  <nav className="flex items-center justify-between px-6 py-4 text-white bg-gray-900">
    <div className="text-xl font-bold">🍜 Hương Lan</div>
    <ul className="relative flex space-x-4">
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">HOME</Link>
      </li>
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">NANAIMO</Link>
      </li>
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">PARKSVILLE</Link>
      </li>
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">GROCERY</Link>
      </li>
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">BLOG</Link>
      </li>
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">JOB APPLICATION</Link>
      </li>
      <li>
        <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white">CONTACT US</Link>
      </li>
      <li className="relative group">
        <div className="cursor-pointer">MENU ▾</div>

        <div className="absolute right-0 z-50 hidden w-64 overflow-y-auto text-black bg-white border border-gray-300 rounded shadow-md max-h-64 top-full group-hover:block">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/menu#${cat.id}`}
              className="block max-w-full px-4 py-2 break-words hover:bg-gray-100"
            >
              {cat.name || cat.Name}
            </Link>
          ))}
        </div>
      </li>
    </ul>
  </nav>
);

};

export default Navbar;
