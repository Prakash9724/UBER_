import React from "react";
import { useState ,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {UserDataContext} from "../context/UserContext";

const UserSingUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  
  const navigate = useNavigate();


  const {user, setUser} = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    console.log(response);
    
    if(response.status === 201){
      const data = response.data
      setUser(data.user);
      localStorage.setItem("token",data.token);
      navigate('/home');
    }

    setLastName("");
    setFirstName("");
    setemail("");
    setPassword("");
  };

  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <div className=" w-full p-8">
        <img
          className="w-16 mb-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex w-full gap-4 mb-7">
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
              className="w-1/2  p-2 bg-[#EEEEEE] text-lg rounded placeholder:text-base"
            />

            <input
              type="text"
              placeholder="Last name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="w-1/2 p-2 bg-[#EEEEEE] rounded text-lg placeholder:text-base"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your Email</h3>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Email"
            className="w-full mb-6 p-2 bg-[#EEEEEE] text-lg placeholder:text-base rounded"
          />
          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            required
            className="w-full p-2 bg-[#EEEEEE] text-lg placeholder:text-base rounded mb-4"
          />
          <button className="bg-black text-white py-2 px-4 w-full rounded mt-4">
           Create Account 
          </button>
        </form>

        <p className="text-sm mt-4 text-center font-medium">
          Already have an account{" "}
          <Link to={"/login"} className="text-blue-700">
            Login here
          </Link>{" "}
        </p>
      </div>

      <div className="w-full p-8 mb-6">
        <p className="text-[12px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline font-semibold">
            {" "}
            Google Privacy Policy
          </span>{" "}
          and{" "}
          <span className="underline font-semibold">
            Terms of Service apply.
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserSingUp;
