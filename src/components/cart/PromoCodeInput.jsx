import React, { useState } from 'react';
import Button from '../common/Button';

const PromoCodeInput = ({ onApply }) => {
  const [code, setCode] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (code.trim()) {
      onApply(code);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4 mb-2">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Promo Code"
        className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-red-500"
      />
      <Button 
        type="submit"
        variant="secondary"
        className="rounded-l-none"
      >
        Apply
      </Button>
    </form>
  );
};

export default PromoCodeInput;