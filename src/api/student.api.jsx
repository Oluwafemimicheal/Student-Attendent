import { api } from "./axios.instance";


export const addStudent = async (studentData) => {
  const { data } = await api.post('/api/student', studentData);
  return data;
};

export const getAllStudent = async () => {
  const { data } = await api.get('/api/student/');
  return { data: data.data, count: data.count };
};

export const getSingleStudent = async (id) => {
  const { data } = await api.get(`/api/student/${id}`);
  return data;
};

export const updateStudent = async (id, updataData) => {
  const { data } = await api.put(`/api/student/${id}`, updataData);
  return data;
};

export const deleteStudent = async (id) => {
  const { data } = await api.delete(`/api/student/${id}`);
  return data;
};