import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {
  return (
    <div className='h-screen'>
    <h5
      className="p-1 text-center absolute top-0 w-[93%] "
      onClick={() => {
        props.setFinishRidePanel(false);
      }}
    >
      <i className="text-3xl text-gray-400 ri-arrow-down-wide-line"></i>
    </h5>
    <h3 className="text-2xl font-semibold">Finish This Ride </h3>

      <div className='flex items-center justify-between border-2  border-yellow-300 p-3 rounded-lg mt-4'>
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


      <div className='mt-6 w-full'>
      <Link to={'/captain-home'}
        className="flex text-lg justify-center  bg-green-600 mt-5 mb-2 text-white font-semibold p-3 rounded-lg w-full"
      >
        Complete This Ride
      </Link>

      <p className=' text-xs p-3 mt-10'>click on the finish ride button if you completed the payment.</p>
      </div>
    </div>
  </div>
  )
}

export default FinishRide
