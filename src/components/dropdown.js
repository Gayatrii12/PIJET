import React, { useState} from 'react';

const DropDown = ({ paperMap }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState('');
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);



  const handleButtonClick = async () => {
    if (selectedPaper) {
      // Your download logic here
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center justify-center space-x-2 md:space-x-4 mb-3 mx-2 ">
        <div className="relative">
          <button
            type="button"
            className="inline-flex bg-white justify-between h-12 w-48 md:w-56 items-center p-2 rounded-md border text-pijet-blue focus:outline-none focus:border-blue-300 overflow-ellipsis"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="truncate">{selectedPaper || 'Select a paper'}</p>
            <svg
              className={`w-7 h-7 mx-1 text-gray-700 transition-transform ${isOpen ? 'rotate-0' : '-rotate-180'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute z-0 mt-2 w-80 md:w-[25rem] bg-white rounded-md shadow-lg`}
          >
            {Object.keys(paperMap).map((paper, index) => (
              <div
                key={index}
                className="block px-4 py-2 text-lg text-black cursor-pointer hover:bg-pijet-blue hover:text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,0.1)] "
                onClick={() => {
                  setSelectedPaper(paper);
                  setIsOpen(false);
                }}
              >
                {paper}
              </div>
            ))}
          </div>
        </div>
        <button
          className={`text-pijet-blue hover:scale-110 bg-white px-4 py-2 rounded-md ${
            !selectedPaper && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleButtonClick}
          disabled={!selectedPaper}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default DropDown;
