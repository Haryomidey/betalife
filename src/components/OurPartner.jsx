import React from 'react';
import ImageOne from '../assets/images/sponsor-1.png';
import ImageTwo from '../assets/images/sponsor-2.png';
import ImageThree from '../assets/images/sponsor-3.png';
import ImageFour from '../assets/images/sponsor-4.png';
import ImageFive from '../assets/images/sponsor-5.png';
import ImageSix from '../assets/images/sponsor-6.png';
import ImageSeven from '../assets/images/sponsor-7.png';
import ImageEight from '../assets/images/sponsor-8.png';


const OurPartner = () => {
  return (
    <div className='px-3 min-h-screen pb-10'>
        <h1 className='pt-10 text-center text-2xl font-bold tablet:text-4xl laptop:text-5xl'>Our Partners</h1>
        <p className='text-center pt-8 text-md tablet:text-xl'>We are grateful to our partners who believe in Pueblo Science and make our work possible through their generous support.</p>
        <div className='flex flex-wrap justify-center pt-16 pb-7 gap-4 w-full'>
            <img src={ImageOne} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageTwo} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageThree} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageFour} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageFive} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageSix} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageSeven} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
            <img src={ImageEight} className='w-full tablet:w-[45%] laptop:w-[25%] desktop:w-[20%]' alt="" />
        </div>
        <div className='w-full flex items-center justify-center pt-6'>
            <button className='font-semibold bg-[#F15A25] text-white px-6 py-2 text-lg tablet:text-xl tablet:py-5 tablet:px-10 flex items-center rounded-full'>Learn More</button>
        </div>
    </div>
  )
}

export default OurPartner;