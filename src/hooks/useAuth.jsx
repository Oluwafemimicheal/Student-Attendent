import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCurrentUser, loginUser, signUpUser } from '../api/auth.api';
import { storage } from '../utils/storage';

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.token) {
        storage.saveToken(data.user.token);
      }
      queryClient.invalidateQueries({ queryKey: ['authUser'] });
    },
  });
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUpUser,
    onSuccess: (data) => {
      console.log('Global Success: User created successfully', data);
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    },
    onError: (error) => {
      console.error('Global Error: Sign-up failed', error.message);
    },
  });
};

export const useAuth = () => {
  return useQuery({
    queryKey: ['authUser'],
    queryFn: getCurrentUser,
    retry: false,
    staleTime: 1000 * 60 * 5,
    enabled: storage.hasToken(),
  });
};