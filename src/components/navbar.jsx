import {Outlet, Link} from "react-router-dom";
    const Navbar = () => {
        return (
            <>
            <img src="/header.png" alt="header" border="0" class="mx-auto w-full " />
            <div class=" navbar-wrapper items-center text-white text-xl justify-center h-16 w-100% p-15 shadow-md  bg-pijet-blue">
                <div class=" w-100%   h-10">
                    <ul class="flex space-x-10 items-center py-4 justify-evenly text-white" >
                        <Link to="/home">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110">HOME</li>
                        </Link>
                        <Link to="/guideline">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110">GUIDELINES</li>
                        </Link>
                        <Link to="/cfa">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110">CALL FOR PAPERS</li>
                        </Link>
                        <Link to="/editorial-board">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110">EDITORIAL BOARD</li>
                        </Link>
                        <Link to="/ethics-policies">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110">ETHICS & POLICIES</li>
                        </Link>
                        <Link to="/contact-us">
                            <li class="font-manrope font-medium text-md text-white hover:scale-110">CONTACT US</li>
                        </Link>
                    </ul>
                </div>
            </div>
            </>
        );
    };

    export default Navbar;

