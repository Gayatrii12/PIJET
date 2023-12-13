import { Link } from "react-router-dom";

const Archive = () => {
  return (
    <div className="py-10 h-100 ">
    
    <div class=" flex-col items-center justify-center mx-auto bg-pijet-blue border border-gray-200 rounded-lg shadow md:flex-col md:max-w-md ">
    <img class="object-cover mx-auto rounded-t-lg h-96 pt-16 pb-10 scale-110 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg" src="/front_page.png" alt="hi" />
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Volume 1 </h5>
        <Link to="/" > <p class="mb-3 font-normal text-white hover:scale-110">Issue 1 : Dec 2023</p></Link>
        <Link to="cfa"><p class="mb-3 font-normal text-white hover:scale-110">Issue 2 : Comming Soon</p></Link>
    </div>
    </div>
    </div>
  );
};

export default Archive;
