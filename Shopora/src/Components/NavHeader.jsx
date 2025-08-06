// Header.jsx

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">Shopora</Link>
        <nav className={`md:flex gap-6 items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link to="/profile">Profile</Link>
          <Link to="/order">Ordered</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart"><ShoppingCart /></Link>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default NavHeader;
