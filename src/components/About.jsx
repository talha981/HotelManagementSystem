import React from 'react';

function About() {
  return (
    <div className="bg-gray-100">
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp3598846.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the story behind our hotel</p>
        </div>
      </header>
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            Our hotel has been providing world-class hospitality and unparalleled service since its inception. Nestled in the heart of the city, we offer a tranquil escape with luxurious accommodations, exquisite dining options, and top-notch amenities. Our mission is to create unforgettable experiences for our guests, ensuring every stay is filled with comfort, relaxation, and memorable moments.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom" alt="Luxury Rooms"/>
                <h3 className="text-2xl font-bold mt-4">Luxury Rooms</h3>
                <p className="text-gray-700 mt-2">Experience the ultimate in comfort and elegance in our well-appointed rooms.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://cdn.lifestyleasia.com/wp-content/uploads/sites/2/2021/08/11124327/Man-Wah-Cropped-1600x900.jpg" alt="Exquisite Dining"/>
                <h3 className="text-2xl font-bold mt-4">Exquisite Dining</h3>
                <p className="text-gray-700 mt-2">Savor culinary delights prepared by our world-renowned chefs.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img className="h-40 w-full object-cover rounded-t-lg" src="https://tse4.mm.bing.net/th?id=OIP.46VkPAFtA4S16NWiAYhyngHaE8&pid=Api&P=0&h=220" alt="State-of-the-art Gym"/>
                <h3 className="text-2xl font-bold mt-4">State-of-the-art Gym</h3>
                <p className="text-gray-700 mt-2">Stay fit and healthy with our modern fitness facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
