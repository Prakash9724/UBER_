import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";


const CaptainSingup = () => {

  const navigate = useNavigate();

  const [fisrtname, setFisrtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const {captain ,setCaptain} = useContext(CaptainDataContext)

  const submitHandler =async (e) => {
    e.preventDefault();
    const captainData = {
      fullname:{
        firstname:fisrtname,
        lastname:lastName
      },
      email:email,
      password:password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      }
    } 
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`,captainData);
    console.log(response);
    if(response.status === 201){
      const data = response.data
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate('/captain-home');
    }

    setLastName("");
    setFisrtName("");
    setemail("");
    setPassword("");
  };

  return (
    <div className="flex justify-between items-center h-screen flex-col">
      <div className=" w-full p-8">
        <img
          className="w-16 mb-4"
         src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
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

          <section className="mb-6 p-4 bg-white shadow-md rounded-md">
            <h3 className="text-xl font-semibold mb-4 text-center">Vehicle Details</h3>
            <div className="mb-4">
              <label className="block text-md font-medium mb-1" htmlFor="vehicleColor">Vehicle Color</label>
              <input
                id="vehicleColor"
                type="text"
                required
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
                placeholder="Enter Vehicle Color"
                className="w-full p-3 bg-gray-100 text-md rounded-md placeholder:text-sm border border-gray-300"
              />
            </div>
            <div className="flex w-full gap-4 mb-4">
              <div className="w-1/2">
                <label className="block text-md font-medium mb-1" htmlFor="vehiclePlate">Vehicle Number</label>
                <input
                  id="vehiclePlate"
                  type="text"
                  required
                  value={vehiclePlate}
                  onChange={(e) => {
                    setVehiclePlate(e.target.value);
                  }}
                  placeholder="Enter Vehicle Number"
                  className="w-full p-3 bg-gray-100 text-md rounded-md placeholder:text-sm border border-gray-300"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-md font-medium mb-1 " htmlFor="vehicleType">Vehicle Type</label>
                <select
                  id="vehicleType"
                  value={vehicleType}
                  onChange={(e) => {
                    setVehicleType(e.target.value);
                  }}
                  required
                  className="w-full p-3 bg-gray-100 text-sm rounded-md border border-gray-300"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="car">Car</option>
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-md font-medium mb-1" htmlFor="vehicleCapacity">Vehicle Capacity</label>
              <input
                id="vehicleCapacity"
                type="number"
                required
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
                placeholder="Enter Vehicle Capacity"
                className="w-full p-3 bg-gray-100 text-md rounded-md placeholder:text-sm border border-gray-300"
              />
            </div>
          </section>

          <button className="bg-black text-white py-2 px-4 w-full rounded mt-4">
            Create Captain Account
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
