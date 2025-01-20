import React from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const CaptainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed w-screen p-3 top-0 flex items-center justify-between">
        <img
          className="w-14 h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to={"/home"}
          className="  h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://preview.redd.it/nearby-drivers-overlay-just-dropped-in-my-market-but-v0-3l3w0gu80n4d1.jpg?width=1080&crop=smart&auto=webp&s=464060bc7486e5131fd337d8cfb2fb7551347f2a"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://www.total-motorsport.com/wp-content/uploads/2023/09/SI202309030158-scaled.jpg" alt="" />
            <h2>Prakash</h2>
          </div>
          <div >
            <h4 className="text-lg font-medium">₹200.20</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
        <div className="flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-4 items-start">
          <div className="text-center">
            <i className="text-3xl mb-3  font-extralight  ri-timer-line"></i>
            <h5 className="font-medium text-lg">10.2</h5>
            <p className="text-sm text-gray-600 ">Hours Online</p>
          </div>
          <div className="text-center">
            <i className="text-3xl mb-3  font-extralight  ri-speed-up-line"></i>
            <h5 className="font-medium text-lg">10.2</h5>
            <p className="text-sm text-gray-600 ">Hours Online</p>
          </div>

          <div className="text-center">
            <i class="text-3xl mb-3  font-extralight  ri-sticky-note-line"></i>
            <h5 className="font-medium text-lg">10.2</h5>
            <p className="text-sm text-gray-600 ">Hours Online</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
