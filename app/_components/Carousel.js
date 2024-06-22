'use client';
import cn from 'classnames';
import React from 'react';

const Carousel = ({ activeIndex, setActiveIndex }) => {
  const data = [
    {
      title: 'Tailor Made',
      description:
        'We customize the driver application with a special color palette and designs tailored to your brand.',
    },
    {
      title: 'Online Invoice',
      description:
        'Our software infrastructure is fully integrated with Paraşüt, and users can view their invoices through the app.',
    },
    {
      title: 'Vehicle',
      description:
        'Thanks to our software infrastructure, we can quickly integrate vehicles from global manufacturers such as Segway and OKAI into the system.',
    },
    {
      title: 'Payment',
      description:
        'Instant money withdrawal is possible through our payment infrastructure. Integrations with various payment providers will be optional based on customer demand.',
    },
  ];
  const halfwayIndex = Math.ceil(data.length / 2);

  // Usd to determine the height/spacing of each item
  const itemHeight = 118;

  // Used to determine at what point an item is moved from the top to the bottom
  const shuffleThreshold = halfwayIndex * itemHeight;

  // Used to determine which items should be visible. this prevents the "ghosting" animation
  const visibleStyleThreshold = shuffleThreshold / 2;

  const determinePlacement = (itemIndex) => {
    // If these match, the item is active
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(data.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (data.length - (activeIndex - itemIndex)) * itemHeight;
      }
      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  return (
    <section className='outer-container overflow-hidden w-[21rem] sm:w-[28rem] '>
      <div className='carousel-wrapper overflow-hidden '>
        <div className='carousel-inner overflow-hidden flex flex-col '>
          {data.map((item, i) => (
            <button
              type='button mb-10'
              onClick={() => setActiveIndex(i)}
              className={cn('carousel-item', {
                active: activeIndex === i,
                visible:
                  Math.abs(determinePlacement(i)) <= visibleStyleThreshold,
              })}
              key={i}
              style={{
                transform: `translateY(${determinePlacement(i)}px)`,
              }}
            >
              <h2 className='text-2xl sm:text-4xl text-center lg:text-start mb-2'>
                {item.title}
              </h2>
              <p className='text-center lg:text-start text-sm leading-4'>
                {item.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
