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
    <div className="px-6 py-8 w-/2  bg-red-500  rounded-md">
      <div className="flex flex-col items-center mb-6">
        <img src="https://www.minutos.in/images/minitos-White.png" alt="Minutos Logo" className="w-32 h-12 object-contain" />
        <p className="text-red-500 text-sm mt-1">Your Local Delivery Partner</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className={`flex border rounded-md overflow-hidden`}>            
            <div className=" px-3 py-2 text-white border-r ">+91</div>
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
          className="w-full bg-white text-red-500 font-bold py-2 rounded-md "
        >
          Continue
        </button>
      </form>

      <p className="text-xs text-white text-center mt-4">
        By continuing, you agree to our Terms of Service & Privacy Policy
      </p>
    </div>
  );
};

export default PhoneVerification;