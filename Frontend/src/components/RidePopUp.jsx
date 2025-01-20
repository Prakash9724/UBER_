import React from 'react'

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center absolute top-0 w-[93%] "
        onClick={() => {
          props.setRidePopPanel(false);
        }}
      >
        <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold">New Ride Available</h3>

        <div className='flex items-center justify-between bg-yellow-300 p-2 rounded-lg mt-4'>
            <div className='flex items-center gap-3 '>
                <img className='h-12 w-12 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFtl_Hwyux7iRCwvxukpwu7oNZGTubprxgkrqTvYNNgVJv9Lhp8GA7GZbXg9z5dpQBFXc&usqp=CAU" alt="" />
                <h2 className='text-lg font-medium'>Prakash Patel</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 km</h5>
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
    <div className='flex w-full items-center mt-5 justify-between'>
    <button
          onClick={() => {
            props.setRidePopPanel(false);
        }}
          className="bg-gray-300 px-10   text-gray-700 font-semibold p-3 rounded-lg"
        >
          Ignore
        </button>
    
    <button
          onClick={() => {
           props.setConfirmRidePopPanel(true)
          }}
          className="bg-green-500  px-10  text-white font-semibold p-3 rounded-lg"
        >
          Accept
        </button>

       
    </div>
      </div>
    </div>
  )
}

export default RidePopUp
