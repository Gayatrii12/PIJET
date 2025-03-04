import React from "react";
import "tailwindcss/tailwind.css";
import { Vol1_Issue1_paperMap, Vol1_Issue2_paperMap, Vol2_Issue1_paperMap, Vol2_Issue2_paperMap } from "../data/paperMaps";

const Archive = () => {
  const key1 = Object.keys(Vol1_Issue1_paperMap);
  const key2 = Object.keys(Vol1_Issue2_paperMap);
  const key3 = Object.keys(Vol2_Issue1_paperMap);
  const key4 = Object.keys(Vol2_Issue2_paperMap);

  return (
    <div className="max-w-7xl mx-auto p-6 text-justify">
      <h1 className="text-4xl font-bold mt-4 mb-8 text-center text-pijet-blue">
        ARCHIVES
      </h1>

      {/* <h1 className="text-3xl font-bold mt-6 text-center text-pijet-blue">
        Present Issue
      </h1> */}
      <div>
        <h1 className="text-2xl font-bold my-6 text-center text-pijet-blue">
          Volume 2 Issue 2 : June 2025 (In Progress)
        </h1>
        <div className="grid grid-cols-1">
          {key4.map((key, index) => (
            <button
              key={index}
              className="text-black text-lg font-sans text-center py-1 border-2 bg-slate-100 hover:bg-slate-200"
            >
              <a
                key={index}
                href={Vol2_Issue2_paperMap[key]}
                className="w-full h-full"
              >
                {key} {/* Render the individual key here */}
              </a>
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h1 className="text-2xl font-bold my-6 text-center text-pijet-blue">
          Volume 2 Issue 1 : December-2024
        </h1>
        <div className="grid grid-cols-1">
          {key3.map((key, index) => (
            <button
              key={index}
              className="text-black text-lg font-sans text-center py-1 border-2 bg-slate-100 hover:bg-slate-200"
            >
              <a
                key={index}
                href={Vol2_Issue1_paperMap[key]}
                className="w-full h-full"
              >
                {key} {/* Render the individual key here */}
              </a>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-6 text-center text-pijet-blue">
          Volume 1 Issue 2 : June 2024
        </h1>
        <div className="grid grid-cols-1">
          {key2.map((key, index) => (
            <button
              key={index}
              className="text-black text-lg font-sans text-center py-1 border-2 bg-slate-100 hover:bg-slate-200"
            >
              <a
                key={index}
                href={Vol1_Issue2_paperMap[key]}
                className="w-full h-full"
              >
                {key} {/* Render the individual key here */}
              </a>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold my-6 text-center text-pijet-blue">
          Volume 1 Issue 1 : Dec 2023
        </h1>
        <div className="grid grid-cols-1">
          {key1.map((key, index) => (
            <button
              key={index}
              className="text-black text-lg font-sans text-center py-1 border-2 bg-slate-100 hover:bg-slate-200"
            >
              <a
                key={index}
                href={Vol1_Issue1_paperMap[key]}
                className="w-full h-full"
              >
                {key} {/* Render the individual key here */}
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;
