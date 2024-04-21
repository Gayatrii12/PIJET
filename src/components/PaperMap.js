import React from "react";

const PaperMap = (props) => {
  const { name } = props.details;
  return (
    <div className="h-auto my-7 mx-auto flex flex-col items-center transition duration-100 ease-in-out transform hover:bg-[#CBADD9]/[0.2] hover:scale-110 hover:rounded-md">
      <button className="text-white text-lg font-sans text-center py-2">
        {name}
      </button>
    </div>
  );
};

export default PaperMap;
