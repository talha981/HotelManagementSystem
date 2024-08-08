import React from 'react';

function Rooms() {
  return (
    <div className="bg-gray-100">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://cache.marriott.com/marriottassets/marriott/SFOXR/sfoxr-lobby-lounge-5242-hor-clsc.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Rooms</h1>
          <p className="text-xl md:text-2xl mb-8">Luxury and comfort in every detail</p>
        </div>
      </header>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Explore Our Rooms</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://www.fourseasons.com/alt/img-opt/~70.1530/publish/content/dam/fourseasons/images/web/DIF/DIF_078_aspect16x9.jpg" alt="Deluxe Room"/>
                <h3 className="text-2xl font-bold mt-4">Deluxe Room</h3>
                <p className="text-gray-700 mt-2">Spacious and elegantly designed for a comfortable stay.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://www.themarkhotel.com/app/uploads/2015/04/manhattan-suite-living-and-bedroom-2000x1333.jpg" alt="Executive Suite"/>
                <h3 className="text-2xl font-bold mt-4">Executive Suite</h3>
                <p className="text-gray-700 mt-2">Luxurious suite with stunning views and premium amenities.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://www.royalsuitehotel.com/wp-content/uploads/2019/02/Royal-Suite-208.jpg" alt="Royal Suite"/>
                <h3 className="text-2xl font-bold mt-4">Royal Suite</h3>
                <p className="text-gray-700 mt-2">Opulent suite offering the highest level of luxury and comfort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
