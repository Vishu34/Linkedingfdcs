import { FaLinkedin, FaSearch } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { BsHandbagFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mebox } from "../../Allz-indexbox/Mebox";
import { UseContextProvider } from "../../ContextApi/Reuse";


const { Box, Popover } = require("@mui/material");

const Desknav = () => {

    const[item, setitem]=useState(true);


    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick=(event)=>{
      setAnchorEl(event.currentTarget);
    }


    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined; 
    
    const [top ,settop]=useState(false);

   const topnav=()=>{
      if (window.scrollY >300) {
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
      <section>
      <Box className={
        `
        navbar z-50
       ${top ? "fixed top-0 w-[100%]": "static top-0"} 
        `
      }>
        <div className="w-[75%] mx-auto">
          <ul className="flex justify-between pt-3 pb-1 items-center">
            <li className="w-[35%]">
              <ul className="flex space-x-2 items-center">
                <li>
                  <FaLinkedin className=" icon text-4xl text-white" />
                </li>
                <li className="items-center flex navsearch gap-3 ">
                  <FaSearch />
                  <input type="search" placeholder="Search" className="w-[100%] bg-none p-1"/>
                </li>
              </ul>
            </li>

            <li>
              <ul className="flex items-center space-x-10">
                <li className=" navlistitem">
                  <Link to="/" className="items-center flex flex-col">
                  <AiFillHome className=" icon text-xl" />
                  <p>Home</p>
                  </Link>
                </li>
                <li className=" navlistitem">
                 <Link to="/my-network " className="items-center flex flex-col">
                 <HiUsers className=" icon text-xl" />
                 <p>My Network</p>
                 </Link>
                </li>
                <li className=" navlistitem">
                 <Link to="/jobs" className="items-center flex flex-col">
                 <BsHandbagFill className=" icon text-xl" />
                 <p>Jobs</p>
                 </Link>
                </li>
                <li className=" navlistitem">
                  <Link to="/messaging" className="items-center flex flex-col">
                  <AiFillMessage className=" icon text-xl" />
                  <p>Messages</p>
                  </Link>
                </li>
                <li className=" navlistitem">
                  <Link to="/notifications" className="items-center flex flex-col">
                  <IoIosNotifications className=" icon text-xl" />
                  <p>Notificatons</p>
                  </Link>
                </li>
                <li className="items-center flex flex-col navlistitem" 
                aria-describedby={id} variant="contained" onClick={handleClick}>
                <img src="vishu.jpg" alt="image" className="image-circle" />
                <ul className="flex items-center space-x-1">
                    <li>For Me</li>
                    <li>
                      
                    <AiFillCaretDown />

                    </li>
                    </ul>
                </li>

                <li className="items-center flex flex-col navlistitem">
                  <BsGrid3X3Gap className=" icon text-xl" />
                  <ul className="flex items-center space-x-1">
                    <li> For Business</li>
                    <li>
                      
                    <AiFillCaretDown />

                    </li>
                  </ul>
                </li>
                <li>hello</li>
              </ul>
            </li>
          </ul>
        </div>
      </Box>

{/*  me box user profile box
 */}
 <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      

       anchorReference="anchorPosition"
  anchorPosition={{ top: 75, left: 890 }}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',

  }}
  PaperProps={{
          sx: {
          width:"280px",
          background:"black"
          },
        }}


      >
      <Mebox/>
      </Popover>


      </section>
    </>
  );
};

export default Desknav;
