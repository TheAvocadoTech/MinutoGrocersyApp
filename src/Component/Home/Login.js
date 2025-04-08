
import { useState, useEffect, useRef } from 'react';
import PhoneVerification from './PhoneVerification';
import OtpVerification from './OtpVerification';

const LoginModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      const timeout = setTimeout(() => {
        setStep('phone');
        setPhoneNumber('');
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneSubmit = (phone) => {
    setPhoneNumber(phone);
    setStep('otp');
  };

  const handleOtpSubmit = () => {
    onClose();
    console.log('User authenticated with phone', phoneNumber);
  };

  const handleResendOtp = () => {
    console.log('Resending OTP to', phoneNumber);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={modalRef}
        className="rounded-lg p-6 w-full max-w-md relative animate-fadeIn"
      >
        <button className="absolute top-4 right-4 text-gray-500" onClick={onClose}>
          &times;
        </button>
        {step === 'phone' ? (
          <PhoneVerification onSubmit={handlePhoneSubmit} />
        ) : (
          <OtpVerification
            phoneNumber={phoneNumber}
            onSubmit={handleOtpSubmit}
            onResend={handleResendOtp}
            onBack={() => setStep('phone')}
          />
        )}
      </div>
    </div>
  );
};

export default LoginModal;