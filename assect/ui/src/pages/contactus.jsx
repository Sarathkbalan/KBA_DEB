import React from 'react'
import LOGO from "../assets/image/gmail.png"
import Location from "../assets/image/location.png"
import Call    from "../assets/image/call.png"
const contactus = () => {
  return (
    <>
   
    <p class="text-center mt-20 text-purple-500 mr-10">Contact us</p>
    <p class="text-center text-2xl font-medium mt-2 mr-10">Get in touch</p>
    <p class="text-center mt-2 text-l text-gray-500 mr-10 ">Our friendly team is always here to chat. </p>
 
   <div class="grid grid-cols-3 gap-12" >
    <div>
        <img class="mt-[100px] ml-[165px] size-24" src={LOGO} alt=""/>
        <p class="ml-[180px] mt-2 text-2xl font-medium ">Email</p>
        <p class="ml-[80px] mt-2 text-l text-gray-500">Our friendly team is hear to help </p>
        <p class="ml-[135px] mt-2 text-purple-500 ">hello@merakiui.com</p>
    </div>
    <div>
        <img class="mt-[100px] ml-[160px] size-24" src={Location} alt=""/>
        <p class="ml-[180px] mt-2 text-2xl font-medium ">Office</p>
        <p class="ml-[95px] mt-2 text-l text-gray-500">Come say hello at our Office HQ </p>
        <p class="ml-[50px] mt-2 text-purple-500 ">100 Smith Street Collingwood VIC 3066 AU </p>
    </div> 
    <div>
        <img class="mt-[100px] ml-[165px] size-24" src={Call} alt=""/>
        <p class="ml-[180px] mt-2 text-2xl font-medium ">Phone </p>
        <p class="ml-[120px] mt-2 text-l text-gray-500">Mon-Fri from 8am to 5pm </p>
        <p class="ml-[155px] mt-2 text-purple-500 ">+(555)000-0000</p>
    </div>
    </div>

    </>
  )
}

export default contactus