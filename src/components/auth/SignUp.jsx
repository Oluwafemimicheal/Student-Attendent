import { useState } from "react";
import toast from "react-hot-toast";
import { useSignUp } from "../../hooks/useAuth";
import Spinner from "../common/Spinner";

const SignUp = ({ action }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    center: ""
  })

  const { mutate, isPending } = useSignUp();

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
          password: "",
          center: ""
        });

        toast.success('Account created Successfully!');
        action(false);
      },
      onError: (error) => {
        const message = error.response?.data?.message || 'Registration failed. Try again.';
        toast.error(message);
      }
    });
  };

  return (
    <div className='bg-white rounded-lg shadow-lg overflow-hidden lg:w-100'>
      <div className='bg-blue-900 p-5 flex items-center gap-5'>
        <div className='bg-white p-2 rounded-md'>
          <h1 className='text-blue-900 font-bold text-lg'>NH</h1>
        </div>
        <div>
          <h1 className='text-white text-2xl font-semibold'>Create an account</h1>
          <p className='text-sm text-gray-300'>Student Attendant Protocol</p>
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
          <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleChange} className='w-full outline-none group-focus-within:border-blue-900' />
          <span></span>
        </div>
        <div className='border-2 border-gray-400 p-2 rounded-md focus-within:border-blue-900 focus-within:shadow'>
          <select name="center" onChange={handleChange} value={formData.center} className="w-full outline-none">
            <option value="">--Select your center--</option>
            <option value="lekki">Lekki</option>
            <option value="ikeja">Head Office </option>
            <option value="surelere">Surelere</option>
            <option value="egbeda">Egbeda</option>
          </select>

        </div>


        <button type='submit' className='w-full p-1.5 bg-blue-900 text-white hover:opacity-90 cursor-pointer transition-all rounded-md'>{isPending ? <div className='flex items-center justify-center gap-2'><Spinner /> Loading...</div> : "Create Account"}</button>
      </form>


      <div className='p-5'>
        <small className='text-gray-600'>I have an account? <button onClick={() => action(false)} className='text-blue-900 font-semibold'>Log in</button></small>
      </div>
    </div>
  )
}

export default SignUp
