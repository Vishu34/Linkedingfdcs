import { Box } from "@mui/material";
import React from "react";
import { BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import {
  FaRegEdit,
  FaRegStar,
  FaSearch,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import { BiSolidVideoPlus } from "react-icons/bi";
import { GrGallery } from "react-icons/gr";
import { MdAttachFile } from "react-icons/md";
import { PiGif } from "react-icons/pi";
import { AiFillCaretDown } from "react-icons/ai";


export const FirstcolMessage = () => {
  return (
    <>
      <section>
        <Box className="first-col">
          <div className="first-col1">
            <ul className="flex justify-between items-center">
              <li>
                <ul className="flex items-center gap-3">
                  <li>
                    <h1 className="head"> Messaging</h1>
                  </li>
                  <li className="items-center flex navsearch gap-3 ">
                    <FaSearch />
                    <input
                      type="search"
                      placeholder="Search"
                      className="w-[100%] bg-none p-1"
                    />
                  </li>
                </ul>
              </li>

              <li>
                <ul className="flex items-center gap-3">
                  <li className="second-col-fatimes">
                    <BsThreeDots className="icon" />
                  </li>
                  <li className="second-col-fatimes">
                    <FaRegEdit className="icon" />
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <hr className="horizontal-line" />
          <ul className="flex gap-3 items-start p-1">
            <li className="focused flex gap-2 items-center">
            
            <p>Focused</p>
            <AiFillCaretDown/>
            </li>
            <li className="catchup-list ">Unread</li>
            <li className="catchup-list">My Connections</li>
            <li className="catchup-list">InMail</li>
            <li className="catchup-list">Starred</li>
          </ul>

          <hr className="horizontal-line" />

          {/* message box and message description box */}

          {/* b user messsage box  */}

          <Box className="flex ">
            <div className="w-[35%]">
              <div className="message-box">
                <ul className="flex gap-3 items-start justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-start
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-sqaure"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>

              <div className="message-box">
                <ul className="flex gap-3 items-start justify-between ">
                  <li>
                    <ul
                      className="flex gap-3 items-start
               "
                    >
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-sqaure"
                        />
                      </li>
                      <li>
                        <ul>
                          <li>
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <BsThreeDots />
                  </li>
                </ul>
              </div>
            </div>
            {/*  message description box */}

            <div className="w-[65%] first-col">
            
              <div className="">
             
                <ul className="flex items-center justify-between p-2">
                  <li>
                    <h1 className="head"> Himanshu</h1>
                  </li>
                  <li>
                    <ul className="flex items-center gap-3">
                      <li className="second-col-fatimes">
                        <BsThreeDots className="icon" />
                      </li>
                      <li className="second-col-fatimes">
                        <BiSolidVideoPlus className="icon" />
                      </li>
                      <li className="second-col-fatimes">
                        <FaRegStar className="icon" />
                      </li>
                    </ul>
                  </li>
                </ul>
                <hr className="horizontal-line" />



                {/* b user profile and descriptin messsage */}

               
               <Box className="p-3 mt-4 message-description">
              
                    <ul className="space-y-2">
                      <li>
                        <img
                          src="vishu.jpg"
                          atl="image"
                          className="image-sqaure"
                        />
                      </li>
                      <li>
                        <ul>
                          <li className="flex gap-3 items-center">
                            <h3 className="head">React.js Developer</h3>
                            <h2>CareerPaths</h2>
                            <p>India (Remote) </p>
                          </li>
                        </ul>
                      </li>
                      </ul>

                      <div className="flex gap-3 mt-2 items-center">
                      <div className="Horizontal-line"></div>
                        <h1> Aug30</h1>
                        <div className="Horizontal-line"></div>
                      </div>
                

{/* user and b user message description */}


<Box>

    
    <ul>
        <li>
        <ul className="flex items-start gap-3">
        <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
        <li>
        <h1 className="head">Himasnshu sahu</h1>
        </li>
    </ul>
        </li>

        <li className="-mt-3">
            <p className="para"> Hello i am himansh sahu and you</p>
        </li>
    </ul>

    <ul>
        <li>
        <ul className="flex items-start gap-3">
        <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
        <li>
        <h1 className="head">Himasnshu sahu</h1>
        </li>
    </ul>
        </li>

        <li className="-mt-3">
            <p className="para"> Hello i am himansh sahu and you</p>
        </li>
    </ul>
    <ul>
        <li>
        <ul className="flex items-start gap-3">
        <li><img src="vishu.jpg" alt="image" className="image-circle" /></li>
        <li>
        <h1 className="head">Himasnshu sahu</h1>
        </li>
    </ul>
        </li>

        <li className="-mt-3">
            <p className="para"> Hello i am himansh sahu and you</p>
        </li>
    </ul>
</Box>


               </Box>




                {/* write the message  */}


                <Box className="space-y-1">
                <hr className="horizontal-line" />
                   <Box className="p-2">
                   <textarea placeholder="write a message"
                         className="w-[100%]  first-col1 border-2 border-slate-800 outline-none"
                    />

                    
                    <div className="">
                        <ul className="flex items-center  justify-between">
                            <li>
                                <ul className="flex gap-3 items-center">
                                    <li className="second-col-fatimes">
                                        <GrGallery className="icon"/>
                                    </li>
                                    <li className="second-col-fatimes"><MdAttachFile className="icon"/></li>
                                    <li className="second-col-fatimes">
                                        <PiGif className="icon"/>
                                    </li>
                                    <li className="second-col-fatimes">
                                       <BsEmojiSmile className="icon"/> 
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <ul className="flex items-center gap-3">
                                <li className="post-btn">Send</li>
                                <li
                                className="second-col-fatimes"><BsThreeDots className="icon"/></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                   </Box>

                </Box>
              </div>
            </div>
          </Box>
        </Box>
      </section>
    </>
  );
};
