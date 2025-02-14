import React, { useState } from 'react'

const Card = ({title,text,customClasses}) => {

  const [likes,setLikes]=useState(0);
  const [titlecolor,setTitlecolor]=useState("text-black");

  const toggleTitlecolor=()=>{
      setTitlecolor((prevcolor)=>
          prevcolor==='text-black'?'text-blue-500':'text-black'
      );
  }

          
  return (
    <div className={`max-w-sm rounded overflow-hidden shadow-lg p-6  ${customClasses}`}>

        <h2 className={`font-bold text-xl mb-2 ${titlecolor}`}>
            {title}
        </h2>
        <p className='text-gray-800 text-base'>
            {text}
        </p>
        <button className='mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-800 hover:bg-yellow-500'
          onClick={() =>setLikes (likes+1)}  >
            Likes:{likes}
          </button>

          <button className='mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-red-500 '
          onClick={toggleTitlecolor}  >Toggle Title color
         
          </button>
    </div>

)
}

export default Card