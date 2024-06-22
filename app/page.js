'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className='overflow-x-hidden'>
      {/* BANNER */}
      <section className='h-[40rem] sm:h-[32rem] flex justify-center pt-20 bg-[url(/landing_background.png)] bg-cover'>
        <div className='w-10/12 sm:w-11/12 lg:w-[60rem] xl:w-[80rem] overflow-visible'>
          <div className='flex flex-col sm:flex-row gap-12 justify-between'>
            <div className='flex flex-col'>
              <h2 className='text-6xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-medium'>
                BUILD <br />
                DEPLOY <br />
                MANAGE
              </h2>
              <div>
                <h3 className='text-white text-2xl sm:text-base my-12 sm:my-8'>
                  All in one micromobility solutions.
                </h3>
                <Link
                  href='/demo'
                  className='bg-bybikeBlue p-4 rounded-lg text-white'
                >
                  REQUEST A DEMO
                </Link>
              </div>
            </div>

            <img
              loading='lazy'
              src='/landing_phone.png'
              className='sm:w-[36rem] lg:w-[48rem] sm:-ml-32 md:-ml-20 animate-glowUp'
              alt='telefon'
            />
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className='mt-32 sm:mt-20 flex flex-col items-center'>
        <h1 className='text-bybikeBlue text-center font-bold text-4xl lg:text-5xl'>
          <span className='text-bybikeBlue/50'>GUIDING</span>
          <br />
          YOUR JOURNEY
        </h1>
        <h3 className='text-sm sm:text-base md:text-xl mt-4'>
          Unwavering Support from <span className='text-bybikeBlue'>Start</span>{' '}
          to <span className='text-bybikeBlue'>Finish</span>
        </h3>
        <br />
        <h3 className='text-center text-sm sm:text-base md:text-lg mb-6 font-[300] w-11/12 sm:w-[40rem] md:w-[48rem]'>
          We <span className='text-bybikeBlue'>accompany</span> you from the
          beginning to the end of your micromobility journey. <br />
          <br className='sm:hidden' />
          <span className='underline'>
            We are with you every step of the way
          </span>{' '}
          <br /> from{' '}
          <span className='font-medium italic'>operation planning </span>
          to <span className='font-medium italic'>vehicle selection</span>{' '}
          <br /> from{' '}
          <span className='font-medium italic'>fleet management</span> to{' '}
          <span className='font-medium italic'>scaling</span>.
        </h3>
        <Link
          href='/demo'
          className='bg-bybikeBlue text-white py-3 px-8 rounded-lg'
        >
          Request a Demo
        </Link>
      </section>

      {/* STEPS DESKTOP*/}
      <section className='mt-24 hidden md:flex justify-center'>
        <div className=' flex flex-col items-center'>
          <img src='/landing_steps.png' className='w-11/12' alt='steps' />
          <div className='flex gap-1 justify-between w-[95%]'>
            <div className='-mt-28 w-[152px] lg:w-48'>
              <h2 className='text-[#00BBF2] lg:text-2xl font-bold mb-4'>
                ADVICE
              </h2>
              <div className='flex gap-2'>
                <div className='border border-[#00BBF2]'></div>
                <p className='text-sm lg:text-base leading-5'>
                  We prepare an optimized operational plan, together we ensure
                  you reach maximum efficiency.
                </p>
              </div>
            </div>
            <div className='w-[152px] lg:w-48'>
              <h2 className='text-[#565CA9] lg:text-2xl font-bold mb-4'>
                HARDWARE
              </h2>
              <div className='flex gap-2'>
                <div className='border border-[#565CA9]'></div>
                <p className='text-sm lg:text-base leading-5'>
                  We assist you in the supply of necessary tools and equipment
                  for the operation.
                </p>
              </div>
            </div>
            <div className='-mt-28 w-[152px] lg:w-48'>
              <h2 className='text-[#7D53A2] lg:text-2xl font-bold mb-4'>
                SOFTWARE
              </h2>
              <div className='flex w-40 lg:w-48 gap-2'>
                <div className='border border-[#7D53A2]'></div>
                <p className='text-sm lg:text-base leading-5'>
                  We start your operation quickly with our end-to-end software
                  infrastructure.
                </p>
              </div>
            </div>
            <div className='w-[152px] lg:w-48'>
              <h2 className='text-[#EE4E9C] lg:text-2xl font-bold mb-4'>
                MANAGE
              </h2>
              <div className='flex gap-2'>
                <div className='border border-[#EE4E9C]'></div>
                <p className='text-sm lg:text-base leading-5'>
                  After the installation is completely finished, we assist in
                  optimizing the operation for the first 2-3 weeks.
                </p>
              </div>
            </div>
            <div className='-mt-28 w-[152px] lg:w-48'>
              <h2 className='text-[#EF4962] lg:text-2xl font-bold mb-4'>
                SCALE
              </h2>
              <div className='flex w-40 lg:w-48 gap-2'>
                <div className='border border-[#EF4962]'></div>
                <p className='text-sm lg:text-base leading-5'>
                  We support the regulatory and efficient scaling of your
                  operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STEPS MOBILE */}
      <section className='flex sm:hidden flex-col items-center mt-20'>
        <div className='flex flex-col gap-20 items-center'>
          <div className='flex flex-col items-center'>
            <img
              src='/step_01.png'
              className='w-2/3 sm:w-[40%] animate-glowUp'
              alt='step_01'
            />
            <div className='text-center -mt-6 w-10/12 sm:w-8/12'>
              <h2 className='text-2xl font-bold text-[#00BBF2]'>ADVICE</h2>
              <hr className='border border-[#00BBF2] mb-2' />
              <p className='text-xl'>
                We prepare an optimized operational plan, together we ensure you
                reach maximum efficiency.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='/step_02.png'
              className='w-2/3 sm:w-[40%] animate-glowUpOdd'
              alt='step_02'
            />
            <div className='text-center -mt-6 w-10/12 sm:w-8/12'>
              <h2 className='text-2xl font-bold text-[#565CA9]'>HARDWARE</h2>
              <hr className='border border-[#565CA9] mb-2' />
              <p className='text-xl'>
                We assist you in the supply of necessary tools and equipment for
                the operation.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='/step_03.png'
              className='w-2/3 sm:w-[40%] animate-glowUp'
              alt='step_03'
            />
            <div className='text-center -mt-6 w-10/12 sm:w-8/12'>
              <h2 className='text-2xl font-bold text-[#7D53A2]'>SOFTWARE</h2>
              <hr className='border border-[#7D53A2] mb-2' />
              <p className='text-xl'>
                We start your operation quickly with our end-to-end software
                infrastructure.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='/step_04.png'
              className='w-2/3 sm:w-[40%] animate-glowUpOdd'
              alt='step_04'
            />
            <div className='text-center -mt-6 w-10/12 sm:w-8/12'>
              <h2 className='text-2xl font-bold text-[#EE4E9C]'>MANAGE</h2>
              <hr className='border border-[#EE4E9C] mb-2' />
              <p className='text-xl'>
                After the installation is completely finished, we assist in
                optimizing the operation for the first 2-3 weeks.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <img
              src='/step_05.png'
              className='w-2/3 sm:w-[40%] animate-glowUp'
              alt='step_05'
            />
            <div className='text-center -mt-6 w-10/12 sm:w-8/12'>
              <h2 className='text-2xl font-bold text-[#EF4962]'>SCALE</h2>
              <hr className='border border-[#EF4962] mb-2' />
              <p className='text-xl'>
                We support the regulatory and efficient scaling of your
                operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-center'>
        <div className='mt-40 flex flex-col items-center md:items-start md:flex-row gap-6 lg:gap-20'>
          <div className='w-[96%] md:w-2/3  text-center md:text-start xl:w-[45rem] md:ml-8 '>
            <h3 className='tracking-wider font-light mb-4 text-2xl'>
              TEAM. &nbsp;CUSTOMER. &nbsp;COMMUNITY.
            </h3>
            <h2 className='text-2xl md:text-4xl font-medium'>
              We Work With the
              <br className='hidden md:block' />
              <span className='text-bybikeBlue leading-3'> Best Partners</span>
            </h2>
            <p className='mt-8'>
              We are proud to collaborate with exceptional partners who share
              our vision for a sustainable and connected future. Together, we
              strive to make a positive impact on the world by revolutionizing
              transportation through innovative solutions.
            </p>
          </div>
          <div className='grid grid-cols-2 w-11/12 lg:w-[30rem] justify-center gap-8'>
            <Link
              target='_blank'
              href='https://tr.nazali.com/'
              className='flex cursor-pointer justify-center items-center'
            >
              <img src='/nazali.png' className='grayscale' alt='nazali' />
            </Link>
            <Link
              target='_blank'
              href='https://eu.okai.co/'
              className='flex cursor-pointer justify-center items-center'
            >
              <img src='/okai.png' className='grayscale' alt='nazali' />
            </Link>
            <Link
              target='_blank'
              href='https://www.twilio.com/en-us'
              className='flex cursor-pointer justify-center items-center'
            >
              <img src='/twilio.png' className='grayscale w-40' alt='twilio' />
            </Link>
            <Link
              target='_blank'
              href='https://www.parasut.com/'
              className='flex cursor-pointer justify-center items-center'
            >
              <img
                src='/parasut.png'
                className='grayscale w-48'
                alt='parasut'
              />
            </Link>
            <Link
              target='_blank'
              href='https://param.com.tr/'
              className='flex cursor-pointer justify-center items-center'
            >
              <img src='/param.png' className='grayscale w-40' alt='param' />
            </Link>
            <Link
              target='_blank'
              href='https://aws.amazon.com/'
              className='flex cursor-pointer justify-center items-center'
            >
              <img src='/aws.png' className='grayscale w-20' alt='aws' />
            </Link>
          </div>
        </div>
      </section>

      <section className='flex mt-20 md:mt-40 mb-24 flex-col items-center gap-4'>
        <h2 className='text-xl sm:text-2xl md:text-4xl font-bold'>
          OUR TEAM IS HERE TO <span className='text-bybikeBlue'>HELP</span>
        </h2>
        <Link
          href='/demo'
          className='bg-bybikeBlue text-white px-10 py-3 rounded-lg'
        >
          Get In Touch
        </Link>
      </section>
    </main>
  );
}
