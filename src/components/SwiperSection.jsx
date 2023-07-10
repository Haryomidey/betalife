import React from 'react';
import QouteImage from '../assets/images/quote.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwiperSection = () => {

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full flex flex-col items-center justify-center bg-[#088D44]"
      >
        <SwiperSlide className='w-full h-full flex flex-col items-center justify-center px-5 py-7'>
            <div className='text-white text-center'>
                <img src={QouteImage} className='w-[100px] mx-auto mb-5' alt="" />
                <div className='w-full font-bold tablet:text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aliquam iure vel odio repellat distinctio molestias dolor harum ab dignissimos inventore voluptatum quos deserunt impedit perspiciatis suscipit eligendi. Eveniet quas eum quaerat optio porro rem eius quidem corporis autem delectus dolorum, deleniti consequatur iure facilis! Maiores corporis inventore facilis rem sed similique earum asperiores autem nobis ab? Earum nesciunt similique et saepe. Ipsa repellendus at aut odio quis quos placeat dicta earum ullam totam. Consequuntur eveniet libero, aperiam nemo quibusdam voluptate beatae veritatis alias voluptas facilis, blanditiis facere illo praesentium distinctio veniam, vero debitis odit amet placeat? Dolor, esse itaque.
                </div>
                <p className='text-4xl'>-</p>
                <p className='font-bold pb-4'>Mackenzie Cox</p>
                <p>Science Teacher, Webequie First Nations</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full flex flex-col items-center justify-center px-5 py-7'>
            <div className='text-white text-center'>
                <img src={QouteImage} className='w-[100px] mx-auto mb-5' alt="" />
                <div className='w-full font-bold tablet:text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aliquam iure vel odio repellat distinctio molestias dolor harum ab dignissimos inventore voluptatum quos deserunt impedit perspiciatis suscipit eligendi. Eveniet quas eum quaerat optio porro rem eius quidem corporis autem delectus dolorum, deleniti consequatur iure facilis! Maiores corporis inventore facilis rem sed similique earum asperiores autem nobis ab? Earum nesciunt amet placeat? Dolor, esse itaque.
                </div>
                <p className='text-4xl'>-</p>
                <p className='font-bold pb-4'>Mackenzie Cox</p>
                <p>Science Teacher, Webequie First Nations</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full flex flex-col items-center justify-center px-5 py-7'>
            <div className='text-white text-center'>
                <img src={QouteImage} className='w-[100px] mx-auto mb-5' alt="" />
                <div className='w-full font-bold tablet:text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aliquam iure vel odio repellat distinctio molestias dolor harum ab dignissimos inventore voluptatum quos deserunt impedit perspiciatis suscipit eligendi. Eveniet quas eum quaerat optio porro rem eius
                </div>
                <p className='text-4xl'>-</p>
                <p className='font-bold pb-4'>Mackenzie Cox</p>
                <p>Science Teacher, Webequie First Nations</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='w-full h-full flex flex-col items-center justify-center px-5 py-7'>
            <div className='text-white text-center'>
                <img src={QouteImage} className='w-[100px] mx-auto mb-5' alt="" />
                <div className='w-full font-bold tablet:text-2xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, aliquam iure vel odio repellat distinctio molestias dolor harum ab dignissimos inventore voluptatum quos deserunt impedit perspiciatis suscipit eligendi. Eveniet quas eum quaerat optio porro rem eius quidem corporis autem delectus dolorum, deleniti consequatur iure facilis! Maiores corporis inventore facilis rem sed similique earum asperiores autem nobis ab? Earum nesciunt
                </div>
                <p className='text-4xl'>-</p>
                <p className='font-bold pb-4'>Mackenzie Cox</p>
                <p>Science Teacher, Webequie First Nations</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperSection;