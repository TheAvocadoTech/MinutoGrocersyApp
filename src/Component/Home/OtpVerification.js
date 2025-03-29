import { useState, useRef, useEffect } from 'react';

const OtpVerification = ({ phoneNumber, onSubmit, onResend, onBack }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState(19);
  const [isExpired, setIsExpired] = useState(false);
  const [error, setError] = useState(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !isExpired) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsExpired(true);
    }
  }, [timeLeft, isExpired]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(null);

    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.join('').length === 6) {
      onSubmit();
    } else {
      setError('Please enter the complete OTP');
    }
  };

  const handleResend = () => {
    setTimeLeft(19);
    setIsExpired(false);
    setOtp(Array(6).fill(''));
    inputRefs.current[0].focus();
    onResend();
  };

  const formatPhoneNumber = (phone) => `+91 888** ${phone.slice(-4)}`;

  return (
    <div className="px-6 py-8">
      <div className="flex flex-col items-center mb-6">
        <img src="/images/minitos.png" alt="Minutos Logo" className="w-32 h-auto mb-2" />
        <p className="text-red-500 text-sm">Your Local Delivery Partner</p>
      </div>

      <h3 className="text-lg font-semibold text-center mb-2">OTP Verification</h3>
      <p className="text-sm text-center mb-4">OTP has been sent to {formatPhoneNumber(phoneNumber)}</p>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-12 border-b-2 border-gray-300 text-center text-lg font-semibold outline-none"
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-xs mb-2 text-center">{error}</p>}

        <p className="text-center text-gray-500 text-sm mb-4">
          {!isExpired ? `00:${String(timeLeft).padStart(2, '0')}` : 'OTP expired'}
        </p>

        <div className="text-center mb-6">
          <button
            type="button"
            className="text-sm text-red-500 font-semibold"
            onClick={handleResend}
          >
            {isExpired ? 'Resend OTP' : "Didn't Get it?"}
          </button>
        </div>

        <button type="submit" className="w-full bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition">
          Continue
        </button>
      </form>
      <p className="text-xs text-gray-500 text-center mt-4">By continuing, you agree to our Terms of Service & Privacy Policy</p>
    </div>
  );
};

export default OtpVerification;