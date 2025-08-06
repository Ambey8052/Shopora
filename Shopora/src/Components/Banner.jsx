
import { Link } from 'react-router-dom';
import React from 'react';
const Banner = () => {
  return (
    <section className="bg-yellow-100 py-10 px-6 text-center"
    style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/back_our/20190622/ourmid/pngtree-light-blue-literary-fresh-children-s-day-poster-background-image_231390.jpg)', backgroundSize: 'cover' }}>
      <h2 className="text-3xl font-bold mb-2">Limited Time Offer!</h2>
      <p className="text-lg mb-4">Get up to 60% off on select items.</p>
      <Link to="/" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">Shop Now</Link>
    </section>
  );
};

export default Banner;