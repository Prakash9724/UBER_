import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainLogin = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const { captain, setCaptain } = React.useContext(CaptainDataContext)
  const navigate = useNavigate()


  
  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, captain)

    if (response.status === 200) {
      const data = response.data

      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')

    }

    setEmail('')
    setPassword('')
  }


  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <div className=" w-full p-8">
        <img
          className="w-16 mb-8"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value);
              
            }}
            placeholder="Email"
            className="w-full mb-6 p-2 bg-[#EEEEEE] text-sm rounded"
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
            }}
            className="w-full p-2 bg-[#EEEEEE] text-sm rounded mb-4"
          />
          <button className="bg-black text-white py-2 px-4 w-full rounded mt-4">
            Login
          </button>
        </form>

        <p className="text-sm mt-4 text-center font-medium">
          Join a fleet?{" "}
          <Link to={"/captain-singup"} className="text-blue-700">
            Register as a Captain
          </Link>{" "}
        </p>
      </div>

      <div className="w-full p-8 mb-6">
        <Link to={'/login'} className=" flex justify-center items-center bg-[#56A1E3] text-white py-2 px-4 w-full rounded">
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin
