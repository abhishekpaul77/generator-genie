import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
  return (
    <div className='p-5 shadow-md border-b-2 flex justify-between items-center bg-white'>
      <div className='flex items-center'>
        <span className='text-3xl font-bold text-primary animate-pulse'>AI</span>
        <span className='text-3xl font-bold ml-2 animate-bounce delay-200'>Content</span>
        <span className='text-3xl font-bold ml-2 animate-pulse delay-500'>Generator</span>
      </div>
      <div className='flex gap-5 items-center'>
        <h2 className='bg-primary p-1 rounded-full text-xs text-white px-2 animate-wiggle'>🔥Join For Rs.77/Month</h2>
        <UserButton/>
      </div>
    </div>
  );
};

export default Header;