import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
 const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email:email,
      password:Password
    })
    console.log(captainData);
    
    setEmail("");
    setPassword("");    
  }


  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <div className=" w-full p-8">
        <img
          className="w-16 mb-8"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form action="" onSubmit={submitHandler}>
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
            value={Password}
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
