import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const AdsBox = ({Adboxdata}) => {

    const {para1 , profileImage, linkImage , para2 , btnName}=Adboxdata ;

    const [top, settop]=useState(false);


    const topnav=()=>{
       if (window.scrollY >530) {
         settop(true);
       } else {
         settop(false);
       }
     }
 
 
 
 
     useEffect(() => {
       window.addEventListener("scroll", topnav);
       
     }, []);
    

  return (
    <>
        {/* ! third column ads reach 

 */}


 <section className={
  ` 
  ${top ? "fixed top-[11%] w-[18%]": "static"}`
 }>
 <Box className={`
 third-col space-y-3 text-center 
 `}>

<p>
{para1}
</p>

<div className="flex items-center  justify-center gap-3">
<div className="w-50 h-50">
              <img
                src={`${profileImage}`}
                alt="image"
                className="image-circle"
              />
            </div>

            <div className="w-50 h-50">
              <img
                src={`${linkImage}`}
                alt="image"
                className="w-14 h-14 rounded-md"
              />
            </div>
</div>

            <p> {para2} </p>

            <button className="discover-btn"> {btnName} </button>
 </Box>


 <Box className=" text-white  text-xs mt-2 p-5">
  <ul className="flex flex-wrap gap-3 items-center justify-center">
    <li>
    <Link className="link">About</Link>
    </li>
    <li><Link className="link">Accessibility</Link></li>
    <li><Link className="link">Helpt Center</Link> </li>
   <li><Link className="link">Privacy & Terms</Link></li>
   <li><Link className="link">Ad Choices</Link></li>
   <li><Link className="link">Advertising</Link></li>
   <li><Link className="link">Business Service</Link></li>
   <li><Link className="link">Get the Linkedin app</Link></li>
   <li><Link className="link">More</Link></li>
  </ul>

  <p className="flex items-start mt-4">w
  <b>Linked</b> <FaLinkedin className="icon"/> Linkedin Corporation @2024 </p>
</Box>
 </section>
    </>
  )
}
