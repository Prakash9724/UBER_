import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5
      className="p-1 text-center absolute top-0 w-[93%] "
      onClick={() => {
        props.waitingForDriver(false);
      }}
    >
      <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
    </h5>
    <div className='flex items-center justify-between px-4'>
    <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367310/assets/30/51e602-10bb-4e65-b122-e394d80a9c47/original/Final_UberX.png"
          alt=""
        />
        <div>
          <h2 className='text-lg font-medium'>Prakash</h2>
          <h4 className='text-xl font-semibold'>GJ 19 AG 2211</h4>
          <p className='test-sm text-gray-600'>Tata Harier</p>
        </div>
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
      <button
        onClick={() => {
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false);
        }}
        className="bg-green-400 mt-5 text-white font-semibold p-2 rounded-lg w-full"
      >
        Confirm
      </button>
    </div>
  </div>
  )
}

export default WaitingForDriver