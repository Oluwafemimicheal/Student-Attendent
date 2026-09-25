import { api } from './axios.instance';

export const getCurrentUser = async () => {
  const response = await api.get('/api/auth/me');
  return response.data; 
};

export const loginUser = async (credentials) => {
  const { data } = await api.post('/api/auth/login', credentials);
  return data;
};

export const signUpUser = async (userData) => {
  const { data } = await api.post('/api/auth/sign-up', userData);
  return data;
};