import React, { useState } from 'react';

const InternshipApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    role: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const internshipBenefits = [
    {
      title: 'Hands-on Experience',
      description: 'Gain real-world skills through practical projects and industry-relevant assignments.',
      icon: '💼'
    },
    {
      title: 'Mentorship',
      description: 'Learn directly from experienced professionals who guide your professional growth.',
      icon: '🧭'
    },
    {
      title: 'Certification',
      description: 'Receive official certificates to boost your professional portfolio.',
      icon: '🏆'
    },
    {
      title: 'Networking',
      description: 'Connect with industry experts and build valuable professional relationships.',
      icon: '🤝'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Banner Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Empower Your Future with CodesGesture</h1>
          <p className="text-xl max-w-3xl mx-auto mb-6">
            Transform your career with our comprehensive internship program. Dive into real-world projects, learn from industry experts, and kickstart your professional journey.
          </p>
          <a 
            href="#application-form" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Internship?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {internshipBenefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8 max-w-6xl py-16 px-4">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg" id="application-form">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-6">
              Internship Application Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="name"
                placeholder="Full Name" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="tel" 
                name="mobile"
                placeholder="Mobile Number" 
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.mobile}
                onChange={handleInputChange}
                required 
              />
              <select 
                name="role"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Preferred Role</option>
                <option value="sales">Sales and Marketing</option>
                <option value="graphic">Graphic Designer</option>
                <option value="content">Content Designer</option>
                <option value="website">Website Designer</option>
              </select>
              <div className="flex items-center justify-between border rounded-md p-3">
                <span className="text-gray-500">
                  {formData.resume ? formData.resume.name : 'Upload CV/Resume'}
                </span>
                <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Upload
                  <input 
                    type="file" 
                    name="resume"
                    className="hidden"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                  />
                </label>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit Application
              </button>
            </form>
            <p className="text-center text-sm text-gray-500 mt-4">
              We'll review your application and get back to you within 5 business days.
            </p>
          </div>
        </div>

        {/* Internship Details Section */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-yellow-50 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Internship Opportunities</h3>
            <p className="text-md mb-6">
              Explore exciting roles that will accelerate your professional growth and provide real-world experience.
            </p>
            <div className="space-y-4">
              {[
                'Sales and Marketing',
                'Graphic Designer',
                'Content Designer',
                'Website Designer'
              ].map((role, index) => (
                <div 
                  key={index} 
                  className="flex items-center bg-white p-4 rounded-md shadow-sm"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-7 w-7 text-blue-500 mr-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                    />
                  </svg>
                  <span className="text-md font-medium">{role}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-around text-center">
              {[
                { value: '10+', label: 'Internship Domains' },
                { value: '2600+', label: 'Trained Students' },
                { value: '1800+', label: 'Successful Placements' }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <img 
                src="https://imgs.search.brave.com/ygdTLVEZnD9myKNTLW5s9tkf-3OiQ7gnJeYrCXQHuKI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3k3/NHlwMVdMbW03T1NK/UGl5eEJiTlNYRlNr/OE13Nk5vRlRuMENs/UGdMaXA0amVTQnpM/dThTR0p1QUtDUmJt/OTlsWV9HaVZjVlVj/VFJQdzhVTkZ1aWdi/U0tSY0RFNnh0YmxW/STBFUFh4SGhHU3JG/OGdCRFU" 
                alt="Internship Program" 
                className="mx-auto rounded-lg shadow-md object-cover h-64 w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Kickstart Your Career?</h3>
          <p className="text-lg mb-6">
            Don't miss this opportunity to gain valuable experience and set the foundation for your professional success.
          </p>
          <a 
            href="#application-form" 
            className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default InternshipApplication;