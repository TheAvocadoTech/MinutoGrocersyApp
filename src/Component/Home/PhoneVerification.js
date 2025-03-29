import { useState } from 'react';

const PhoneVerification = ({ onSubmit }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length >= 10) {
      onSubmit(phoneNumber);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="px-6 py-8 max-w-md mx-auto bg-white shadow-md rounded-md">
      <div className="flex flex-col items-center mb-6">
        <img src="/images/minitos.png" alt="Minutos Logo" className="w-32 h-12 object-contain" />
        <p className="text-red-500 text-sm mt-1">Your Local Delivery Partner</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className={`flex border rounded-md overflow-hidden ${!isValid ? 'border-red-500' : 'border-gray-300'}`}>            
            <div className="bg-gray-100 px-3 py-2 text-gray-600 border-r">+91</div>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setIsValid(true);
              }}
              className="flex-1 py-2 px-3 outline-none"
            />
          </div>
          {!isValid && <p className="text-red-500 text-xs mt-1">Please enter a valid phone number</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
        >
          Continue
        </button>
      </form>

      <p className="text-xs text-gray-500 text-center mt-4">
        By continuing, you agree to our Terms of Service & Privacy Policy
      </p>
    </div>
  );
};

export default PhoneVerification;