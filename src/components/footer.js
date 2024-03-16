import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center  p-3 bg-pijet-blue">
      <h1 className=" text-[#ffffff] font-semibold flex text-center flex-col md:flex-row">
        © 2023-2024 All rights reserved.
        <p className=" ml-2 text-center hidden md:block"> |</p>
        <div className=" flex ">
          <p className="mx-2 text-center">Developed by</p>
          <Link
            to="/developers"
            className="text-white font-semibold duration-500 ease-in-out cursor-pointer underline underline-offset-2  "
          >
            <p className="hover:scale-110 transition-transform ease-in-out text-white">
              PIJET Tech Team
            </p>
          </Link>
        </div>
      </h1>
    </div>
  );
};

export default Footer;
