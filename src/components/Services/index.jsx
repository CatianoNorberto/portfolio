import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants'

import Image1 from '../../assets/Img1-removebg.png'

export default function  Services() {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <h2 className='h2 text-accent mb-12'>
          My Skills
        </h2>
        <div className='flex flex-col lg:flex-row gap-x-8'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1 mb-12 lg:mb-0'
          >
            <div className='flex-1 border rounded-2xl flex flex-col gap-y-6
             p-8 items-start mb-10'>
              <h2 className='h2'>Languages</h2>
              <div 
                className='border-t w-full focus:border-accent transition-all mb-8'
              ></div>
              <div className='flex justify-between gap-x-6'>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
              </div>
            </div>
            <div className='flex-1 border rounded-2xl flex flex-col gap-y-6
             p-8 items-start '>
              <h2 className='h2'>Styles</h2>
              <div 
                className='border-t w-full focus:border-accent transition-all mb-8'
              ></div>
              <div className='flex justify-between gap-x-6'>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}
            className='flex-1'
          >
            <div className='flex-1 border rounded-2xl flex flex-col gap-y-6
             p-8 items-start mb-10'>
              <h2 className='h2'>Frameworks</h2>
              <div 
                className='border-t w-full focus:border-accent transition-all mb-8'
              ></div>
              <div className='flex justify-between gap-x-6'>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
              </div>
            </div>
            <div className='flex-1 border rounded-2xl flex flex-col gap-y-6
             p-8 items-start '>
              <h2 className='h2'>Others</h2>
              <div 
                className='border-t w-full focus:border-accent transition-all mb-8'
              ></div>
              <div className='flex justify-between gap-x-6'>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
                <div className='flex items-center bg-transparent border rounded-2xl p-4'>
                  <img src={Image1} alt="ewe" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
