import React from "react";
import "tailwindcss/tailwind.css";
import { Vol1_Issue1_paperMap } from "../data/paperMaps";

const Archive = () => {
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
      <div className="grid grid-cols-1">
        {keys.map((key, index) => (
          <button
            key={index}
            className="text-black text-lg font-sans text-center py-1 border-2 bg-slate-100 hover:bg-slate-200"
          >
            <a
              key={index}
              href={Vol1_Issue1_paperMap[key]}
              className="w-full h-full"
            >
              {key}
            </a>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Archive;
