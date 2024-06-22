'use client';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main>
      <div className='relative'>
        <div className='absolute inset-0 z-40'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center mt-32'>
            Plans and Pricing
          </h1>
          <h3 className='text-white text-center mt-3'>
            Choose the best plan for your bussiness.
          </h3>
          <div className='flex justify-center'>
            <div className='flex w-[64rem] flex-col md:flex-row gap-4 lg:gap-12 items-center justify-center md:h-[36rem] mt-24'>
              <div className='bg-white w-11/12 sm:w-auto flex flex-col justify-between rounded-3xl shadow-lg'>
                <div className='md:h-[26rem]'>
                  <h2 className='text-3xl text-[#8677dc] font-semibold p-6'>
                    Start
                  </h2>
                  <hr className='mb-6' />
                  <div className='px-6'>
                    <h3 className='underline font-medium mb-4'>
                      Core Software Features
                    </h3>
                    <ul className='flex flex-col gap-2'>
                      <li className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>Rider App</h2>
                      </li>
                      <li className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>CRM Dashboard</h2>
                      </li>
                      <li>
                        <div className='flex items-center gap-2'>
                          <svg
                            width='12'
                            height='11'
                            viewBox='0 0 12 11'
                            fill='none'
                          >
                            <path
                              d='M11 1.87598L4 9.60496L1 6.70659'
                              stroke='#007EFF'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>{' '}
                          <h2>CMS Dashboard</h2>
                        </div>
                        <li className='list-disc ml-10 sm:ml-4 text-sm lg:text-base lg:ml-10'>
                          Sales Management
                        </li>
                      </li>
                      <li>
                        <div className='flex items-center gap-2'>
                          <svg
                            width='12'
                            height='11'
                            viewBox='0 0 12 11'
                            fill='none'
                          >
                            <path
                              d='M11 1.87598L4 9.60496L1 6.70659'
                              stroke='#007EFF'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>{' '}
                          <h2>Operation Dashboard & Apps</h2>
                        </div>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Basic Fleet Management
                        </li>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href='/demo'
                  className='bg-bybikeBlack text-center text-white m-10 rounded-lg py-2 text-xl'
                >
                  Contact Us
                </Link>
              </div>
              <div className='bg-white  w-11/12 sm:w-auto flex flex-col justify-between rounded-3xl shadow-lg'>
                <div className='md:h-[26rem]'>
                  <h2 className='text-3xl text-[#8677dc] font-semibold p-6'>
                    Grow
                  </h2>
                  <hr className='mb-6' />
                  <div className='px-6'>
                    <h3 className='underline font-medium mb-4'>
                      Core Software Features
                    </h3>
                    <ul className='flex flex-col gap-2'>
                      <li className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>Rider App</h2>
                      </li>
                      <li className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>CRM Dashboard</h2>
                      </li>
                      <li>
                        <div className='flex items-center gap-2'>
                          <svg
                            width='12'
                            height='11'
                            viewBox='0 0 12 11'
                            fill='none'
                          >
                            <path
                              d='M11 1.87598L4 9.60496L1 6.70659'
                              stroke='#007EFF'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>{' '}
                          <h2>CMS Dashboard</h2>
                        </div>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Sales Management
                        </li>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Marketing Management
                        </li>
                      </li>
                      <li>
                        <div className='flex items-center gap-2'>
                          <svg
                            width='12'
                            height='11'
                            viewBox='0 0 12 11'
                            fill='none'
                          >
                            <path
                              d='M11 1.87598L4 9.60496L1 6.70659'
                              stroke='#007EFF'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>{' '}
                          <h2>Operation Dashboard & Apps</h2>
                        </div>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Basic Fleet Management
                        </li>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href='/demo'
                  className='bg-bybikeBlack text-center text-white m-10 rounded-lg py-2 text-xl'
                >
                  Contact Us
                </Link>
              </div>

              <div className='bg-white w-11/12 sm:w-auto flex flex-col justify-between rounded-3xl shadow-lg'>
                <div className='w-auto md:h-[26rem]'>
                  <h2 className='text-3xl text-[#8677dc] font-semibold p-6'>
                    Scale
                  </h2>
                  <hr className='mb-6' />
                  <div className='px-6'>
                    <h3 className='underline font-medium mb-4'>
                      Core Software Features
                    </h3>
                    <ul className='flex flex-col gap-2'>
                      <li className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>Rider App</h2>
                      </li>
                      <li className='flex items-center gap-2'>
                        <svg
                          width='12'
                          height='11'
                          viewBox='0 0 12 11'
                          fill='none'
                        >
                          <path
                            d='M11 1.87598L4 9.60496L1 6.70659'
                            stroke='#007EFF'
                            stroke-width='2'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>{' '}
                        <h2>CRM Dashboard</h2>
                      </li>
                      <li>
                        <div className='flex items-center gap-2'>
                          <svg
                            width='12'
                            height='11'
                            viewBox='0 0 12 11'
                            fill='none'
                          >
                            <path
                              d='M11 1.87598L4 9.60496L1 6.70659'
                              stroke='#007EFF'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>{' '}
                          <h2>CMS Dashboard</h2>
                        </div>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Extended Sales Management
                        </li>
                        <li className='list-dis text-sm lg:text-basec ml-10 sm:ml-4 lg:ml-10'>
                          Marketing Management
                        </li>
                      </li>
                      <li>
                        <div className='flex items-center gap-2'>
                          <svg
                            width='12'
                            height='11'
                            viewBox='0 0 12 11'
                            fill='none'
                          >
                            <path
                              d='M11 1.87598L4 9.60496L1 6.70659'
                              stroke='#007EFF'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>{' '}
                          <h2>Operation Dashboard & Apps</h2>
                        </div>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Extended Fleet Management
                        </li>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Workforce Management
                        </li>
                        <li className='list-disc whitespace-nowrap text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Supply Chain Management
                        </li>
                        <li className='list-disc text-sm lg:text-base ml-10 sm:ml-4 lg:ml-10'>
                          Warehouse Management
                        </li>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link
                  href='/demo'
                  className='bg-bybikeBlack text-center text-white m-10 rounded-lg py-2 text-xl'
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <section className='flex flex-col items-center pt-28'>
            <h2 className='text-2xl sm:text-4xl font-semibold'>
              <span className='text-[#8677DC]'>Calculate</span> Revenue
            </h2>
            <h4 className='text-center text-sm sm:text-base'>
              Predict your company's revenue just by typing numbers
            </h4>
            <div className='mt-12 bg-bybikeBlack w-[20.4rem] sm:w-[32rem] md:w-[40rem] rounded-[2rem] py-4 sm:py-12 text-white'>
              <h2 className='text-2xl sm:text-4xl text-center font-medium'>
                COMING SOON
              </h2>
              <h4 className='text-center text-sm font-light mt-1'>
                Notify Me When It's Ready
              </h4>
              <div className='flex justify-center my-4 sm:mt-12'>
                <div className='flex h-12 px-2 items-center justify-center rounded-md overflow-hidden'>
                  <input
                    type='text'
                    placeholder='Enter a valid e-mail address'
                    className='focus:outline-none text-black px-4 sm:w-[16rem] h-full text-sm'
                  />
                  <button className='bg-[#8677DC] text-sm sm:text-base h-full px-4 text-white'>
                    NOTIFY ME
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='bg-bybikeBlack h-[64rem] md:h-[40rem]'></div>
        <div className='relative flex items-end overflow-hidden h-[80rem] md:h-screen bg-white'>
          <mark className='bg-[#26C2FA] w-2/3  sm:-mb-48 aspect-square blur-[8rem] rounded-[50%]'></mark>
          <mark className='bg-[#F33EE7] w-2/3 sm:-mb-56 -mr-56 aspect-square blur-[8rem] rounded-[50%]'></mark>
          <mark className='bg-[#F33] w-2/3 sm:-mb-48 -mr-32 aspect-square blur-[8rem] rounded-[50%]'></mark>
        </div>
      </div>
    </main>
  );
};

export default page;
