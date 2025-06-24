import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../common/Button';
import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';

const LoginForm = ({ onSuccess }) => {
  const { sendOTP, verifyOTP, resendOTP, loading, error } = useAuth();
  const [step, setStep] = useState(1); // 1: Phone entry, 2: OTP verification, 3: Success
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [remainingAttempts, setRemainingAttempts] = useState(3);

  // Timer for resend OTP
  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  // Format phone number display
  const formatPhoneDisplay = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `${cleaned.slice(0, 5)}${cleaned.slice(5)}`;
    }
    return phone;
  };

  // Validate Indian phone number
  const validatePhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 10 && /^[6-9]\d{9}$/.test(cleaned);
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setOtpError('');
    
    if (!validatePhoneNumber(phoneNumber)) {
      setOtpError('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      await sendOTP(phoneNumber);
      setStep(2);
      setResendTimer(30); // 30 seconds before allowing resend
      setRemainingAttempts(3);
    } catch (err) {
      setOtpError(err.message || 'Failed to send OTP. Please try again.');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setOtpError('');
    
    if (otp.length !== 6) {
      setOtpError('Please enter a 6-digit OTP');
      return;
    }

    try {
      const result = await verifyOTP(phoneNumber, otp);
      setStep(3);
      
      // Call onSuccess after a brief delay
      setTimeout(() => {
        if (onSuccess) onSuccess(result);
      }, 2000);
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Invalid OTP';
      setOtpError(errorMessage);
      
      // Update remaining attempts if provided
      if (err.response?.data?.remainingAttempts !== undefined) {
        setRemainingAttempts(err.response.data.remainingAttempts);
      }
      
      // Clear OTP field if verification failed
      setOtp('');
    }
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    
    setOtpError('');
    try {
      await resendOTP(phoneNumber);
      setResendTimer(30);
      setRemainingAttempts(3);
      setOtp(''); // Clear current OTP
    } catch (err) {
      setOtpError(err.message || 'Failed to resend OTP. Please try again.');
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only digits
    if (value.length <= 6) {
      setOtp(value);
      setOtpError(''); // Clear error when user types
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only digits
    if (value.length <= 10) {
      setPhoneNumber(value);
      setOtpError(''); // Clear error when user types
    }
  };

  // Phone input step
  const renderPhoneStep = () => (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-red-600">MINUTOS</h2>
        <p className="text-lg mt-2 text-gray-800">Log in or Sign up</p>
        <p className="text-sm text-gray-600 mt-1">
          Enter your mobile number to continue
        </p>
      </div>
      
      <form onSubmit={handlePhoneSubmit} className="space-y-4">
        <div>
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="px-3 py-3 bg-gray-100 border-r text-gray-700 font-medium">
              +91
            </span>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full px-4 py-3 outline-none text-gray-800 bg-white"
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength={10}
              required
              autoFocus
            />
          </div>
          {otpError && <ErrorMessage message={otpError} />}
        </div>
        
        <Button 
          type="submit" 
          fullWidth 
          disabled={loading || phoneNumber.length !== 10}
          className="py-3"
        >
          {loading ? <Loader size="sm" /> : 'Continue'}
        </Button>
        
        <p className="text-xs text-gray-500 text-center mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </form>
    </>
  );

  // OTP verification step
  const renderOtpStep = () => (
    <>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-red-600">MINUTOS</h2>
        <p className="text-lg mt-2 text-gray-800">Verify your number</p>
        <p className="text-sm text-gray-600 mt-1">
          We've sent a 6-digit code to
        </p>
        <p className="text-sm font-medium text-gray-800">
          +91 {formatPhoneDisplay(phoneNumber)}
        </p>
      </div>
      
      <form onSubmit={handleOtpSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="w-full px-4 py-3 border rounded-lg text-center text-lg font-medium tracking-widest outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
            value={otp}
            onChange={handleOtpChange}
            maxLength={6}
            required
            autoFocus
            autoComplete="one-time-code"
          />
          {otpError && <ErrorMessage message={otpError} />}
          {remainingAttempts < 3 && remainingAttempts > 0 && (
            <p className="text-sm text-orange-600 mt-2">
              {remainingAttempts} attempt{remainingAttempts !== 1 ? 's' : ''} remaining
            </p>
          )}
        </div>
        
        <Button 
          type="submit" 
          fullWidth 
          disabled={loading || otp.length !== 6}
          className="py-3"
        >
          {loading ? <Loader size="sm" /> : 'Verify & Continue'}
        </Button>
      </form>
      
      <div className="mt-6 space-y-3">
        <div className="text-center">
          <button 
            onClick={handleResendOTP}
            disabled={resendTimer > 0 || loading}
            className={`text-sm font-medium ${
              resendTimer > 0 || loading
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-red-600 hover:text-red-700'
            }`}
          >
            {resendTimer > 0 
              ? `Resend OTP in ${resendTimer}s` 
              : 'Resend OTP'
            }
          </button>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              setStep(1);
              setOtp('');
              setOtpError('');
              setResendTimer(0);
            }}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Change phone number
          </button>
        </div>
      </div>
    </>
  );

  // Success step
  const renderSuccessStep = () => (
    <div className="text-center py-8">
      <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2">Welcome to MINUTOS!</h2>
      <p className="text-gray-600">You have successfully logged in</p>
      <div className="mt-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-600 mx-auto"></div>
        <p className="text-sm text-gray-500 mt-2">Redirecting...</p>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      {step === 1 && renderPhoneStep()}
      {step === 2 && renderOtpStep()}
      {step === 3 && renderSuccessStep()}
    </div>
  );
};

export default LoginForm;