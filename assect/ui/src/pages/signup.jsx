import React from 'react'

const signup = () => {
  return (
    <>
    <div class="flex justify-center">
  
  <div class="h-[500px] w-[400px] bg-gray-300  mt-[80px] rounded-lg shadow-lg shadow-green-400 " > 
      <div class="text-3xl text-center pt-9 text-green-900">SIGN UP</div>
      
     <p class=" pl-10 pt-5">Name:</p>
      <div class=" pl-10 "> <input type="Name" class="h-8 w-[320px] ring-1 ring-green-400 "/></div>
      <div class="pl-10  pt-5 " > Email:</div>
      
      <div class=" pl-10"> <input type="email" placeholder="*****@gmail" required class="h-8 w-[320px] ring-1 ring-green-400"/></div>
      <div class="pl-10  pt-5 " > Password:</div>
    
      <div class=" pl-10"> <input type="password" placeholder="**********" required class="h-8 w-[320px] ring-1 ring-green-400"/></div>
      <button class="bg-green-300 h-8  w-12 rounded-lg ml-[300px] mt-10">signup</button>
       <p class="pl-10"> Forgot Password? </p>
       <div class="pl-10 mt-6">you already have an account? <a class="pl-4 text-l underline text-blue-500 " href="/tailwindlogin.html">Login</a></div>
    
    
      
  </div>
  </div>

    </>
  )
}

export default signup