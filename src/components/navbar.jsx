import {Outlet, Link} from "react-router-dom";
    const Navbar = () => {
        return (
            <>
            <img src="/header.png" alt="header" border="0" class="mx-auto w-full " />
            <div class=" navbar-wrapper items-center text-white text-xl justify-center h-16 w-100% p-15 shadow-md  bg-pijet-blue px-10">
                <div class=" w-100% h-10">
                    <ul class="flex  items-center py-4 justify-evenly text-white" >
                        <Link to="/">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00 ">HOME</li>
                        </Link>
                        <Link to="/guideline">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00">GUIDELINES</li>
                        </Link>
                        <Link to="/call-for-papers">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00">CALL FOR PAPERS</li>
                        </Link>
                        <Link to="/editorial-board">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00">EDITORIAL BOARD</li>
                        </Link>
                        <Link to="/archives">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00">ARCHIVES</li>
                        </Link>
                        <Link to="/ethics-policies">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00">ETHICS & POLICIES</li>
                        </Link>
                        <Link to="/contact-us">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110 ease-out duration-2git 00">CONTACT US</li>
                        </Link>
                    </ul>
                </div>
            </div>
            </>
        );
    };

    export default Navbar;

