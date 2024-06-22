import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className='overflow-x-hidden'>
      {/* TITLE */}
      <section className='bg-bybikeBlack text-white flex flex-col gap-2 justify-center items-center h-60 sm:h-80'>
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-medium'>
          <span className='text-bybikeBlue'>ABOUT</span> US
        </h1>
        <h3 className='italic text-base text-center sm:text-start w-2/3 sm:w-auto sm:text-lg md:text-xl tracking-widest'>
          On a mission to empower{' '}
          <span className='not-italic'>Smart Cities.</span>
        </h3>
      </section>

      {/* BANNER */}
      <img src='/about_us_banner.png' alt='about us' />

      {/* OUR MISSION */}
      <section className='flex py-16 flex-col items-center'>
        <h2 className='text-4xl font-medium'>
          Our <span className='text-bybikeBlue'>Mission</span>
        </h2>
        <p className='my-6 w-[21rem] sm:w-[28rem] md:w-[40rem] lg:w-[60rem] leading-8 md:leading-10 text-center text-base sm:text-lg md:text-2xl font-light tracking-widest'>
          Transforming shared bicycle networks with cutting-edge products to
          maximize efficiency, user-friendliness, and profitability for
          micro-mobility operators and local governments
        </p>
        <Link
          href='/team'
          className='text center py-2 px-10 bg-bybikeBlack text-white rounded-md'
        >
          MEET OUR TEAM
        </Link>
      </section>

      {/* WHAT'S DIFFERENT */}
      <section className='bg-[#F5F5F5] py-12 flex flex-col items-center mb-24'>
        <h2 className='text-2xl w-[20rem] md:w-auto text-center md:text-3xl font-light'>
          What's different when you work with us?
        </h2>
        <div className='flex flex-col md:grid grid-cols-2 gap-16 font-light text-justify leading-7 w-11/12  md:w-[40rem] xl:w-[50rem] mt-8'>
          <p>
            We are developing software and hardware products{' '}
            <span className='text-bybikeBlue'>
              to make shared bicycle networks
            </span>{' '}
            more efficient and user-friendly for micro-mobility operators and
            local governments.
          </p>
          <p>
            By using our developed products, operators can{' '}
            <span className='text-bybikeBlue'>
              significantly reduce their expenses and provide a more efficient
              experience
            </span>{' '}
            to their customers, thereby increasing their earnings.
          </p>
        </div>
      </section>

      {/* BANNER 2 */}
      <img src='/about_us_banner2.png' alt='about us' />

      {/* OUR VISION */}
      <section className='my-12 flex flex-col items-center'>
        <h2 className='text-4xl font-medium'>
          Our <span className='text-bybikeBlue'>Vision</span>
        </h2>
        <p className='w-11/12 md:w-[40rem] xl:w-[50rem] my-6 leading-8 md:leading-10 text-center text-base md:text-2xl font-light tracking-widest'>
          Empowering a cleaner and more sustainable world through electric
          micro-mobility solutions, revolutionizing transportation by offering
          efficient and accessible services to operator companies, anytime,
          anywhere.
        </p>
      </section>

      {/* MOBILITY SOLUTIONS */}
      <section className='bg-[#F5F5F5] py-12 flex flex-col items-center mb-24'>
        <h2 className='text-2xl w-[20rem] md:w-auto text-center md:text-3xl font-light'>
          Clean and Accessible Mobility Solutions.
        </h2>
        <div className='flex flex-col md:grid grid-cols-2 gap-16 font-light text-justify leading-7 w-11/12 md:w-[40rem] xl:w-[50rem] mt-8'>
          <p>
            We believe that in order to make the world cleaner and more livable,
            energy consumption needs to be done in a clean manner. In this
            context, we have determined that{' '}
            <span className='text-bybikeBlue'>
              50% of transportation, which has a significant impact on carbon
              emissions,
            </span>{' '}
            can be achieved through electric micro-mobility vehicles.
          </p>
          <p>
            In order to support environmentally friendly transportation, we have
            started developing products to provide more efficient and
            user-friendly services to operator companies that aim to offer
            micro-mobility vehicles to people anytime, anywhere.
          </p>
        </div>
      </section>

      {/* SOLUTION PARTNERS */}
      <section className='flex flex-col items-center mb-28'>
        <h2 className='text-2xl sm:text-3xl md:text-5xl font-medium mb-16'>
          Our <span className='text-bybikeBlue'>Solution Partners</span>
        </h2>
        <div className='grid grid-cols-2 font-semibold w-11/12 lg:w-[60rem] justify-center gap-8'>
          <div className='flex justify-center'>
            <Link
              target='_blank'
              href='https://tr.nazali.com/'
              className='flex flex-col cursor-pointer'
            >
              <img
                src='/nazali.png'
                className='grayscale mb-3 w-60'
                alt='nazali'
              />
              Legal <br /> Consultancy
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              target='_blank'
              href='https://eu.okai.co/'
              className='flex flex-col cursor-pointer'
            >
              <img
                src='/okai.png'
                className='grayscale mb-3 w-60'
                alt='nazali'
              />
              Manufacturer
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              target='_blank'
              href='https://www.twilio.com/en-us'
              className='flex flex-col cursor-pointer'
            >
              <img
                src='/twilio.png'
                className='grayscale mb-3 w-60'
                alt='twilio'
              />
              SMS <br /> Provider
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              target='_blank'
              href='https://www.parasut.com/'
              className='flex flex-col cursor-pointer'
            >
              <img
                src='/parasut.png'
                className='grayscale mb-3 w-60'
                alt='parasut'
              />
              Online Invoice <br /> Provider
            </Link>
          </div>
          <div className='flex justify-center'>
            <Link
              target='_blank'
              href='https://param.com.tr/'
              className='flex flex-col cursor-pointer'
            >
              <img
                src='/param.png'
                className='grayscale mb-3 w-60'
                alt='param'
              />
              Payement <br /> Provider
            </Link>
          </div>
          <div className='flex sm:justify-center'>
            <Link
              target='_blank'
              href='https://aws.amazon.com/'
              className='flex flex-col cursor-pointer'
            >
              <div className='sm:w-60'>
                <img src='/aws.png' className='grayscale mb-3 w-20' alt='aws' />
                Cloud <br /> Server
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className='mb-10'>
        <div className='flex justify-center items-center gap-1 sm:gap-6 text-bybikeBlue font-medium text-2xl sm:text-3xl md:text-5xl mb-6'>
          <div className='text-center'>
            <h2>Incubation</h2>
            <h2>Centers</h2>
          </div>
          <h2 className='text-black'>&</h2>
          <div className='text-center'>
            <h2>Accelerator</h2>
            <h2>Programs</h2>
          </div>
        </div>

        <img
          src='/accelerators.png'
          className='w-11/12 lg:w-[60rem] grayscale mx-auto'
          alt='accelerators'
        />
      </section>
    </main>
  );
};

export default page;
