import { Box } from '@mui/material'
import React from 'react'

export const Mebox = () => {
  return (
   <>

<section>

    <Box className="first-col   ">

{/* image and description of user */}
<div className="first-col1 flex flex-col space-y-2 ">


<div className="flex gap-3 items-start">
<img src="vishu.jpg" alt='image' className='image-circle'/>

<div className="">
    <h1 className='head'> Vishu Jsr</h1>
    <p className="text-sm">Mern stack Developer and constantly 
    upskilling on new technology and trends</p>
</div>

</div>


<button className="discover-btn"> view Profile</button>

</div>


<hr className="horizontal-line"/>

<div className="first-col1">
<ul className="space-y-">
<li><h1 className="head">Account</h1></li>
<li>Try 1 month of Premium for ₹0</li>
<li>Settings & Privacy</li>
<li>Help</li>
<li>Language</li>
</ul>
</div>

<hr className="horizontal-line"/>
<div className="first-col1">
<ul className="space-y-">
<li><h1 className="head">Manage</h1></li>
<li>Posts & Activity</li>
<li>Job Posting Account</li>
</ul>
</div>

<hr className="horizontal-line"/>

<div className="first-col1">
<ul className="space-y-">
    <li>SignOut</li>
</ul>
</div>

    </Box>
</section>

   </>
  )
}
