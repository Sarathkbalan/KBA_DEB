import React from 'react'
import Logo from "../assets/image/kbalogo-removebg-preview.png"

const Nav = () => {

  return (
    
          <div className=" flex justify-center h-[100px]  bg-gray-300 shadow-lg shadow-gray-400    ">
          <img class="size-10 mr-[800px] mt-8   " src={Logo} alt="" />

          <div className=" text-purple-800  mt-10 text-xl font-medium  ">
          <a className="pl-4 hover:bg-red-500"  href="homepagekba.html">Home</a>
          <a className="pl-4 hover:bg-red-500"  href="courseskba.html">Courses</a>
          <a className="pl-4 hover:bg-red-500"  href="contactus.html">contact us </a>
          <a className="pl-4 hover:bg-red-500"  href="addcourse.html">Add courses</a>
          <a className="pl-4 hover:bg-red-500"  href="loginkba.html">Logout</a>
          </div>
         </div>
  )
}

export default Nav