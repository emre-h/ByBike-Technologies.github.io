'use client';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='bg-bybikeBlack text-white relative'>
      <div
        onClick={() => {
          window.open('https://www.eiturbanmobility.eu/', '_blank').focus();
        }}
        className='absolute cursor-pointer w-[20rem] sm:w-[24rem] lg:w-[32rem] h-12 lg:h-14 flex justify-end bg-white bottom-32 sm:bottom-10 py-2 pr-8 rounded-r-lg'
      >
        <img src='/footer_eit.png' className='h-full' alt='eit' />
      </div>

      <div className='flex flex-col gap-10 sm:gap-0 md:flex-row px-6 sm:px-10 lg:px-16 py-10'>
        <div className='text-4xl sm:mb-0 sm:text-2xl mr-6 lg:mr-12'>
          <h2 className='mb-6 font-azonix'>BYBIKE</h2>
          <h2>All in one Micromobility Solutions</h2>
        </div>
        <div className='flex gap-12 sm:gap-4 lg:gap-10 w-full'>
          <div className='flex flex-col'>
            <h2 className='mt-2 mb-8'>Company</h2>
            <Link
              href='/about-us'
              className='cursor-pointer text-sm mb-1 font-light'
            >
              About Us
            </Link>
            <Link href='/demo' className='cursor-pointer  text-sm font-light'>
              Contact
            </Link>
          </div>
          <div className='flex flex-col'>
            <h2 className='mt-2 mb-8'>Social</h2>
            <a
              href='https://www.linkedin.com/company/bybiketr/'
              className='cursor-pointer text-sm mb-1 font-light'
            >
              LinkedIn
            </a>
            <a
              href='https://instagram.com/bybiketurkiye/'
              className='cursor-pointer text-sm font-light'
            >
              Instagram
            </a>
          </div>
        </div>

        <div className='border-[0.5px] hidden md:block border-white mx-4 lg:mx-20'></div>

        <div className='w-full'>
          <h2 className='text-3xl'>Get the Latest News</h2>
          <h4 className='font-light mt-2 mb-4'>By Joining our Newsletter</h4>
          <div className='flex gap-2 sm:gap-4 mb-4 sm:mb-20'>
            <input
              type='text'
              placeholder='Your E-mail Address'
              className='bg-bybikeBlack border border-white px-4 py-3 rounded-md text-xs sm:text-sm focus:outline-none'
            />
            <button className='bg-bybikeRed rounded-md px-4 text-sm'>
              Subscribe
            </button>
          </div>
          <div className='flex justify-between mb-40 sm:mb-0'>
            <div className='flex flex-col justify-end'>
              <h3 className='text-xs font-light'>C 2023 Bybike</h3>
            </div>
            <div className='text-end font-light text-xs'>
              <h2>Terms & Conditions</h2>
              <h2>Privacy Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
