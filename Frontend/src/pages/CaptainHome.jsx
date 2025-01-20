import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmedRide from "../components/ConfirmedRide";
import ConfirmedRidePopUp from "../components/ConfirmedRidePopUp";

const CaptainHome = () => {

  const [ridePopPanel, setRidePopPanel] = useState(true)
  const [ConfirmRidePopPanel, setConfirmRidePopPanel] = useState(false)
  
  const ridePopPanelRef = useRef(null); 
  const ConfirmRidePopPanelRef = useRef(null); 


      
  useGSAP(
    function () {
      if (ridePopPanel) {
        gsap.to(ridePopPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ridePopPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ridePopPanel]
  );

  useGSAP(
    function () {
      if (ConfirmRidePopPanel) {
        gsap.to(ConfirmRidePopPanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(ConfirmRidePopPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [ConfirmRidePopPanel]
  );

  
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
        <CaptainDetails />
      </div>

      <div ref={ridePopPanelRef}
        className="fixed w-full z-10 bottom-0 bg-white translate-y-full px-3 py-6 pt-12"
      > <RidePopUp setRidePopPanel={setRidePopPanel} setConfirmRidePopPanel={setConfirmRidePopPanel}/>
      </div>

      <div ref={ConfirmRidePopPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 bg-white translate-y-full px-3 py-6 pt-12"
      > <ConfirmedRidePopUp  setConfirmRidePopPanel={setConfirmRidePopPanel} setRidePopPanel={setRidePopPanel}/>
      </div>


    </div>
  );
};

export default CaptainHome;
