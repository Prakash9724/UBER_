import React from "react";
import { Link } from "react-router-dom";

const ConfirmedRidePopUp = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [otp, setOtp] = useState("");

  return (
    <div className="h-screen">
      <h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => {
          props.setRidePopPanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold">Confirm This Ride to Start</h3>

      <div className="flex items-center justify-between bg-yellow-300 p-2 rounded-lg mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtl_Hwyux7iRCwvxukpwu7oNZGTubprxgkrqTvYNNgVJv9Lhp8GA7GZbXg9z5dpQBFXc&usqp=CAU"
            alt=""
          />
          <h2 className="text-lg font-medium">Prakash Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 km</h5>
      </div>

      <div className="flex gap-4 flex-col justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Ahemadab
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Ahemadab
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-2 border-b-2">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">120.25</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form
            action=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
            value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="bg-[#eee] font-mono px-6 py-4 text-base rounded-lg w-full"
              placeholder="Enter OTP"
            />

            <Link
              to={"/captain-riding"}
              className="flex justify-center  bg-green-600 mt-5 mb-2 text-white font-semibold p-3 rounded-lg w-full"
            >
              Confirm
            </Link>

            <button
              onClick={() => {
                props.setRidePopPanel(false);
                props.setConfirmRidePopPanel(false);
              }}
              className="bg-red-500  text-white font-semibold p-3 rounded-lg w-full"
            >
              Cancle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmedRidePopUp;
