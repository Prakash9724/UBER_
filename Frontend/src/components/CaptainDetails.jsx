import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
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
  )
}

export default CaptainDetails
