import { motion } from "framer-motion";
import { Outlet, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <>
      <img src="/header.png" alt="header" border="0" className="mx-auto w-full " />
      <div className="navbar-wrapper items-center text-white text-xl justify-center h-auto w-100% p-15 shadow-md sm:text-xs  bg-pijet-blue px-10 ">
        <div className="w-100% h-auto">
          <ul className="flex items-center py-4 justify-evenly text-white ">
            <NavItem to="/" active={isActive("/")}>
              HOME
            </NavItem>
            <NavItem to="/guideline" active={isActive("/guideline")}>
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
    </>
  );
};

const NavItem = ({ to, active, children }) => {
  return (
    <Link to={to}>
      <motion.li
        className={`font-manrope font-medium text-xs lg:text-xl ${active ? 'text-white underline' : 'text-white'}`} 
        whileTap={{ scale: 0.9 }}
      > 
        
        {children}
      </motion.li>
    </Link>
  );
};

export default Navbar;
