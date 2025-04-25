import { useAuth as useAuthContext } from '../context/AuthContext';

// This is just a re-export from the context for better import paths
const useAuth = () => {
  return useAuthContext();
};

export default useAuth;