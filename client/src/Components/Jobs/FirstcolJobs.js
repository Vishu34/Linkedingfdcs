import React from 'react'
import { ProfileBox } from '../ReusableComponent/ProfileBox'
import { Box } from '@mui/material'
import { FaBookmark, FaRegEdit } from 'react-icons/fa'
import { MdGroups2 } from 'react-icons/md'
import { BsFillEvFrontFill } from 'react-icons/bs'
import { FaListUl } from "react-icons/fa";
import { MdAssignmentAdd } from "react-icons/md";


export const FirstcolJobs = () => {
  return (
   <>
     <section className="space-y-2">
    <ProfileBox/>

   

    <Box className="first-col1">
    <ul className='space-y-3 items-start'>
        <li className='flex items-center gap-4'>
        <FaListUl className='icon'/>
<p>Preferences</p>
        </li>
        <li className='flex items-center gap-4'>
            <FaBookmark className='icon'/>
            <p>My Jobs</p>
        </li>
        <li className='flex items-center gap-4'>
<MdAssignmentAdd className='icon'/>
<p>Interview Prep</p>

        </li>

    </ul>
</Box>

<button className="discover-btn flex items-center gap-3">
  <FaRegEdit className='icon'/> Post a Free Jobs
</button>
    </section>
   </>
  )
}
