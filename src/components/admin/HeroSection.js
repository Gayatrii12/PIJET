import React from 'react';

const HeroSection = () => {
  return (
    <div className='p-4'>
      <div className='max-w-3xl mx-auto'>
        <form className='flex items-center shadow-xl'>
          <input 
            type='text' 
            className='flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-pijet-blue' 
            placeholder='Search for paper here...'
          />
          <button 
            type='submit' 
            className='p-2 bg-pijet-blue text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-pijet-blue'
          >
            Search
          </button>
        </form>
        
      </div>
      <div className='bg-white max-w-5xl h-screen mx-auto mt-10 shadow-xl rounded-md'>

        </div>
    </div>
  );
}

export default HeroSection;
