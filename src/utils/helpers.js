export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(price);
  };
  
  export const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };
  
  export const getDeliveryTime = (minutes) => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutes);
    return now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  };
  
  export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  export const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };