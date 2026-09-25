import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { storage } from './storage';
import { TbLogout } from "react-icons/tb";

export const Navbar = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    storage.removeToken(); 
    queryClient.clear();
    navigate('/');
  };

  return <button onClick={handleLogout} className='flex items-center gap-2 cursor-pointer bg-white/10 text-white font-bold border border-white/20 rounded-md p-1.5 w-full'><TbLogout size={20} /> Logout</button>;
};