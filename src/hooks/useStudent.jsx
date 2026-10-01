import { useMutation, useQuery } from "@tanstack/react-query"
import { addStudent, deleteStudent, getAllStudent, getSingleStudent, updateStudent } from "../api/student.api"
import { queryClient } from "../main";

export const useCreateStudent = () => { 
  return useMutation({
    mutationFn: addStudent,
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      const student = response.data;
      console.log("New Student added successfully:", student.fullName);
    },
    onError: (error) => {
      console.error("Error creating student:", error.response?.data?.message || error.message);
    }
  });
};

export const useAllStudentsData = () => {
  return useQuery({
    queryKey: ['student'],
    queryFn: getAllStudent,
    retry: false,
    staleTime: 1000 * 5, 
    refetchOnWindowFocus: false, 
    refetchOnMount: false,       
    refetchOnReconnect: false,
  })
}

export const useSingleStudentData = (id) => {
  return useQuery({
    queryKey: ['student', id],
    queryFn: () => getSingleStudent(id),
    enabled: !!id,
    retry: false,
    staleTime: 1000 * 60 * 1
  });
};

export const useUpdateStudentData = () => {

  return useMutation({
    mutationFn: ({ id, data }) => updateStudent(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(['student']);
      console.log("Student updated successfully!");
    },
    onError: (error) => {
      console.error("Update failed:", error);
    }
  });
};

export const useDeleteStudentData = () => {
  return useMutation({
    mutationFn: (id) => deleteStudent(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['student']);
      console.log("Student deleted successfully!");
    },
    onError: (error) => {
      console.error("Delete failed:", error);
    }
  });
};


// Note: 
// useQuery is for READING data.It runs automatically when the component loads.
// useMutation is for CHANGING data(Create, Update, Delete).It only runs when you manually call a.mutate() function (like when a user clicks a button).