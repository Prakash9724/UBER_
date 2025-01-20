import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";


const CaptainRiding = () => {
  return (
    <div className="h-screen relative">
      
      <div className="fixed w-screen p-3 top-0 flex items-center justify-between">
        <img
          className="w-14 h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/captain-home"}
          className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://preview.redd.it/nearby-drivers-overlay-just-dropped-in-my-market-but-v0-3l3w0gu80n4d1.jpg?width=1080&crop=smart&auto=webp&s=464060bc7486e5131fd337d8cfb2fb7551347f2a"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 bg-yellow-400 relative flex justify-between items-center">
        <h5 className="p-1 text-center w-[90%] absolute top-0" onClick={()=>{

        }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i></h5>
        <h4 className="text-xl font-semibold">4 km away</h4>
        <button className="bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>

        

    </div>
  );
};

export default CaptainRiding;
