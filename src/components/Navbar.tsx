// src/components/Navbar.tsx
import { FC, useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar: FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className=" text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Logo</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
          <li><a href="#find-blood" className="hover:text-gray-400">Find Blood</a></li>
          <li><a href="#register" className="hover:text-gray-400">Register</a></li>
          <li><a href="#login" className="hover:text-gray-400">Login</a></li>
        </ul>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden fixed inset-0  flex flex-col items-center justify-center space-y-6">
          <li><a href="#home" className="hover:text-gray-400 text-lg">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400 text-lg">About Us</a></li>
          <li><a href="#find-blood" className="hover:text-gray-400 text-lg">Find Blood</a></li>
          <li><a href="#register" className="hover:text-gray-400 text-lg">Register</a></li>
          <li><a href="#login" className="hover:text-gray-400 text-lg">Login</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
