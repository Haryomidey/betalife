import React from 'react';
import Image from '../assets/images/about-us-image.png';

const AboutUs = () => {
  return (
    <div className='tablet:flex items-center justify-between gap-x-8 w-full min-h-screen tablet:max-h-screen px-3 tablet:px-10 py-6'>
        <div className='w-full tablet:w-[40%]'>
            <h1 className='about_us font-bold mb-3 tablet:w-[200px] laptop:w-[280px] laptop:text-5xl tablet:text-4xl text-xl mobile:text-2xl pr-3 pb-6'>ABOUT US</h1>
            <p className='pt-3 pb-5 tablet:pb-9 tablet:text-xl'>Pueblo Science is a registered charity founded by scientists and engineers whose mission is to advance science education across the world and create lasting solutions to poverty.</p>
            <button className='font-semibold bg-[#F15A25] text-white px-8 py-3 text-lg tablet:text-2xl tablet:py-5 flex items-center rounded-full'>Learn More</button>
        </div>
        <div className='w-full tablet:w-[40%] laptop:h-[50%] tablet:pt-3 pt-16 px-5 tablet:px-1'>
            <img src={Image} className='w-full laptop:w-[60%] h-full' alt="" />
        </div>
    </div>
  )
}

export default AboutUs;
