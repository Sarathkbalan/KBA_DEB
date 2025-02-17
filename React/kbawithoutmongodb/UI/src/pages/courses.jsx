import React from 'react'
import Nav from '../components/Nav'

const Courses = () => {
  return (
    <>
    <Nav/>

    
   <p class="mt-10 ml-10 text-purple-800 font-medium text-2xl ">All Courses</p>
   <div class="bg-gray-200 h-[290px] w-[370px] mt-5 ml-5 shadow-lg shadow-gray-400">
    <p class="text-center pt-6 font-medium text-2xl text-purple-900">s122</p>
    <img class="ml-20" src="courses-removebg-preview.png" alt=""/>
    <p class="text-center text-purple-800">11q...</p>
    <p class="ml-6 text-purple-800" >More</p>
    <button   class="h-8 w-[100px] bg-purple-800 ml-6 mt-2 rounded-lg hover:bg-red-500 text-white"> <a href="learnmore.html">LearnMore</a></button>

   </div>
    
    </>
  )
}

export default Courses