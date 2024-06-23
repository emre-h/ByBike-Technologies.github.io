import React from 'react';

const page = () => {
  return (
    <main>
      {/* TITLE */}
      <section className='bg-bybikeBlack text-white flex flex-col gap-2 justify-center items-center h-80'>
        <h1 className='text-3xl md:text-5xl font-medium'>
          <span className='text-bybikeBlue'>OUR</span> TEAM
        </h1>
        <h3 className='italic text-base text-center w-11/12 sm:w-auto md:text-xl tracking-widest'>
          Young and determined, with one goal in mind.
        </h3>
      </section>

      <section>
        <h2 className='tracking-wider text-center mt-14 text-4xl font-medium'>
          Team
        </h2>
        <hr className='border border-bybikeBlue mt-4 mb-14' />

        <div className='max-w-screen grid grid-cols-2 sm:grid-cols-3 gap-8 py-10'>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_burak.png' alt='BURAK' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Burak Karataş</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Chief Executive Officer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/uyanik.jpeg' alt='EMRE' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>
              Burak Uyanık
            </h2>
            <h3 className='text-xs text-center sm:text-base'>
              Backend Developer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/ibrahimtan.png' alt='EREN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>İbrahim Tan</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Backend Developer
            </h3>
          </div>
          <div className='flex flex-col sm:hidden items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_emre.png' alt='EMRE ASLAN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Berkin Özdemir</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Frontend and Mobile (Flutter) Developer
            </h3>
          </div>
        </div>
        <div className='sm:flex justify-center hidden'>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/berkin.jpeg' alt='EMRE ASLAN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Berkin Özdemir</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Frontend and Mobile (Flutter) Developer
              <br></br>
            </h3>
          </div>
          
        </div>

         
      </section>
    </main>
  );
};

export default page;
