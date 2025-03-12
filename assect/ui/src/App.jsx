import React from 'react'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import CourseGrid from './components/CourseGrid.jsx'
import courseData from './assets/data/courses.json'
import Contactus from './pages/contactus.jsx'
import Learnmore from './pages/learnmore.jsx'
import Addcourse from './pages/addcourse.jsx'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx'



const App = () => {
  return (
    <>
    <Nav/>
    <Home/>
    <CourseGrid courses={courseData}/>
    <Learnmore/>
    <Contactus/>
    <Addcourse/>
    <Login/>
    <Signup/>
   
    </>
  )
}

export default App
