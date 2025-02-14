import React from 'react'

const Demo = () => {
  const name="sarath";
  const x=10;
  const y=20;
  const names=["vignesh","jishnu","adherv"]
  const passed=false;
  return (
    <>
<div className='text-2xl text-red-500 text-bold-2xl'>App</div>  
  <p>Hello{}</p>
    <p>The {x}<h1>you have passed</h1> and {y} sum to {x+y}</p>
    <ul>

      {names.map((name,index)=>(
        <li key={index}>{name}</li>

      ))}
    </ul>
    {passed?<h1>you have passed</h1>:<h1>you have failed</h1>}

    </>
  )
}

export default Demo