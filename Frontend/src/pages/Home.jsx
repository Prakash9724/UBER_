import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-[url("https://plus.unsplash.com/premium_vector-1732356540932-18564bf0783d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] h-screen pt-8 flex justify-between flex-col w-full bg-yellow-200'>
        <img className='w-16  ml-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <div className='bg-white pb-7 w-full px-4 py-4'>
            <h2 className='text-3xl font-bold '>Get Started With Uber</h2>
            <Link to={'/login'} className=' flex justify-center items-center bg-black text-xl/2 text-white rounded-md mt-5 p-2 w-full'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
