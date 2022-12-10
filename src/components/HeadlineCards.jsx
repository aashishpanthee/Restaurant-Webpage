import React from "react";

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Cards */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='bg-black/50 absolute w-full h-full rounded-xl text-white'>
          <p className='font-bold text-[1.2rem] px-2 pt-4'>
            Sun's Out, BOGO's Out
          </p>
          <p className='px-2'>Through 8/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/2089717/pexels-photo-2089717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
      {/* Another card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='bg-black/50 absolute w-full h-full rounded-xl text-white'>
          <p className='font-bold text-[1.2rem] px-2 pt-4'>Lake Side Way</p>
          <p className='px-2'>Since 4/26</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Get Us
          </button>
        </div>
        <img
          className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/6605397/pexels-photo-6605397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
      {/* Another card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='bg-black/50 absolute w-full h-full rounded-xl text-white'>
          <p className='font-bold text-[1.2rem] px-2 pt-4'>New Subway</p>
          <p className='px-2'>Since 2010</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            For You
          </button>
        </div>
        <img
          className='max-h-[168px] md:max-h-[200px] w-full rounded-xl object-cover'
          src='https://images.pexels.com/photos/2433980/pexels-photo-2433980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
