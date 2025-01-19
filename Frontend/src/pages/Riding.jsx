import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to={'/home'} className="fixed right-2 top-2  h-10 w-10 bg-white flex items-center justify-center rounded-full">
        <i className=" text-lg font-medium ri-home-4-line"></i>
        </Link>
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://preview.redd.it/nearby-drivers-overlay-just-dropped-in-my-market-but-v0-3l3w0gu80n4d1.jpg?width=1080&crop=smart&auto=webp&s=464060bc7486e5131fd337d8cfb2fb7551347f2a"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between px-4">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
            alt=""
          />
          <div>
            <h2 className="text-lg font-medium">Prakash</h2>
            <h4 className="text-xl font-semibold">GJ 19 AG 2211</h4>
            <p className="test-sm text-gray-600">Tata Harier</p>
          </div>
        </div>

        <div className="flex gap-4 flex-col justify-between items-center">
          <div className="w-full mt-5">
            
            <div className="flex items-center gap-5 p-2 border-b-2">
              <i className="ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  Kankariya Talab , Ahemadab
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-2 ">
              <i className="ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">120.25</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-green-400 mt-5 text-white font-semibold p-2 rounded-lg w-full">Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
