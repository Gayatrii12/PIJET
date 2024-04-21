import React from "react";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { Vol1_Issue1_paperMap } from "../data/paperMaps";
import PaperMap from "../components/PaperMap";

const Archive = () => {
  // const volumes = [];
  const keys = Object.keys(Vol1_Issue1_paperMap);


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
      <div className="grid grid-cols-3 gap-2">
        {keys.map((key, index) => (
          <Link
            key={index}
            to={Vol1_Issue1_paperMap[key]}
            className="w-full h-full"
          >
            <button
              key={index}
              className="text-black text-lg font-sans text-center py-1 border-2 bg-slate-100 hover:bg-slate-200"
            >
              {key}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Archive;
