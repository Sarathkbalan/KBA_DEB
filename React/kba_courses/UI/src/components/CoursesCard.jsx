import React,{useState} from 'react'
import Logo from "../assets/image/courses-removebg-preview.png"

const CoursesCard = ({course}) => {

  const [showFullDescription,setShowFullDescription]=useState(false)
  const description = showFullDescription ? course.description:course.description.substring(0,80)
  return (
          <div class="bg-red-400 h-[530px] w-[420px] mt-10 ml-10 rounded-lg shadow-xl shadow-red-300  ">
          <p class="font-bold text-center pt-10">{course.title}</p>
          <img class="ml-16 mt-10" src={Logo} alt=""/>
          <p>{description}</p>
          <button class="h-8 rounded-lg bg-red-800 hover:bg-blue-500 mt-2 ml-[150px] text-white " 
          onClick={()=>setShowFullDescription(!showFullDescription)}>{showFullDescription?'less':'more'}</button>
          <button class="h-8 rounded-lg bg-red-800 hover:bg-blue-500 mt-2 ml-[150px] text-white " >
          Learn More
          </button>


      </div>
  )
}

export default CoursesCard