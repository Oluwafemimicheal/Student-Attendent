import { useState } from "react";
import { useCreateStudent } from "../../hooks/useStudent";
import Spinner from "../common/Spinner";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const AddStudent = ({action}) => {
  const { data: user } = useAuth()
    const [formData, setFormData] = useState({
      user: user._id,
      fullName: "",
      email: "",
      course: "",
      phoneNumber: "",
      image:"",
    })
  const { mutate, isPending } = useCreateStudent();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        setFormData({
          fullName: "",
          email: "",
          course: "",
          phoneNumber: "",
          image:"",
        });

        toast.success('Student add Successfully!');
        action(false);
      },
      onError: (error) => {
        const message = error.response?.data?.message || 'Registration failed. Try again.';
        toast.error(message);
      }
    });
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden lg:w-100 mx-auto'>
      <div className='bg-blue-900 p-5 flex items-center gap-5'>
        <div className='bg-white p-2 rounded-md'>
          <h1 className='text-blue-900 font-bold text-lg'>NH</h1>
        </div>
        <div>
          <h1 className='text-white text-2xl font-semibold'>New Student Form</h1>
          <p className='text-sm text-gray-300'>Student Information</p>
        </div>
      </div>


      <form onSubmit={handleSubmit} className='p-5 space-y-4'>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <input type="text" placeholder='Full name' name='fullName' value={formData.fullName} onChange={handleChange} className='w-full outline-none group-focus-within:border-blue-900' />
          <span></span>
        </div>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <input type="email" placeholder='email@gmail.com' name='email' value={formData.email} onChange={handleChange} className='w-full outline-none group-focus-within:border-blue-900' />
          <span></span>
        </div>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <input type="phone" placeholder='+234 584 5334 432' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className='w-full outline-none group-focus-within:border-blue-900' />
          <span></span>
        </div>
       

        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <select name="course" onChange={handleChange} value={formData.course} className="w-full outline-none">
            <option value="">--Student course--</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="full-stack">Full Stack</option>
          </select>

        </div>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <input type="file" name="image"/>
        </div>



        <button type='submit' className='w-full p-1.5 bg-blue-900 text-white hover:opacity-90 cursor-pointer transition-all rounded-md'>{isPending ? <div className='flex items-center justify-center gap-2'><Spinner /> Loading...</div> : "Create Account"}</button>
      </form>


      <div className='p-5'>
        <small className='text-gray-600'>I have an account? <button onClick={() => action(false)} className='text-blue-900 font-semibold'>Log in</button></small>
      </div>
    </div>
  )
}

export default AddStudent