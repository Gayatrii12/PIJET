import React from 'react';

const Sidebar = ({ onSelect }) => {
  return (
    <div className='text-2xl font-bold mb-4 bg-white text-pijet-blue text-center py-4 px-2'>
      <ul className='space-y-4'>
        <li onClick={() => onSelect('home')} className='hover:text-blue-300 border-b border-pijet-blue mx-4 pb-2 cursor-pointer'>Home</li>
        <li onClick={() => onSelect('final-status')} className='hover:text-blue-300 border-b border-pijet-blue mx-4 pb-2 cursor-pointer'>Final Status</li>
        <li onClick={() => onSelect('approval')} className='hover:text-blue-300 border-b border-pijet-blue mx-4 pb-2 cursor-pointer'>Approval</li>
        <li onClick={() => onSelect('papers')} className='hover:text-blue-300 border-b border-pijet-blue mx-4 pb-2 cursor-pointer'>Papers</li>
      </ul>
    </div>
  );
}

export default Sidebar;
