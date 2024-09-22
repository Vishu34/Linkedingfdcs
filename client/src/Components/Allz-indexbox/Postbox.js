import { Box, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { BsEmojiSmile } from 'react-icons/bs'
import { FaPoll, FaTimes } from 'react-icons/fa'
import { FaBagShopping } from 'react-icons/fa6'
import { GrDocument, GrGallery, GrSchedule } from "react-icons/gr";
import { MdLightMode, MdOutlineEventNote, MdSchedule } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";
import { UseContextProvider } from '../ContextApi/Reuse'


export const Postbox = () => {

    const {OpenProfile, CloseProfile}=UseContextProvider();

  return (
   <>
   
   
   {
    OpenProfile ?
    (
        <>
        <section className="">
        <Box className="first-col1  w-[50%] fixed  top-[44.5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50  shadow-slate-800 shadow-md">

<div className="">
    <ul className="flex gap-3 justify-between">
        <li>
           

           
            <ul className="flex gap-3 items-start">
            <li> <img src="vishu.jpg" alt='image-circle' className="image-circle"/></li>
                <li>
                    <div className="flex gap-3 items-baseline">
                    <h1 className="head">Vishu Jsr</h1>
                    <AiFillCaretDown/>
                    </div>
                    <p>Post to Anyone</p>
                </li>
            </ul>
        </li>
      
        

    <li className="second-col-fatimes"
    onClick={()=>CloseProfile(false)}>
    
    <FaTimes className="icon"/></li>
    </ul>
</div>


<Box className="mt-4">
<textarea placeholder="What do you want to talk about" rows={10} className="w-[100%] h-68 first-col1 outline-none"/>

<button className="second-col-fatimes my-3">


    <BsEmojiSmile className='icon'/>
</button>


<ul className="flex gap-3 space-x-3 mt-4">
 
 <li className="discover-btn">
    Rewrite with Ai
 </li>
    <li>
    <Tooltip title="All Media" placement="top-start">
      <IconButton>
        <GrGallery className="icon"/>
      </IconButton>
    </Tooltip>
    </li>
    <li>
    <Tooltip title="Create Events" placement="top-start">
      <IconButton>
        <MdOutlineEventNote className="icon"/>
      </IconButton>
    </Tooltip>
    </li>
    <li>
    <Tooltip title="Celebrate an occasion" placement="top-start">
      <IconButton>
        <MdLightMode className="icon"/>
      </IconButton>
    </Tooltip>
    </li>
    <li>
    <Tooltip title="Share that you are hiring" placement="top-start">
      <IconButton>
        <FaBagShopping className="icon"/>
      </IconButton>
    </Tooltip>
    </li>

    <li>
    <Tooltip title="Create Poll" placement="top-start">
      <IconButton>
        <FaPoll className="icon"/>
      </IconButton>
    </Tooltip>
    </li>
    <li>
    <Tooltip title="Create document" placement="top-start">
      <IconButton>
        <GrDocument className="icon"/>
      </IconButton>
    </Tooltip>
    </li>
    <li>
    <Tooltip title="Find an Expert" placement="top-start">
      <IconButton>
        <IoDocumentTextSharp className="icon"/>
      </IconButton>
    </Tooltip>
    </li>
</ul>


</Box>

<hr className="horizontal-line my-3"/>

<Box>
    <ul className="flex items-center gap-3 justify-end">
        <li> <Tooltip title="Time For Schedule" placement="top-start">
      <IconButton>
        <MdSchedule className="icon"/>
      </IconButton>
    </Tooltip></li>
    <li>
    <button className="post-btn">Post</button>
    </li>
    </ul>
</Box>

        </Box>
    </section>
        </>
    ): null
   }


   </>
  )
}
