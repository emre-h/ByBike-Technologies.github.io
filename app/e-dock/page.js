'use client';
import React from 'react';

const page = () => {
  return (
    <main>
      <section className='bg-[url(/products_banner.png)] w-screen mb-12 md:mb-20 relative bg-center bg-cover h-[14rem] sm:h-[20rem] md:h-[30rem] lg:h-[36rem]'>
        <div className='absolute flex pl-16 lg:pl-40 items-center inset-0 bg-gradient-to-r from-black'>
          <h1 className='text-white text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-medium w-40'>
            UNLEASH{' '}
            <span className='text-bybikeBlue font-semibold'>GREEN POWER</span>
          </h1>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-40 mb-20'>
        <div className='bg-[#F5F5F5] p-6 shadow-lg rounded-2xl items-center flex flex-col md:flex-row'>
          <img src='/products_frame1.png' className='md:w-1/2' alt='frame1' />
          <div className='py-3 sm:py-10 md:px-4 lg:px-12'>
            <h2 className='text-xl sm:text-3xl lg:text-4xl text-[#B5ADE8] font-medium'>
              ONE CHARGE
            </h2>
            <h2 className='text-xl sm:text-3xl lg:text-4xl text-[#8677DC] font-semibold'>
              RULES CAMPUS
            </h2>
            <p className='mt-4 text-sm sm:text-base lg:leading-5'>
              Discover the convenience of campus commuting with our e-bikes and
              charging stations. Go the extra mile on a single charge, reaching
              distances of up to 80km effortlessly. Enjoy smooth rides at speeds
              up to 25km/h, making your journeys quick and enjoyable.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-40 mb-20'>
        <div className='bg-[#F5F5F5] p-6 shadow-lg rounded-2xl items-center flex flex-col md:flex-row-reverse'>
          <img src='/products_frame2.png' className='md:w-1/2' alt='frame2' />
          <div className='py-3 sm:py-10 md:px-4 lg:px-12'>
            <h2 className='text-xl sm:text-3xl lg:text-4xl text-[#A8BAF3] font-medium'>
              LOCK & CHARGE
            </h2>
            <h2 className='text-xl sm:text-3xl lg:text-4xl text-[#6C87DE] font-semibold'>
              READY TO GO
            </h2>
            <p className='mt-4 text-sm sm:text-base leading-5'>
              Our smart lock ensures the safety of your e-bike, while our
              conveniently located charging stations offer fast and easy
              recharging.
            </p>
          </div>
        </div>
      </section>

      <section className='px-4 sm:px-10 lg:px-40 mb-20'>
        <div className='bg-[#F5F5F5] p-6 shadow-lg rounded-2xl items-center flex flex-col md:flex-row'>
          <img src='/products_frame3.png' className='md:w-1/2' alt='frame3' />
          <div className='py-3 sm:py-10 md:px-4 lg:px-12'>
            <h2 className='text-xl sm:text-3xl lg:text-4xl text-[#98cbfa] font-medium'>SUSTAINABLE</h2>
            <h2 className='text-xl sm:text-3xl lg:text-4xl text-[#519ADE] font-semibold'>ENERGY</h2>
            <p className='mt-4 text-sm sm:text-base leading-5'>
              By leveraging sustainable energy sources and promoting
              eco-friendly transportation, we aim to reduce carbon emissions and
              create a greener future. Together, let's make a positive impact on
              the environment while enjoying the convenience and efficiency of
              our innovative micromobility solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
