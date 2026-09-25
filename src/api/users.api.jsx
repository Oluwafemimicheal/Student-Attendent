import { api } from './axios-instance';

export const fetchUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

export const fetchUserById = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};
