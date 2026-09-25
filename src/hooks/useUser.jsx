import { useMutation} from '@tanstack/react-query';
import { loginUser } from '../api/auth.api';

export const useCreateUser = () => {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
    },
    onError: (error) => {
      console.error("Submission failed:", error);
    }
  });
};
