import { Box } from "@mui/material";
import React from "react";
import { MdPermMedia } from "react-icons/md";
import { FaBookAtlas } from "react-icons/fa6";
import { RiArticleFill } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaTimes } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { RiSendPlaneFill } from "react-icons/ri";

import { BsThreeDots } from "react-icons/bs";
import { UseContextProvider } from "../ContextApi/Reuse";



export const SecondCol = () => {

  const { CloseProfile}=UseContextProvider();

  return (
    <>
      <Box className="space-y-2">
        {/* // second col profile and post box */}

        <Box className="second-col">
          <div className="flex  items-center space-x-3 w-[100%]">
            <div className="">
            <img src="vishu.jpg" alt="image-circle" className="image-circle" />
            </div>

            <p className=" second-col-post  border border-slate-500  p-4  text-sm rounded-full w-[90%]"
            onClick={()=>CloseProfile(true)}>
              
              Start a post , try writing with Ai
            </p>
          </div>

          <ul className="flex items-center gap-3 justify-between mt-3">
            <li className="flex items-center space-x-3 second-top-icon">
              <MdPermMedia className="media text-lg" />
              <p>Media</p>
            </li>
            <li className="flex items-center space-x-3 second-top-icon">
              <FaBookAtlas className="contribute text-lg" />
              <p>Contribute expertise</p>
            </li>
            <li className="flex items-center space-x-3 second-top-icon">
              <RiArticleFill className="article text-lg" />
              <p>Write article</p>
            </li>
          </ul>
        </Box>

        {/*  all post data over here  */}

        <Box className="second-col1">
          <Box className="second-col">

           <div className="flex justify-between items-start">
           <div className="flex gap-3 items-center">

<div className="">
    <img src="5.jpg" alt="image-circle" className="w-14 h-14 rounded-md"/>
</div>

<div className="">
    <h2 className="head">Appbay technologies</h2>
    <p> 4746 followers</p>
    <p>3h. </p>
</div>


</div>
<div className="flex items-center gap-3">
    <p className="second-col-3dot"><BsThreeDots className="icon"/></p>
    <p className="second-col-fatimes"><FaTimes className="icon"/></p>
</div>
           </div>

            <h3>We are hirig............</h3>
            <p>Looking to join a dynamic and fast growing team </p>
          </Box>

          <div className="">
            <img src="5.jpg" alt="image-circle" />
          </div>

          <Box className="second-col space-y-3">
            <ul className="flex justify-between p-1">
              <li> 5 likes </li>
              <li>
                <ul className="flex gap-3">
                  <li> 4 comments</li>
                  <li>1 respot</li>
                </ul>
              </li>
            </ul>

            <hr />

            <ul className="flex justify-between items-center">
              <li className="flex items-center gap-3 second-list-btn">

<AiOutlineLike className="icon"/>
<p>Like</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">
                <FaRegCommentDots className="icon"/>
                <p>Comment</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">

                <BiRepost className="icon"/>
                <p>Repost</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">
                <RiSendPlaneFill className="icon"/>
                <p>Send</p>
              </li>
            </ul>
          </Box>
        </Box> <Box className="second-col1">
          <Box className="second-col">

           <div className="flex justify-between items-start">
           <div className="flex gap-3 items-center">

<div className="">
    <img src="5.jpg" alt="image-circle" className="w-14 h-14 rounded-md"/>
</div>

<div className="">
    <h2 className="head">Appbay technologies</h2>
    <p> 4746 followers</p>
    <p>3h. </p>
</div>


</div>
<div className="flex items-center gap-3">
    <p className="second-col-3dot"><BsThreeDots className="icon"/></p>
    <p className="second-col-fatimes"><FaTimes className="icon"/></p>
</div>
           </div>

            <h3>We are hirig............</h3>
            <p>Looking to join a dynamic and fast growing team </p>
          </Box>

          <div className="">
            <img src="5.jpg" alt="image-circle" />
          </div>

          <Box className="second-col space-y-3">
            <ul className="flex justify-between p-1">
              <li> 5 likes </li>
              <li>
                <ul className="flex gap-3">
                  <li> 4 comments</li>
                  <li>1 respot</li>
                </ul>
              </li>
            </ul>

            <hr />

            <ul className="flex justify-between items-center">
              <li className="flex items-center gap-3 second-list-btn">

<AiOutlineLike className="icon"/>
<p>Like</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">
                <FaRegCommentDots className="icon"/>
                <p>Comment</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">

                <BiRepost className="icon"/>
                <p>Repost</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">
                <RiSendPlaneFill className="icon"/>
                <p>Send</p>
              </li>
            </ul>
          </Box>
        </Box>



        <Box className="second-col1">
          <Box className="second-col">

           <div className="flex justify-between items-start">
           <div className="flex gap-3 items-center">

<div className="">
    <img src="5.jpg" alt="image-circle" className="w-14 h-14 rounded-md"/>
</div>

<div className="">
    <h2 className="head">Appbay technologies</h2>
    <p> 4746 followers</p>
    <p>3h. </p>
</div>


</div>
<div className="flex items-center gap-3">
    <p className="second-col-3dot"><BsThreeDots className="icon"/></p>
    <p className="second-col-fatimes"><FaTimes className="icon"/></p>
</div>
           </div>

            <h3>We are hirig............</h3>
            <p>Looking to join a dynamic and fast growing team </p>
          </Box>

          <div className="">
            <img src="5.jpg" alt="image-circle" />
          </div>

          <Box className="second-col space-y-3">
            <ul className="flex justify-between p-1">
              <li> 5 likes </li>
              <li>
                <ul className="flex gap-3">
                  <li> 4 comments</li>
                  <li>1 respot</li>
                </ul>
              </li>
            </ul>

            <hr />

            <ul className="flex justify-between items-center">
              <li className="flex items-center gap-3 second-list-btn">

<AiOutlineLike className="icon"/>
<p>Like</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">
                <FaRegCommentDots className="icon"/>
                <p>Comment</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">

                <BiRepost className="icon"/>
                <p>Repost</p>
              </li>
              <li className="flex items-center gap-3 second-list-btn">
                <RiSendPlaneFill className="icon"/>
                <p>Send</p>
              </li>
            </ul>
          </Box>
        </Box>



        
      </Box>
    </>
  );
};
