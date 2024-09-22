import { Box } from '@mui/material'
import React from 'react'
import { FaBookmark } from "react-icons/fa";
import { MdGroups2 } from "react-icons/md";
import { BsFillCalendarEventFill, BsFillEvFrontFill } from "react-icons/bs";
import { ProfileBox } from '../ReusableComponent/ProfileBox';





export const FirstCol = () => {

   
  return (
   <>

<Box className="space-y-2 relative">
    {/* ? profile view and banner box */}

<ProfileBox/>


{/* strenght your profile */}

<Box className="first-col1 space-y-3">

<p>
Strengthen your profile with an AI writing assistant
</p>
<p>
Grow your network and real estate business
</p>

<p>Try Premium for ₹0</p>
</Box>


{/* ! profile view and post impresstion */}


<Box className="first-col1">

<ul className='space-y-3'>
    <li className='flex justify-between '>
       <p>Profile View</p>
       <p>34</p>
    </li>
    <li className='flex justify-between '>
       <p>Profile View</p>
       <p>34</p>
    </li>
</ul>
</Box>


{/* saved items  */}

{/* saved items  */}

<Box className="first-col1">
    <ul className='space-y-3 items-start'>
        <li className='flex items-center gap-4'>
        <FaBookmark className='icon'/>
<p>Saved</p>
        </li>
        <li className='flex items-center gap-4'>
            <MdGroups2 className='icon'/>
            <p>Groups</p>
        </li>
        <li className='flex items-center gap-4'>
<BsFillEvFrontFill className='icon'/>
<p>Events</p>

        </li>

    </ul>
</Box>



</Box>

   </>
  )
}
