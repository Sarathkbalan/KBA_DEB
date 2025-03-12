import React from 'react'


const Addcourse = () => {
  return (
    <>
 
   
    <div className="h-[540px] w-[500px] bg-gray-200 mt-[50px] ml-[450px] rounded-lg"> 
        
        <p className="text-2xl text-purple-800 font-medium text-center pt-6  ">Add Course </p>
       <p className="ml-10">course Name </p>
        <input className="h-8 w-[430px] ml-10 " type="text" placeholder="eg.Certified Blockchain Associate" required /> 
        <p className="ml-10">course id </p>
        <input className="h-8 w-[430px] ml-10 " type="text" placeholder="eg.1"/>
         <p className="ml-10  "> Course type</p>
        <select className="h-8  w-[430px] ml-10" name="" id="">
            <option  value="">self-paced</option>
        
        </select>
        
        <p className="ml-10 " >Discription</p>
        <input className="h-[120px] w-[430px] ml-10" type="text" placeholder="Small Discription of the course"/>
       <p className="ml-10 " >Price</p> 
       <select className="ml-10 h-8  w-[430px] " name="" id="">
        <option className="ml-10" value="">5000</option>
       </select>
      
       <button className="mt-5 mb-20 h-8 w-[430px] bg-purple-800 ml-10 text-white rounded-lg hover:bg-red-500">Add Course</button>

      </div>
  </>)
}

export default Addcourse