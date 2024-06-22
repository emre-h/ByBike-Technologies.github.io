'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const [selected, setSelected] = useState(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const pathname = usePathname();
  const handleSelection = (int) => {
    if (selected === int) {
      setSelected(null);
    } else setSelected(int);
  };

  return (
    <>
      <div className='fixed z-50 w-screen select-none -mt-[5rem] bg-bybikeBlack h-[5rem] tracking-wider px-2 md:px-12 lg:px-24 font-montserrat font-[200] flex items-center justify-between text-white'>
        <Link
          onClick={() => {
            setMenuOpened(false);
            setSelected(null);
          }}
          href='/'
          className='ml-3 mt-1 sm:ml-0 font-azonix text-2xl'
        >
          BYBIKE
        </Link>
        <div className='flex items-center gap-2'>
          <div
            onClick={() => setMenuOpened(!menuOpened)}
            className={`mr-4 transition-all duration-300 rounded-md cursor-pointer sm:hidden`}
          >
            <svg
              className='overflow-visible'
              width='28'
              height='16'
              viewBox='0 0 28 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line
                className={`${
                  menuOpened ? 'rotate-45 -translate-y-[0.3rem]' : null
                } origin-left duration-500 transition-all`}
                y1='1'
                x2='28'
                y2='1'
                stroke='#EADAFF'
                strokeWidth='2'
              />
              <line
                className={`${
                  menuOpened ? 'opacity-0' : null
                } duration-300 transition-all`}
                y1='8'
                x2='28'
                y2='8'
                stroke='#EADAFF'
                strokeWidth='2'
              />
              <line
                className={`${
                  menuOpened ? '-rotate-45 translate-y-[0.3rem]' : null
                } origin-left duration-500 transition-all`}
                y1='15'
                x2='28'
                y2='15'
                stroke='#EADAFF'
                strokeWidth='2'
              />
            </svg>
          </div>
        </div>
        <div className='absolute right-10 z-10'></div>
        <div className='hidden sm:flex items-center gap-4 lg:gap-8'>
          <div
            onClick={() => handleSelection(1)}
            className='p-1 relative flex items-center gap-2 cursor-pointer'
          >
            Products
            <svg
              className={`transition-all ${selected === 1 ? 'rotate-180' : ''}`}
              width='17'
              height='10'
              viewBox='0 0 17 10'
              fill='none'
            >
              <path
                d='M1.00008 1.00008L8.29325 8.29289M16.2932 1L8.29325 9'
                stroke='white'
              />
            </svg>
            <div
              className={`absolute z-0 flex flex-col gap-[2px] transition-all ${
                selected === 1
                  ? 'translate-y-[6.2rem]'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <Link
                onClick={() => setSelected(false)}
                href='/software'
                className={`${
                  pathname === '/software'
                    ? 'bg-white border-black  text-black font-medium'
                    : 'bg-bybikeBlack border-white text-white'
                } flex text-center border rounded-md items-center leading-5 h-14 px-4`}
              >
                Software Solutions
              </Link>
              <Link
                onClick={() => setSelected(false)}
                href='/e-dock'
                className={`${
                  pathname === '/e-dock'
                    ? 'bg-white border-black text-black font-medium'
                    : 'bg-bybikeBlack border-white text-white'
                } flex text-center border rounded-md items-center leading-5 h-14 px-4`}
              >
                E-Dock
              </Link>
            </div>
          </div>
          <Link
            onClick={() => setSelected(false)}
            href='/pricing'
            className='p-1'
          >
            Pricing
          </Link>
          <div
            onClick={() => handleSelection(2)}
            className='p-1 relative flex items-center gap-2 cursor-pointer'
          >
            Company
            <svg
              className={`transition-all ${
                selected === 2 ? 'rotate-180' : null
              }`}
              width='17'
              height='10'
              viewBox='0 0 17 10'
              fill='none'
            >
              <path
                d='M1.00008 1.00008L8.29325 8.29289M16.2932 1L8.29325 9'
                stroke='white'
              />
            </svg>
            <div
              className={`absolute z-0 flex flex-col gap-[2px] transition-all ${
                selected === 2
                  ? 'translate-y-[6.2rem]'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <Link
                onClick={() => setSelected(false)}
                href='/about-us'
                className={`${
                  pathname === '/about-us'
                    ? 'bg-white border-black text-black font-medium'
                    : 'bg-bybikeBlack border-white text-white'
                } flex text-center  border rounded-md items-center leading-5 h-14 px-4`}
              >
                About Us
              </Link>
              <Link
                onClick={() => setSelected(false)}
                href='/team'
                className={`${
                  pathname === '/team'
                    ? 'bg-white border-black text-black font-medium'
                    : 'bg-bybikeBlack border-white text-white'
                } flex text-center  border rounded-md items-center leading-5 h-14 px-4`}
              >
                Our Team
              </Link>
            </div>
          </div>
          <Link
            onClick={() => setSelected(false)}
            href='/demo'
            className='bg-bybikeBlue text-white py-2 px-4 font-medium rounded-lg'
          >
            Request a Demo
          </Link>
        </div>
      </div>
      <div
        className={`${
          menuOpened ? 'opacity-100' : 'hidden opacity-0'
        } sm:hidden text-white transition-all flex justify-center items-center h-screen inset-0 z-50 mt-[5rem] fixed bg-bybikeBlack`}
      >
        <div className='h-1/2 flex flex-col text-xl items-center gap-10'>
          <Link onClick={() => setMenuOpened(false)} href='/software'>
            Software Solutions
          </Link>
          <Link onClick={() => setMenuOpened(false)} href='/e-dock'>
            E-Dock
          </Link>
          <Link onClick={() => setMenuOpened(false)} href='/pricing'>
            Pricing
          </Link>
          <Link onClick={() => setMenuOpened(false)} href='/about-us'>
            About Us
          </Link>
          <Link onClick={() => setMenuOpened(false)} href='/team'>
            Our Team
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
