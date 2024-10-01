import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
            <img src="/assets/logo.svg" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5">
                <a href="#" className="hover:text-[#7270dd]">Courses</a>
                <a href="#" className="hover:text-[#7270dd]">About Us</a>
                <a href="#" className="hover:text-[#7270dd]">Teacher</a>
                <a href="#" className="hover:text-[#7270dd]">Pricing</a>
                <a href="#" className="hover:text-[#7270dd]">Careers</a>
                <a href="#" className="hover:text-[#7270dd]">Blog</a>
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Navbar