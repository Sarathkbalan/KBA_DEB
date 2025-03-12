import React from 'react'

const login = () => {
  return (
          <>
          <div class="flex justify-center ">

<div class=" h-96  w-80 bg-gray-300 mt-[180px] rounded-lg shadow-lg shadow-yellow-400	">
    <div class="text-2xl text-center pt-9">Login</div>
    <div class="pl-10  pt-5 " > Email:</div>
    
      <div class=" pl-10"> <input type="email" placeholder="*****@gmail" required class="h-8 ring-1 ring-yellow-400"/></div>
      <div class="pl-10  pt-5 " > Password:</div>
    
      <div class=" pl-10"> <input type="password" placeholder="**********" required  class="h-8 ring-1 ring-yellow-400"/></div>
      <button class="bg-lime-300 h-8  w-12 rounded-lg ml-60 mt-6">login</button>
       <p class="pl-10"> Forgot Password? </p>
       <div class="pl-10 mt-6">don't have an account? <a class="pl-4 text-l underline text-blue-900 " href="/tailwindsignup.html">signup</a></div>
    
    
    </div>
</div>

          </>
  )
}

export default login