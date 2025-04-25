import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  fullWidth = false,
  disabled = false,
  className = ''
}) => {
  const baseClasses = 'py-2 px-4 rounded font-medium focus:outline-none transition duration-200';
  
  const variantClasses = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-red-600 text-red-600 hover:bg-red-50'
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${disabledClass} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

export default Button;