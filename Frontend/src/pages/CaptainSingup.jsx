import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSingup = () => {
  const [fisrtname, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: {
        fisrtname: fisrtname,
        lastname: lastName,
      },
      email: email,
      password: password,
    });

    setLastName("");
    setFisrtName("");
    setemail("");
    setPassword("");
  };

  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <div className=" w-full p-8">
        <img
          className="w-16 mb-8"
         src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form action="" onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your Name Captain</h3>
          <div className="flex w-full gap-4 mb-7">
            <input
              type="text"
              required
              value={fisrtname}
              onChange={(e) => {
                setFisrtName(e.target.value);
              }}
              placeholder="First name"
              className="w-1/2  p-2 bg-[#EEEEEE] text-lg rounded placeholder:text-base"
            />

            <input
              type="text"
              placeholder="Last name"
              required
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              className="w-1/2 p-2 bg-[#EEEEEE] rounded text-lg placeholder:text-base"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your Email Captain</h3>
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
            Login
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
          and <span className="underline font-semibold">Terms of Service apply.</span>
        </p>
      </div>
    </div>
  );
};

export default CaptainSingup;
