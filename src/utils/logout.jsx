import { useNavigate } from 'react-router-dom';
import { storage } from './logout';
import { useQueryClient } from '@tanstack/react-query';

export const Navbar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    storage.removeToken(); 
    queryClient.clear();
    navigate('/');
  };

  return <button onClick={handleLogout}>Logout</button>;
};