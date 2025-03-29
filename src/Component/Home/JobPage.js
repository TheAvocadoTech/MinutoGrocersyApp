import React from "react";

const JobOpenings = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1500x400')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">JOB OPENINGS</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold text-center mb-4">Apply Now</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Phone" className="w-full border p-2 rounded" />
            <select className="w-full border p-2 rounded">
              <option>Select Position</option>
              <option>Graphic Designer</option>
              <option>Content Writer</option>
              <option>Web Designer</option>
            </select>
            <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
            <button className="w-full bg-blue-600 text-white py-2 rounded">Apply Now</button>
          </form>
        </div>

        <h2 className="text-2xl font-bold text-center mt-10">The Project Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Profile" className="mx-auto rounded-full mb-4" />
              <h3 className="font-bold">We Are HIRING</h3>
              <p>Position: Job Role</p>
              <p className="text-gray-600">Company Name</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobOpenings;
