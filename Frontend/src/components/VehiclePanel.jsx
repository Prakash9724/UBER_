import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle</h3>

      <div onClick={()=>{props.setConfirmRidePanel(true)}}   className="flex w-full items-center mb-2 justify-between p-3 border-2 active:border-black rounded-lg">
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

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex w-full items-center mb-2 justify-between p-3 border-2 active:border-black rounded-lg">
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
          <p className="font-normal text-xs">Affordable, compact bike rides</p>
        </div>
        <h2 className="font-semibold text-xl">₹65.33</h2>
      </div>

      <div onClick={()=>{props.setConfirmRidePanel(true)}} className="flex w-full items-center mb-2 justify-between p-3 border-2 active:border-black rounded-lg">
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
  );
};

export default VehiclePanel;
