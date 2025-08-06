
import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className=" text-white py-20 px-4 text-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://png.pngtree.com/background/20210709/original/pngtree-carnival-return-return-to-continue-carnival-explosive-payment-picture-image_926936.jpg', backgroundSize: 'cover'}}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Best Deals</h1>
      <p className="text-lg md:text-2xl mb-6">Shop top products from trusted brands</p>
      <Link to="/allproducts" className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition-all duration-300">
        Shop Now
      </Link>
    </section>
  );
};

export default Hero;