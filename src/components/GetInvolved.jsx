import React from 'react';
import ImageOne from '../assets/images/get-involved-1.png';
import ImageTwo from '../assets/images/get-involved-2.png';

const GetInvolved = () => {
  return (
    <div className='w-full min-h-[70vh] py-8'>
        <h1 className='mx-auto pb-3 text-center font-bold text-2xl tablet:text-4xl laptop:text-5xl w-[200px] tablet:w-[250px] laptop:w-[320px] get_involved'>Get Involved</h1>
        
        <div className='w-full flex flex-wrap gap-7 items-center justify-center pt-10 px-3'>
            <div className='w-full tablet:w-[40%]'>
                <div className='w-full'>
                    <img src={ImageOne} alt="" />
                </div>
                <h1 className='text-center font-bold text-lg mobile:text-xl tablet:text-3xl laptop:text-4xl py-3'>Volunteer</h1>
                <p className='text-center tablet:text-lg'>Volunteers are the heart of our organization. We are always looking for dedicated volunteers who can help us with our mission in Canada and in developing countries. We strive to provide fun and meaningful opportunities for our volunteers.</p>
                <div className='w-full flex items-center justify-center pt-3'>
                    <button className='font-semibold bg-[#F15A25] text-white px-6 py-2 text-lg tablet:text-xl tablet:py-5 tablet:px-10 flex items-center rounded-full'>Learn More</button>
                </div>
            </div>
            <div className='w-full tablet:w-[40%]'>
                <div className='w-full'>
                    <img src={ImageTwo} alt="" />
                </div>
                <h1 className='text-center font-bold text-lg mobile:text-xl tablet:text-3xl laptop:text-4xl py-3'>Donate</h1>
                <p className='text-center tablet:text-lg'>Your donation will be used to purchase materials and develop activities for our local and international programs. Give children around the world the knowledge, confidence, and inspiration to follow their passion for science technology engineering and math!</p>
                <div className='w-full flex items-center justify-center pt-3'>
                    <button className='font-semibold bg-[#F15A25] text-white px-6 py-2 text-lg tablet:text-xl tablet:py-5 tablet:px-10 flex items-center rounded-full'>Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInvolved;
