import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <p className="text-red-800 mb-2">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="text-red-600 font-medium hover:text-red-800"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;