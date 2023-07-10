import React from 'react';
import Image from '../assets/images/our-impact.jpg';
import ImageOne from '../assets/images/our-impact-1.jpg';
import ImageTwo from '../assets/images/our-impact-2.jpeg';
import ImageThree from '../assets/images/our-impact-3.jpeg';

const OurImpact = () => {
  return (
    <div>
        <div className="w-full" style={{backgroundImage: `url(${Image})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
            <div className='w-full h-full bg-[#2d2c2c77] min-h-[50vh] flex flex-col items-center pb-8'>
                <h1 className='pt-7 text-white text-2xl font-bold tablet:text-4xl laptop:text-5xl'>Our Impact</h1>
                <div className='flex justify-center flex-wrap gap-x-3 gap-y-6 mt-6 tablet:mt-8 laptop:mt-10 desktop:mt-16 text-white uppercase w-full'>
                    <div className='flex items-center tablet:gap-y-4 laptop:gap-y-7 w-full tablet:w-[45%] laptop:w-[33.33%] desktop:w-[18%] text-md mobile:text-lg tablet:text-2xl laptop:text-3xl text-center flex-col font-bold'>
                        <p>4500</p>
                        <p>TEACHERS TRAINED</p>
                    </div>
                    <div className='flex items-center tablet:gap-y-4 laptop:gap-y-7 w-full tablet:w-[45%] laptop:w-[33.33%] desktop:w-[18%] text-md mobile:text-lg tablet:text-2xl laptop:text-3xl text-center flex-col font-bold'>
                        <p>450,000</p>
                        <p>CHILDREN IMPACTED</p>
                    </div>
                    <div className='flex items-center tablet:gap-y-4 laptop:gap-y-7 w-full tablet:w-[45%] laptop:w-[33.33%] desktop:w-[18%] text-md mobile:text-lg tablet:text-2xl laptop:text-3xl text-center flex-col font-bold'>
                        <p>800</p>
                        <p>VOLUNTEERS</p>
                    </div>
                    <div className='flex items-center tablet:gap-y-4 laptop:gap-y-7 w-full tablet:w-[45%] laptop:w-[33.33%] desktop:w-[18%] text-md mobile:text-lg tablet:text-2xl laptop:text-3xl text-center flex-col font-bold'>
                        <p>7</p>
                        <p>COUNTRIES</p>
                    </div>
                    <div className='flex items-center tablet:gap-y-4 laptop:gap-y-7 w-full tablet:w-[45%] laptop:w-[33.33%] desktop:w-[18%] text-md mobile:text-lg tablet:text-2xl laptop:text-3xl text-center flex-col font-bold'>
                        <p>250</p>
                        <p>EXPERIMENTS DEVELOPED</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='min-h-[60vh] bg-white w-full flex flex-wrap justify-center gap-8 px-4 my-6'>
            <div className='w-full tablet:w-[40%] laptop:w-[30%] impact_parent'>
                <div className='overflow-hidden w-full h-[250px]'>
                    <img src={ImageOne} className='w-full h-full object-cover impact_image transition-all ease duration-200' alt="" />
                </div>
                <div className='mt-2 mobile:text-xl tablet:text-2xl laptop:text-3xl flex items-center text-gray-600 h-[40px]'>About Us</div>
                <span className='impact_child tablet:text-lg laptop:text-xl'>Learn more about us and our story.</span>
            </div>
            <div className='w-full tablet:w-[40%] laptop:w-[30%] impact_parent'>
                <div className='overflow-hidden w-full h-[250px]'>
                    <img src={ImageTwo} className='w-full h-full object-cover impact_image transition-all ease duration-200' alt="" />
                </div>
                <div className='mt-2 mobile:text-xl tablet:text-2xl laptop:text-3xl flex items-center h-[40px]'>Programs</div>
                <span className='impact_child tablet:text-lg laptop:text-xl'>Learn more about our programs.</span>
            </div>
            <div className='w-full tablet:w-[40%] laptop:w-[30%] impact_parent'>
                <div className='overflow-hidden w-full h-[250px]'>
                    <img src={ImageThree} className='w-full h-full object-cover impact_image transition-all ease duration-200' alt="" />
                </div>
                <div className='mt-2 mobile:text-xl tablet:text-2xl laptop:text-3xl flex items-center h-[40px]'>Events</div>
                <span className='impact_child tablet:text-lg laptop:text-xl'>Discover our upcoming and recent events.</span>
            </div>
        </div>
    </div>
  )
}

export default OurImpact;
