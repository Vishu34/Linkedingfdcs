import { FaLinkedin, FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BsHandbagFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";


const { Box } = require("@mui/material");

const Mobnav = () => {
  return (
    <>
      <Box className="navbar">
       
        <div className="w-[75%] mx-auto">
        <ul className="flex justify-between p-3 items-center">
        <list>
        <ul className="flex space-x-4 items-center ">
          <list>
            <FaLinkedin className=" icon text-4xl"/>
          </list>
          <list>
            <FaSearch />
          </list>

         
        </ul>
        </list>

        <list>
        <ul className="flex items-center space-x-4">
            <list>
              <AiFillHome className=" icon text-xl"/>
            </list>
            <list>
              <HiUsers className=" icon text-xl"/>
            </list>
            <list>
              <BsHandbagFill className=" icon text-xl"/>
            </list>
            <list>
              <AiFillMessage className=" icon text-xl"/>
            </list>
            <list>
              <IoIosNotifications className=" icon text-xl"/>
            </list>
            <list>hello</list>

            <list>
              <BsGrid3X3Gap className=" icon text-xl"/>
            </list>
            <list>hello</list>


          </ul>
        </list>
       </ul>
        </div>
      </Box>
    </>
  );
};

export default Mobnav;
