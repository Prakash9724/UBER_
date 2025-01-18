import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState(null);
  const [ride, setRide] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          src="https://preview.redd.it/nearby-drivers-overlay-just-dropped-in-my-market-but-v0-3l3w0gu80n4d1.jpg?width=1080&crop=smart&auto=webp&s=464060bc7486e5131fd337d8cfb2fb7551347f2a"
          alt=""
        />
        {/* <LiveTracking /> */}
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] px-5 py-3 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-6 top-4 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            className="relative py-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-12 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("pickup");
              }}
              value={pickup}
              // onChange={handlePickupChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
                setActiveField("destination");
              }}
              value={destination}
              // onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full  mt-2"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
          <button
            // onClick={findTrip}
            className="bg-black mb-2 text-white px-4 py-2 rounded-lg w-full"
          >
            Find Trip
          </button>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full"
      >
        <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

        <div className="flex w-full items-center mb-2 justify-between p-3 border-2 active:border-black rounded-lg">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
            alt=""
          />
          <div className="w-1/2 ">
            <h4 className="font-medium text-base">
              Uber Go{" "}
              <span>
                <i class="ri-user-4-line"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-normal text-xs">Affordable , compact rides</p>
          </div>
          <h2 className="font-semibold text-xl">₹299.33</h2>
        </div>

        <div className="flex w-full items-center mb-2 justify-between p-3 border-2 active:border-black rounded-lg">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className="w-1/2 ">
            <h4 className="font-medium text-base">
              Uber Moto{" "}
              <span>
                <i class="ri-user-4-line"></i>2
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 min away</h5>
            <p className="font-normal text-xs">
              Affordable, compact bike rides
            </p>
          </div>
          <h2 className="font-semibold text-xl">₹65.33</h2>
        </div>

        <div className="flex w-full items-center mb-2 justify-between p-3 border-2 active:border-black rounded-lg">
          <img
            className="h-10"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
            alt=""
          />
          <div className="w-1/2 ">
            <h4 className="font-medium text-base">
              Uber Go{" "}
              <span>
                <i class="ri-user-4-line"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">5 min away</h5>
            <p className="font-normal text-xs">Affordable Auto rides</p>
          </div>
          <h2 className="font-semibold text-xl">₹118.33</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
