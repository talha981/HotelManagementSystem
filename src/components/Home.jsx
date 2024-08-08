import React from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()

  const handleSubmit=()=>{
    navigate('/login')
  }
  
  return (
    <div className="bg-gray-100">
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://muffingroup.com/blog/wp-content/uploads/2020/10/hotel.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Our Hotel</h1>
          <p className="text-xl md:text-2xl mb-8">Experience luxury and comfort in the heart of the city</p>
          <button  onClick={handleSubmit} className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded text-lg">
            Book Now
          </button>
        </div>
      </header>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Services</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://www.luxuryspaawards.com/wp-content/uploads/sites/10/2019/03/eforea-spa-at-Hilton-Queenstown-Resort-Spa-1.jpg" alt="Spa"/>
                <h3 className="text-2xl font-bold mt-4">Spa & Wellness</h3>
                <p className="text-gray-700 mt-2">Relax and rejuvenate with our world-class spa services.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://i.pinimg.com/originals/85/69/c5/8569c586497f5ca3b6687320c12d0681.jpg" alt="Restaurant"/>
                <h3 className="text-2xl font-bold mt-4">Gourmet Dining</h3>
                <p className="text-gray-700 mt-2">Enjoy exquisite cuisine prepared by top chefs.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://media.cntraveller.in/wp-content/uploads/2014/01/3---Fitness-Centre-1183567474-1366x768.jpg" alt="Gym"/>
                <h3 className="text-2xl font-bold mt-4">Fitness Center</h3>
                <p className="text-gray-700 mt-2">Stay fit and healthy with our state-of-the-art gym.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
