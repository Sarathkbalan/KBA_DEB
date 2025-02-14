import React from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import CourseGrid from './components/CourseGrid.jsx'
import courseData from './assets/data/courses.json'
import Addcourse from './pages/addcourse.jsx'
import Courses   from  './pages/courses.jsx'


const App = () => {
  return (
    <>
    <Nav/>
    <Home/>
    <CourseGrid courses={courseData}/>
    <Addcourse/>
    <Courses/>
    </>
  )
}

export default App