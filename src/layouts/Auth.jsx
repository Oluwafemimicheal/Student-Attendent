import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Login from '../components/auth/Login'
import SignUp from '../components/auth/SignUp'

const Auth = () => {
  const [show, setShow] = useState(false)

  return (
    <div className='flex flex-col justify-center items-center h-screen space-y-3 bg-gray-100'>


      <div className='grow mt-30'>
        {
          !show ? <Login  action={setShow}/> : <SignUp action={setShow} />
        }
      </div>
      <div className='mb-2'>
        <small className='text-gray-600'>Built and Developed by Oluwafemi Michael &copy; {new Date().getFullYear()}</small>
      </div>
    </div >
  )
}

export default Auth
