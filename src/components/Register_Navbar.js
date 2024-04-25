import { useState } from "react";

const Rnavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleisOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-start items-center py-2 md:hidden h-auto  bg-pijet-blue">
      <button
        className="flex justify-center items-center px-3"
        onClick={() => {
          toggleisOpen();
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={isOpen ? "hidden" : "flex"}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="#ffffff"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={isOpen ? "flex" : "hidden"}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <p className="text-black text-center text-xs font-manrope font-medium">
        Atharva
      </p>
    </div>
  );
};

export default Rnavbar;
