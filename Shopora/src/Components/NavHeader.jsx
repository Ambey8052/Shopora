// Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const NavHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Shopora</Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/profile">Profile</Link>
          <Link to="/order">Ordered</Link>
          <Link to="/electronics">Electronics</Link>
          <a
  href="https://port-folio-react-57ha.vercel.app/#about"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  About Me
</a>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/cart"><ShoppingCart /></Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 flex flex-col bg-gradient-to-r from-blue-600 to-purple-600">
          <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
          <Link to="/order" onClick={() => setMenuOpen(false)}>Ordered</Link>
          <Link to="/electronics" onClick={() => setMenuOpen(false)}>Electronics</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
           <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          <a
  href="https://port-folio-react-57ha.vercel.app/#about"
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => setMenuOpen(false)}
>
  About Me
</a>

         
          <Link to="/cart" onClick={() => setMenuOpen(false)}><ShoppingCart /></Link>
        </div>
      )}
    </header>
  );
};

export default NavHeader;
