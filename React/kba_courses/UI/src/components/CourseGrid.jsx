import React from 'react'
import CoursesCard from './CoursesCard.jsx'
 const CourseGrid=({courses})=>{

  return (
         <>
         <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 mb-20 ">
             {courses.map((course)=>(
                    <CoursesCard key={courses.courseId} course={course}/>
            ) )}      
           </div>
</>
  )
}

export default CourseGrid