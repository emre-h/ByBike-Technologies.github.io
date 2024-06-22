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
          LEADS
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
              <img src='/picture_emre_h.png' alt='EMRE' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>
              Emre Harbutoğlu
            </h2>
            <h3 className='text-xs text-center sm:text-base'>
              Chief Technical Officer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_eren.png' alt='EREN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Eren Dağsuyu</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Chief Operation Officer
            </h3>
          </div>
          <div className='flex flex-col sm:hidden items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_emre.png' alt='EMRE ASLAN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Emre Aslan</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Research and Development Manager
            </h3>
          </div>
        </div>
        <div className='sm:flex justify-center hidden'>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_emre.png' alt='EMRE ASLAN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Emre Aslan</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Research and Development Manager
            </h3>
          </div>
        </div>
      </section>
      <section>
        <h2 className='tracking-wider text-center mt-14 text-4xl font-medium'>
          TEAM
        </h2>
        <hr className='border border-bybikeRed' />
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 py-10'>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_berkay.png' alt='BERKAY' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Berkay Şenyüz</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Content Management Specialist
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_ata.png' alt='ATA' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>
              Ata Çorumluoğlu
            </h2>
            <h3 className='text-xs text-center sm:text-base'>
              Mechanical Engineer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_cagan.png' alt='CAGAN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Çağan Kutlay</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Mechanical Engineer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_egehan.png' alt='EGEHAN' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Egehan Ceylan</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Electronic Design Intern
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_tolga.png' alt='TOLGA' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>
              Tolga Selimoğlu
            </h2>
            <h3 className='text-xs text-center sm:text-base'>
              Mechatronics Engineer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_abdullah.png' alt='ABDULLAH' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>
              Abdullah Belikırık
            </h2>
            <h3 className='text-xs text-center sm:text-base'>
              Embedded Developer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_javad.png' alt='JAVAD' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Javad Khalilov</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Mobile Developer
            </h3>
          </div>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_vusal.png' alt='VUSAL' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>
              Vusal İsmayilov
            </h2>
            <h3 className='text-xs text-center sm:text-base'>
              Backend Developer
            </h3>
          </div>
          <div className='sm:flex hidden flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_gokdeniz.png' alt='GOKDENIZ' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Gökdeniz Çakır</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Frontend Developer
            </h3>
          </div>
        </div>
        <div className='justify-center mb-10 flex sm:hidden'>
          <div className='flex flex-col items-center'>
            <div className='w-40 md:w-60 lg:w-80 aspect-square rounded-lg overflow-hidden bg-[#585858] mb-2'>
              <img src='/picture_gokdeniz.png' alt='GOKDENIZ' />
            </div>
            <h2 className='text-sm sm:text-base font-medium'>Gökdeniz Çakır</h2>
            <h3 className='text-xs text-center sm:text-base'>
              Frontend Developer
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
