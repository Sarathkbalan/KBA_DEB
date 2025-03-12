import React from 'react'
import Logo from "../assets/image/blkcourses.jpeg"

const learnmore = () => {
  return (
    <>
     <p class="mt-10 ml-[400px]">Back to Courses</p>
   <div class=" mt-2 ml-[400px] h-[650px] w-[650px] bg-gray-200 rounded-lg">
    
    <img class="h-[200px] w-[300px]" src={Logo} alt=""/>
    <div class="flex justify-center mt-5">
    <p class="text-purple-800 font-bold mt- ml-5 text-2xl">s122</p>
    <p class="text-red-500 font-medium ml-[350px]  text-xl">Rs.15000</p>
    <button class="ml-4 bg-purple-800 rounded-lg hover:bg-rose-300 text-white"><a href="addtocart.html">Add to cart</a></button>
 </div>
    <p class="text-purple-800 font-bold mt-5 ml-5 text-xl ">Discription </p>
    <p class="mt-2 ml-5 ">11q</p>
    <p class="text-purple-800 font-bold mt-2 ml-5 text-xl ">Prerequisites</p>
    <ul class="list-disc list-inside  mt-2 ml-5 ">
        <li>Basic Understanding of Blockchain Technology</li>
        <li>Familiarity with programming languages</li>
        <li>Internet access</li>
      </ul>
      <p class="text-purple-800 font-bold mt-2 ml-5 text-xl ">Features</p>
      <ul class="list-disc list-inside mt-2 ml-5 mb-12 ">
        <li>40 hours of contact</li>
        <li>Certificate of completion</li>
        <li>Access to community forums</li>
        <li>Downloadable resources</li>
        <li>24/7 support</li>

      </ul>
   

   </div>
   <div class=" flex justify-end mr-20 mb-12">
    <button class="h-8 bg-blue-500 text-white rounded-xl text-l hover:bg-rose-300"><a href="updatecourse.html">Edit Course</a></button>
    <button class="ml-2 h-8 bg-red-500 text-white rounded-xl text-l hover:bg-rose-300">Remove Course</button>
  </div>
    </>
  )
}

export default learnmore