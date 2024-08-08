import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();


  return (
    <nav className="bg-gray-800 p-7 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-3xl font-normal mr-6 tracking-wide">
            Azalea Garden Resort
          </h1>
          <div className="ml-24">
            <NavLink to="/" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium">Home</NavLink>
            <NavLink to="/about" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium">About</NavLink>
            <NavLink to="/rooms" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium">Rooms</NavLink>
            <NavLink to="/booking" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium">Booking</NavLink>
            <NavLink to="/profile" className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-lg font-medium">Profile</NavLink>
          </div>
        </div>
        <div>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="bg-white hover:bg-gray-300 text-black font-bold px-4 py-2 rounded-md text-lg"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="bg-white hover:bg-gray-300 text-black font-bold px-4 py-2 rounded-md text-lg">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
