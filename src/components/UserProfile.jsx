import React from 'react';

function UserProfile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-lg overflow-hidden">
        <div className="bg-cover bg-center h-40" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1494249120768-d98314a303f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)' }}></div>
        <div className="p-8">
          <div className="flex items-center justify-center -mt-16">
            <img className="rounded-full border-4 border-white h-32 w-32" src="https://randomuser.me/api/portraits/men/75.jpg" alt="Profile"/>
          </div>
          <div className="text-center mt-2">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Customer</p>
          </div>
          <div className="text-center mt-6">
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none">
              Edit Profile
            </button>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
            <ul className="mt-2 text-gray-600">
              <li className="flex items-center py-2 border-b border-gray-200">
                <span className="w-1/3 font-semibold">Email:</span>
                <span className="w-2/3">john.doe@example.com</span>
              </li>
              <li className="flex items-center py-2 border-b border-gray-200">
                <span className="w-1/3 font-semibold">Phone:</span>
                <span className="w-2/3">+123 456 7890</span>
              </li>
              <li className="flex items-center py-2 border-b border-gray-200">
                <span className="w-1/3 font-semibold">Address:</span>
                <span className="w-2/3">123 Main St, City, Country</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
