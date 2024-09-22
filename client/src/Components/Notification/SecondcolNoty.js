import { Box } from '@mui/material'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

export const SecondcolNoty = () => {
  return (
   <>
   <section>

   <Box className="first-col">
    <ul className="flex gap-3 items-start p-2">
          <li className="catchup-list">All</li>
          <li className="catchup-list">My Posts</li>
          <li className="catchup-list">Mentions</li>
          
        </ul>
    </Box>

    


    <Box className="first-col1 mt-4">

<ul className="flex gap-3 items-start justify-between">
    <li>
    <ul className="flex gap-3">
        <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
        <li>
kjhbv sdfsa fasf sfas klsfas
    </li>
    </ul>
    </li>
    
    <li>
    <ul className="flex flex-col  items-center ">
    <li className="second-col-fatimes">5hr </li>
    <li className="second-col-3dot"><BsThreeDots className="icon"/> </li>
    
</ul>
    </li>
</ul>
    </Box>
   </section>
   </>
  )
}
