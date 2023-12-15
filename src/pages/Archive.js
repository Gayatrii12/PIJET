import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import 'tailwindcss/tailwind.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Archive = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const volumes = [
    // { id: 1, year: 2023, volume: 'Volume 2', issues: ['Issue 1 : December 2023', 'Issue 2 : Accepting Papers!'] },
    // { id: 1, year: 2023, volume: 'Volume 3', issues: ['Issue 1 : December 2023', 'Issue 2 : Accepting Papers!'] },
    // { id: 1, year: 2023, volume: 'Volume 4', issues: ['Issue 1 : December 2023', 'Issue 2 : Accepting Papers!'] },
    // { id: 1, year: 2023, volume: 'Volume 5', issues: ['Issue 1 : December 2023', 'Issue 2 : Accepting Papers!'] },
    // { id: 1, year: 2023, volume: 'Volume 6', issues: ['Issue 1 : December 2023', 'Issue 2 : Accepting Papers!'] },
  ];


  return (
    <div className="py-10 h-100">
      <div className="py-6">
        <h1 className="text-4xl font-bold mb-4 py-8 text-pijet-blue">PRESENT ISSUE</h1>
        <div className="flex-col items-center justify-center mx-auto bg-pijet-blue border text-xl border-gray-200 rounded-lg shadow sm:flex-col sm:max-w-md">
          <div
            className="cursor-pointer"
            onClick={toggleExpand}
          >
            <div className="flex justify-evenly p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                <li>2023 - Volume 1</li>
              </h5>
              {/* <p className="mb-2 font-normal text-white hover:scale-110">
              {expanded ? 'Collapse' : 'Expand'}
            </p> */}
            </div>
          </div>
          {expanded && (
            <div>
              <div className="flex flex-col justify-between leading-normal">
                <a href="/sampleVolume.pdf">
                  <p className="mb-3 font-normal underline text-white hover:scale-110">
                    Issue 1 : December 2023
                  </p>
                </a>
                {/* Add more issues as needed */}
              </div>
              <img
                className="object-cover mx-auto rounded-t-lg h-96 pt-5 pb-10 scale-110 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                src="/front_page.png"
                alt="hi"
              />
            </div>
          )}
        </div>
      </div>
      <div className="py-8">
        <h1 className="text-4xl font-bold mb-4 text-pijet-blue py-8">PREVIOUS ISSUES</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-6 px-8">
          {volumes.map((volume) => (
            <div key={volume.id} className="flex-col items-center justify-center bg-pijet-blue border text-xl border-gray-200 rounded-lg shadow md:flex-col md:max-w-md">
              <div className="cursor-pointer" onClick={toggleExpand}>
                <div className="flex justify-evenly p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    <li>{volume.year} - {volume.volume}</li>
                  </h5>
                </div>
              </div>
              {expanded && (
                <div>
                  <div className="flex flex-col justify-between leading-normal">
                    {volume.issues.map((issue, index) => (
                      <Link key={index} to="/">
                        <p className="mb-3 font-normal underline text-white hover:scale-110">{issue}</p>
                      </Link>
                    ))}
                  </div>
                  <img
                    className="object-cover mx-auto rounded-t-lg h-96 pt-5 pb-10 scale-110 md:h-auto md:w-80 md:rounded-none md:rounded-s-lg"
                    src="/front_page.png"
                    alt="hi"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Archive;