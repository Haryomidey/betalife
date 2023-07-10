import React from 'react';

import HeroImage from '../assets/images/hero-image.jpg';

const Herosection = () => {
  return (
    <div className='w-full h-screen' style={{backgroundImage: `url(${HeroImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      <div className='w-full h-full flex items-center flex-col justify-center text-center text-white px-3'>
        <h1 className='font-bold text-2xl tablet:text-5xl laptop:text-[55px] desktop:text-[65px]'>Empowering the Next Generation:</h1>
        <p className='mt-3 tablet:text-2xl laptop:text-3xl desktop:text-[40px] mb-7'>Advancing Science Education for a Brighter Tomorrow</p>
        <button className='font-semibold bg-[#F15A25] text-white px-8 py-4 text-xl tablet:text-3xl tablet:py-5 tablet:px-12 flex items-center rounded-full'>Donate</button>
      </div>
    </div>
  )
}

export default Herosection;
