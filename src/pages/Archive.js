import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { Vol1_Issue1_paperMap } from "../data/paperMaps";
import PaperMap from "../components/PaperMap";

const Archive = () => {
  const data = Object.entries(Vol1_Issue1_paperMap);

  return (
    <div className="max-w-7xl mx-auto p-6 text-justify">
      <h1 className="text-4xl font-bold mt-4 mb-8 text-center text-pijet-blue">
        ARCHIVES
      </h1>

      <h1 className="text-3xl font-bold mt-6 text-center text-pijet-blue">
        Present Issue
      </h1> 
      <h1 className="text-2xl font-bold my-6 text-center text-pijet-blue">
        Complete Volume 1 Issue 1 : Dec 2023
      </h1>
      <div className="flex flex-col items-center justify-center w-2/5 border-2 bg-slate-100 ">
      {data.map(([key, value], index) => (
          <a key={index} href={value} className="w-full h-full">
            <p
              key={index}
              className="text-black text-lg h- w-full font-sans text-center hover:bg-slate-200 py-1 "
            >
              {key.substring(0, 50)}
            </p>
          </a>
        ))}
       
      </div>
    </div>
  );
};

export default Archive;
