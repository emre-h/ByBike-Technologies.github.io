'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Carousel from '../_components/Carousel';

const page = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeIndexWithDelay, setActiveIndexWithDelay] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndexWithDelay(activeIndex);
    }, 200);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const frontRef = useRef();
  const backRef = useRef();

  return (
    <main className='overflow-x-hidden'>
      <section className='flex justify-center bg-gradient-to-b from-[#00A29D] to-white'>
        <div className='relative w-[96%] md:w-11/12 xl:w-[80rem] h-[34rem] sm:h-[40rem] pt-12'>
          <div className='text-3xl sm:text-5xl lg:text-6xl text-center md:text-start font-medium'>
            <h2 className='underline decoration-bybikeRed md:no-underline'>
              FROM <br className='hidden md:block' />
              <span className='underline decoration-bybikeRed'>BACKSTAGE</span>
            </h2>
            <h2 className='underline flex justify-center md:block decoration-bybikeBlue md:no-underline'>
              <h3 className='ml-[5px]'>TO </h3>
              <h2 className='md:hidden'>&nbsp; </h2>
              <span className='underline decoration-bybikeBlue'>
                FRONTSTAGE
              </span>
            </h2>
          </div>
          <h3 className='italic text-center md:text-start lg:text-xl tracking-wider mt-4'>
            <span className='font-semibold'>Turnkey</span> solution for your
            brand.
          </h3>

          <div className='absolute flex justify-center right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 top-52 lg:top-32 bg-[url(/platform_stage.png)] bg-no-repeat bg-contain w-full sm:w-9/12 md:w-[40rem] lg:w-[50rem] h-full'>
            <div className='relative flex justify-between h-min w-[40%]'>
              <div
                onClick={() =>
                  frontRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
                className='bg-bybikeBlue cursor-pointer ring mt-28 sm:mt-44 ring-white w-8 max-h-8 aspect-square rounded-[50%]'
              ></div>
              <div
                onClick={() =>
                  backRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  })
                }
                className='bg-bybikeRed cursor-pointer ring mt-16 sm:mt-28 ring-white w-8 max-h-8 aspect-square rounded-[50%]'
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* FRONT STAGE */}
      <div ref={frontRef} className='h-[5rem]'></div>
      <h2 className='tracking-wider text-center text-4xl pt-6 font-medium'>
        FRONT-STAGE
      </h2>
      <hr className='border border-bybikeBlue mt-4' />
      <section className='-mt-12 sm:mt-12 flex justify-center items-center md:items-start md:flex-row gap-6 lg:gap-20'>
        <div className='w-[96%] lg:w-[60rem] xl:w-[80rem] gap-12 lg:gap-2 flex flex-col-reverse items-center lg:flex-row justify-between'>
          <div className=''>
            <h2 className='text-4xl hidden lg:block mb-12 font-semibold mt-24'>
              <span className='text-bybikeBlue '>Rider </span>App
            </h2>
            <div className='flex justify-center sm:justify-start text-xs sm:text-base gap-1 sm:gap-3 mb-10'>
              <button
                onClick={() => setActiveIndex(0)}
                className={`${
                  activeIndex === 0
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Tailor made
              </button>
              <button
                onClick={() => setActiveIndex(1)}
                className={`${
                  activeIndex === 1
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Online Invoice
              </button>
              <button
                onClick={() => setActiveIndex(2)}
                className={`${
                  activeIndex === 2
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Vehicle
              </button>
              <button
                onClick={() => setActiveIndex(3)}
                className={`${
                  activeIndex === 3
                    ? 'border border-black'
                    : 'text-white bg-bybikeBlack'
                } py-1 px-2 rounded-xl `}
              >
                Payment
              </button>
            </div>

            <Carousel
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>

          <div
            className={`${
              activeIndex === activeIndexWithDelay ? 'opacity-100' : 'opacity-0'
            } transition-all duration-200 flex justify-between gap-2 md:gap-4 lg:gap-2 mt-20 sm:mt-36 h-[20rem] sm:h-[34rem]`}
          >
            <div className='flex flex-col justify-center'>
              <img
                className='w-[8rem] sm:w-[14rem] h-auto'
                src={`/software_ss${activeIndexWithDelay}_1.png`}
                alt='ss1'
              />
            </div>
            <div className='flex flex-col justify-center'>
              <img
                className='w-[8rem] sm:w-[14rem]'
                src={`/software_ss${activeIndexWithDelay}_2.png`}
                alt='ss1'
              />
            </div>
          </div>
        </div>
      </section>

      {/* BACK STAGE */}
      <div ref={backRef} className='h-[5rem]'></div>
      <h2 className='tracking-wider text-center text-4xl mt-4 pt-6 font-medium'>
        BACK-STAGE
      </h2>
      <hr className='border border-bybikeRed mt-4 mb-24' />
      <section className='flex justify-center'>
        <div className='w-[96%] sm:w-[90%] lg:w-[40rem] flex md:block flex-col items-center xl:w-[60rem]'>
          <h2 className='text-2xl sm:text-3xl text-center md:text-start md:text-4xl mb-2 font-semibold'>
            <span className='text-bybikeRed'>Control Your </span>Fleet
          </h2>
          <p className='text-sm sm:text-xl font-medium text-center md:text-start mb-16'>
            Track your fleet{' '}
            <span className='italic text-bybikeRed'>second to second, </span>
            without delay, and{' '}
            <span className='italic text-bybikeRed'>maximize </span>your
            operational efficiency with our fleet management software.
          </p>

          <img src='/fleet_management.png' alt='ss3' />
        </div>
      </section>
      <section className='flex justify-center'>
        <div className='w-[96%] sm:w-[90%] flex flex-col items-center gap-12 sm:gap-0 lg:gap-12 sm:items-start sm:flex-row justify-between lg:w-[46rem] xl:w-[60rem] mt-36 lg:mt-52 '>
          <div>
            <h2 className='text-2xl text-center sm:text-start md:text-4xl font-semibold mb-6'>
              <span className='text-bybikeRed'>Operation</span> Apps
            </h2>

            <h3 className='text-base text-center sm:text-start md:text-xl font-medium mb-6'>
              Specially <span className='text-bybikeRed italic'>designed </span>
              for your field team.
            </h3>
            <ul className='list-disc text-sm md:text-lg lg:text-xl flex flex-col ml-4 gap-6'>
              <li>Easy to Use</li>
              <li>Multi Authorization for Each Team</li>
              <li>Designed for Tracktion</li>
            </ul>
          </div>
          <div className='flex justify-center md:gap-4 lg:gap-2 h-[20rem] xl:h-[36rem]'>
            <img src='/operation_1.png' className='h-full' alt='ss1' />
            <img src='/operation_2.png' className='h-full' alt='ss2' />
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='w-[96%] sm:w-[90%] flex sm:block flex-col items-center lg:w-[46rem] xl:w-[60rem] mt-36 lg:mt-52'>
          <h2 className='text-2xl text-center sm:text-start md:text-4xl font-semibold mb-8'>
            <span className='text-bybikeRed'>CRM</span> Dashboard
          </h2>
          <h3 className=' text-center sm:text-start text-sm md:text-xl mb-10'>
            Your customer support team will be able to manage all complaints
            from a <span className='text-bybikeRed italic'>single</span> panel.
            Your customer satisfaction will{' '}
            <span className='text-bybikeRed italic'>skyrocket</span>.
          </h3>
          <img src='/software_ss3.png' alt='ss3' />
        </div>
      </section>

      <section className='flex justify-center gap-4 mt-36 lg:mt-52'>
        <div className='w-[96%] sm:w-[94%] flex flex-col md:flex-row gap-8 items-center justify-between lg:w-[55rem] xl:w-[60rem]'>
          <div className='w-[26rem] flex md:block flex-col items-center'>
            <h2 className='text-2xl md:text-4xl text-center md:text-start font-semibold mb-8'>
              <span className='text-bybikeRed'>CMS</span> Dashboard
            </h2>
            <h3 className='text-sm md:text-lg lg:text-xl font-medium mb-6'>
              Manage your campains{' '}
              <span className='text-bybikeRed italic'>easily </span>
              from a <span className='text-bybikeRed italic'>single</span>{' '}
              panel.
            </h3>
            <ul className='list-disc flex lg:text-xl flex-col ml-4 gap-4'>
              <li>Sales Management</li>
              <li>Marketing Management</li>
            </ul>
          </div>
          <div className='p-2 md:p-6 py-10 md:py-16 rounded-3xl bg-[#ECECEC]'>
            <h2 className='text-2xl md:text-4xl text-center font-medium mb-1'>
              COMING SOON
            </h2>
            <h3 className='text-sm md:text-base text-center mb-8'>
              Notify Me When It's Ready
            </h3>
            <div className='flex h-12 items-center justify-center rounded-md overflow-hidden'>
              <input
                type='text'
                placeholder='Enter a valid e-mail address'
                className='focus:outline-none w-[14rem] px-4 h-full text-xs md:text-sm'
              />
              <button className='bg-black h-full min-w-[6rem] text-sm md:text-base px-1 md:px-4 text-white'>
                NOTIFY ME
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-4 my-24 items-center'>
        <h2 className='text-xl md:text-3xl font-semibold'>
          OUR TEAM IS HERE TO <span className='text-bybikeBlue'>HELP</span>
        </h2>
        <Link
          href='/demo'
          className='bg-bybikeBlue py-2 px-4 rounded-xl text-white'
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
};

export default page;
