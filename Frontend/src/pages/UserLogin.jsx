import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  return (
    <div className='flex justify-between items-center h-screen flex-col'>
      <div className=' w-full p-8'>
      <img className='w-16 mb-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
       <form action="">
        <h3 className='text-lg font-medium mb-2'>What's your Email</h3>
        <input type="text" placeholder='Email'  className='w-full mb-6 p-2 bg-[#EEEEEE] text-sm rounded'/>
        <h3 className='text-lg font-medium mb-2'>Password</h3>
        <input type="password" placeholder='Password' className='w-full p-2 bg-[#EEEEEE] text-sm rounded mb-4' />
        <button className='bg-black text-white py-2 px-4 w-full rounded mt-4'>Login</button>
      </form>

      <p className='text-sm mt-4 text-center font-medium'>New Here? <Link to={'/singup'} className='text-blue-700' >Create a new account</Link> </p>
      </div>

      <div className='w-full p-8 mb-8' >
      <button className='bg-[#3F8750] text-white py-2 px-4 w-full rounded'>Sign in as Captain</button>
      </div>

    </div>
  )
}

export default UserLogin
