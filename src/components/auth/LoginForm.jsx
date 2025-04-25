import React, { useState } from 'react';
import Button from '../common/Button';

const LoginForm = ({ onSuccess }) => {
  const [step, setStep] = useState(1); // 1: Phone entry, 2: OTP verification, 3: Success
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  
  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    console.log('Phone submitted:', phoneNumber);
    // Here you would typically trigger an API call to send OTP
    // For now, we'll just move to the next step
    setStep(2);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log('OTP submitted:', otp);
    // Here you would verify the OTP with your backend
    // For now, we'll just move to success
    setStep(3);
    // After a brief delay, call onSuccess if provided
    setTimeout(() => {
      if (onSuccess) onSuccess();
    }, 2000);
  };

  // Phone input step
  const renderPhoneStep = () => (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-red-600">MINUTOS</h2>
        <p className="text-lg mt-2">Log in</p>
      </div>
      
      <form onSubmit={handlePhoneSubmit} className="space-y-4">
        <div>
          <div className="flex items-center border rounded">
            <span className="px-3 py-2 bg-gray-100 border-r text-black">+91</span>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-2 outline-none text-black"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        
        <Button type="submit" fullWidth>Continue</Button>
      </form>
    </>
  );

  // OTP verification step
  const renderOtpStep = () => (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-red-600">MINUTOS</h2>
        <p className="text-lg mt-2">Verify your number</p>
        <p className="text-sm text-gray-600 mt-1">
          We've sent a 6-digit code to +91 {phoneNumber}
        </p>
      </div>
      
      <form onSubmit={handleOtpSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full px-4 py-2 border rounded"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />
        </div>
        
        <Button type="submit" fullWidth>Verify</Button>
      </form>
      
      <div className="mt-4 text-center">
        <button 
          onClick={() => console.log('Resend OTP')} 
          className="text-red-600"
        >
          Didn't receive code? Resend
        </button>
      </div>
      
      <div className="mt-4 text-center">
        <button 
          onClick={() => setStep(1)} 
          className="text-blue-600"
        >
          Change phone number
        </button>
      </div>
    </>
  );

  // Success step
  const renderSuccessStep = () => (
    <div className="text-center py-6">
      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Login Successful!</h2>
      <p className="text-gray-600 mt-2">You have successfully logged in</p>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg">
      {step === 1 && renderPhoneStep()}
      {step === 2 && renderOtpStep()}
      {step === 3 && renderSuccessStep()}
    </div>
  );
};

export default LoginForm;