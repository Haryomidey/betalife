import React from 'react';
import ImageOne from '../assets/images/newsfeed-1.png';
import ImageTwo from '../assets/images/newsfeed-2.jpeg';
import ImageThree from '../assets/images/newsfeed-3.png';


const NewsFeed = () => {
  return (
    <div className='w-full min-h-[60vh] py-16 px-3 laptop:px-20 bg-[#F1F5FE]'>
        <h1 className='about_us font-bold mb-3 tablet:w-[200px] laptop:w-[280px] tablet:text-4xl text-xl mobile:text-2xl pr-3 pb-6 laptop:mx-0'>Newsfeed</h1>
        <p className='pt-16 pb-5 laptop:mx-0'>Featured</p>
        <div className='flex flex-wrap items-center justify-center laptop:justify-between gap-x-5 gap-y-8 tablet:gap-y-10 tablet:gap-x-2'>
            <div className='w-full tablet:w-[60%] laptop:w-[220px] desktop:w-[380px]'>
                <div className='w-full h-[300px]'>
                    <img src={ImageOne} className='w-full h-full object-cover' alt="" />
                </div>
                <h2 className='pt-2 w-full text-[12px] mobile:text-sm tablet:text-lg'>Inspiring Emily Chong to Pursue Science</h2>
                <p className='text-[10px] mobile:text-[13px] text-gray-500 pt-3'>May 2, 2023</p>
            </div>
            <div className='w-full tablet:w-[60%] laptop:w-[220px] desktop:w-[380px]'>
                <div className='w-full h-[300px]'>
                    <img src={ImageTwo} className='w-full h-full object-cover' alt="" />
                </div>
                <h2 className='pt-2 w-full text-[12px] mobile:text-sm tablet:text-lg'>Outstanding Volunteer: Hamzah Khan</h2>
                <p className='text-[10px] mobile:text-[13px] text-gray-500 pt-3'>Apr 21, 2023</p>
            </div>
            <div className='w-full tablet:w-[60%] laptop:w-[220px] desktop:w-[380px]'>
                <div className='w-full h-[300px]'>
                    <img src={ImageThree} className='w-full h-full object-cover' alt="" />
                </div>
                <h2 className='pt-2 w-full text-[12px] mobile:text-sm tablet:text-lg'>Outstanding Volunteer: Natasha Girdharry</h2>
                <p className='text-[10px] mobile:text-[13px] text-gray-500 pt-3'>Oct 19, 2022</p>
            </div>
        </div>
        <button className='font-semibold bg-[#F15A25] mt-8 tablet:mx-36 laptop:mx-0 tablet:mt-20 text-white px-6 py-3 rounded-full'>SEE MORE</button>
    </div>
  )
}

export default NewsFeed;
