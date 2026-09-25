import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUser } from '../../hooks/useUser';
import Spinner from '../common/Spinner';

const Login = ({action}) => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate()

  const { mutate, isPending, } = useCreateUser();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        setFormData({
          username: "",
          password: ""
        });
        toast.success('Login Successfully!');
        navigate('/dashboard');
      },
      onError: (error) => {
        const message = error.response?.data?.message || 'Login failed. Please try again.';
        toast.error(message);
      }
    });
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden w-100'>
      <div className='bg-blue-900 p-5 flex items-center gap-5'>
        <div className='bg-white p-2 rounded-md'>
          <h1 className='text-blue-900 font-bold text-lg'>NH</h1>
        </div>
        <div>
          <h1 className='text-white text-2xl font-semibold'>Welcome Back, Instructor</h1>
          <p className='text-sm text-gray-300'>Student Attendant Protocol</p>
        </div>
      </div>


      <form onSubmit={handleSubmit} className='p-5 space-y-4'>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <input type="text" placeholder='username' name='username' value={formData.username} onChange={handleChange} className='w-full outline-none group-focus-within:border-blue-900' />
          <span></span>
        </div>
        <div className='mb-10'>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <input type="text" placeholder='password' name='password' value={formData.password} onChange={handleChange} className='w-full outline-none' />
          <span></span>
        </div>
        <Link to={''} className='text-sm float-right mt-1 text-blue-900 hover:text-red-600'>Forgot password</Link>
        </div>


        <button type='submit' className='flex justify-center items-center w-full p-1.5 bg-blue-900 text-white hover:opacity-90 cursor-pointer transition-all rounded-md'>{isPending ? <Spinner /> Loadin... : "Login"}</button>
      </form>
      <div className='p-5'>
        <small className='text-gray-600'>Don't have an account? <button onClick={()=> action(true)} className='text-blue-900 font-semibold'>Sign Up</button></small>
      </div>
    </div>
  )
}

export default Login
