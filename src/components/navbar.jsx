import { motion } from "framer-motion";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleisOpen = () => {
    setIsOpen(!isOpen);
  };
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  }
  const pathnameMap = {
    "/": "HOME",
    "/guideline": "GUIDELINES",
    "/call-for-papers": "CALL FOR PAPERS",
    "/editorial-board": "EDITORIAL BOARD",
    "/archives": "ARCHIVES",
    "/ethics-policies": "ETHICS & POLICIES",
    "/contact-us": "CONTACT US",
    "/register":"Submission Form"
    
  };
  const getDisplayName = (pathname) => {
    
    return pathnameMap[pathname] ;
  };
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className="z-10 sticky  top-0 md:relative">
      <div>
      <img src="/header.png" alt="header" border="0" className="mx-auto w-full bg-white " />
      </div>
      <div className="flex justify-start items-center py-2 md:hidden h-auto  bg-pijet-blue">
        <button className="flex justify-center items-center px-3" onClick={toggleisOpen}>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#ffffff"
            stroke-width="2"
            
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("hidden") : ("flex")}
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="#ffffff"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            className={isOpen ? ("flex") : ("hidden")}
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <p className="text-white text-center text-xs font-manrope font-medium">{getDisplayName(location.pathname)}</p>
      </div>
      <div className="navbar-wrapper absolute  md:relative items-center text-white text-xl justify-center- md:h-auto w-3/5  md:w-full rounded-lg md:rounded-none my-1 mx-2 md:my-0 md:mx-0 p-15 shadow-xl md:shadow-md sm:text-xs  bg-pijet-blue px-10 ">
        <div className={" md:h-auto "}>
          <ul className={(" flex-col space-y-4 md:space-y-0 z-10  md:flex-row md:flex items-center py-5 md:py-3 justify-evenly text-white ")+(isOpen?("flex"):("hidden"))} animate={isOpen ? "open" : "closed"}
      variants={variants} transition={{ delay: 0.3 }} onClick={toggleisOpen}>
            <NavItem to="/" active={isActive("/")}>
              HOME
            </NavItem>
            <NavItem to="/guideline" active={isActive("/guideline")} >
              GUIDELINES
            </NavItem>
            <NavItem to="/call-for-papers" active={isActive("/call-for-papers")}>
              CALL FOR PAPERS
            </NavItem>
            <NavItem to="/editorial-board" active={isActive("/editorial-board")}>
              EDITORIAL BOARD
            </NavItem>
            <NavItem to="/archives" active={isActive("/archives")}>
              ARCHIVES
            </NavItem>
            <NavItem to="/ethics-policies" active={isActive("/ethics-policies")}>
              ETHICS & POLICIES
            </NavItem>
            <NavItem to="/contact-us" active={isActive("/contact-us")}>
              CONTACT US
            </NavItem>
          </ul>
        </div>
      </div>
      
    </div>
  );
};

const NavItem = ({ to, active, children }) => {
  return (
    <Link to={to}>
      <motion.li
        className={`font-manrope font-medium   lg:text-xl ${active ? 'text-white underline' : 'text-white'}`} 
        whileTap={{ scale: 0.9 }}
        
      > 
        
        {children}
      </motion.li>
    </Link>
  );
};

export default Navbar;
