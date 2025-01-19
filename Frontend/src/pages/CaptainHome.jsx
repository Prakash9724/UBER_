import React from 'react'
import { Link } from 'react-router-dom'

const CaptainHome = () => {
  return (
    <div className="h-screen">
    

    <div className='fixed w-screen p-3 top-0 flex items-center justify-between'>
    <img className='w-14 h-6' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    <Link to={'/home'} className="  h-10 w-10 bg-white flex items-center justify-center rounded-full">
    <i className="text-lg font-medium ri-logout-circle-line"></i>
    </Link>
    </div>
  <div className="h-1/2">
    <img
      className="w-full h-full object-cover"
      src="https://preview.redd.it/nearby-drivers-overlay-just-dropped-in-my-market-but-v0-3l3w0gu80n4d1.jpg?width=1080&crop=smart&auto=webp&s=464060bc7486e5131fd337d8cfb2fb7551347f2a"
      alt=""
    />
  </div>
  <div className="h-1/2 p-4">
    <div>
      <div>
        <img src="" alt="" />
        <h2>Prakash</h2>
      </div>
      <div>
        <h4>200.20</h4>
      </div>
    </div>
  </div>
</div>
  )
}

export default CaptainHome