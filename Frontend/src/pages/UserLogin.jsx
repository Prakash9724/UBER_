import React, { useState } from "react";
import { Link, Links, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useContext } from "react";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [userData, setUserData] = useState({})

  const navigate = useNavigate();
const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
   const userData = {
      email:email,
      password:Password}

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)

      if(response.status === 200){
        const data = response.data
        setUser(data.user);
        localStorage.setItem("token", data.token);
        navigate('/home');
      }
    setEmail("");
    setPassword("");    
  }

  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <div className=" w-full p-8">
        <img
          className="w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
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
          New Here?{" "}
          <Link to={"/singup"} className="text-blue-700">
            Create a new account
          </Link>{" "}
        </p>
      </div>

      <div className="w-full p-8 mb-6">
        <Link to={'/captain-login'} className=" flex justify-center items-center bg-[#3F8750] text-white py-2 px-4 w-full rounded">
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
