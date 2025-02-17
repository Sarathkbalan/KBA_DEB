import React,{useState,useEffect} from 'react'
import CourseCard from "./CoursesCard"

const CourseGrid = ({isHome = false}) => {
 
  const [courses,setCourses] = useState([])
  const [loading,setLoading] = useState (true)
  const courseList = isHome ? courses.slice(0,3) : courses;

  useEffect(() =>{
      const fetchCourses = async () => {
        try{
          const res = await fetch ("http://localhost:5000/courses");
          const data = await res.json();
          setCourses(data);
        }catch(error){
          console.log(error);
          
        }finally{
            setLoading(false)
        }
      }
      fetchCourses();
  },[])
  return (
    <>
    <h1 className='flex flex-col items-center font-bold text-2xl '>
    {isHome ? "Top Courses" : "All Courses"}
    </h1>

    {loading ? (
      <h1>Loading...</h1>
    ):

    <div className="grid grid-cols-3 gap-5  mt-16">
    
    { courseList.map((course) => (
      <CourseCard key={courseList.CourseID} course={course} />
    ))

    }
    </div>
  }
    </>
  )
}

export default CourseGrid