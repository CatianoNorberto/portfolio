import React from 'react';
import Photo from '../../assets/foto-removebg.png'

export default function Header() {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img 
              className='h-[100px] w-[100px] rounded-full mr-8 bg-tertiary'
              src={Photo} 
              alt="" 
            />
            <a href='/'>
              <h2 className='h2 text-gradient text-[18px] lg:text-[32px]
              font-semibold leading-[1] mb-0'>Web <br/>
              <span className='text-white'>Portfolio</span></h2>
            </a>
          </div>
          {/* <button className='btn btn-sm'>Work with me</button> */}
          <a 
              href='https://www.linkedin.com/in/catiano-norberto/'
              target="_blank"
              rel="noopener noreferrer" 
              className='flex items-center btn btn-sm'>
              My Portfolio
            </a>
        </div>
      </div>
    </header>
  );
};
