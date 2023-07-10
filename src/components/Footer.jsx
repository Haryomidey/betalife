import React from 'react';


const Footer = () => {
  return (
    <div className='w-full min-h-[30vh] bg-[#088D44] mt-5'>
      <div className='w-full flex items-center laptop:justify-between flex-wrap px-5 tablet:px-10 laptop:px-20 text-white pt-10'>
        <ul className='w-full laptop:w-[30%] flex items-center flex-col justify-center'>
          <li className='text-xl tablet:text-3xl'>Beta Life</li>
          <li className='text-xl tablet:text-3xl flex text-gray-600 items-center gap-3 mt-4'>
            <div className='h-[30px] w-[30px] flex items-center justify-center text-[15px] rounded-full bg-white cursor-pointer'>
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className='h-[30px] w-[30px] flex items-center justify-center text-[15px] rounded-full bg-white cursor-pointer'>
              <i class="fa-brands fa-instagram"></i>
            </div>
            <div className='h-[30px] w-[30px] flex items-center justify-center text-[15px] rounded-full bg-white cursor-pointer'>
              <i class="fa-brands fa-facebook-f"></i>
            </div>
          </li>
        </ul>
        <ul className='w-full laptop:w-[70%] flex tablet:justify-center laptop:justify-end flex-wrap pt-10 py-4 gap-5 mobile:gap-x-11'>
          <ul className='w-full mobile:w-[40%] tablet:w-[20%] flex flex-col gap-y-2'>
            <li className='font-bold tablet:text-lg laptop:text-xl mb-3' >ABOUT PUEBLO</li>
            <li>About us</li>
            <li>Programs</li>
            <li>Blog</li>
          </ul>
          <ul className='w-full mobile:w-[40%] tablet:w-[20%] flex flex-col gap-y-2'>
            <li className='font-bold tablet:text-lg laptop:text-xl mb-3'>OUR PEOPLE</li>
            <li>Our team</li>
            <li>Partners</li>
            <li>Members Webmail</li>
          </ul>
          <ul className='w-full mobile:w-[40%] tablet:w-[20%] flex flex-col gap-y-2'>
            <li className='font-bold tablet:text-lg laptop:text-xl mb-3'>GET INVOLVED</li>
            <li>Donate</li>
            <li>Volunteer</li>
            <li>Subscribe to mailing list</li>
            <li>Contact us</li>
          </ul>
        </ul>
      </div>
      <div className='bg-white w-full min-h-[50px] flex items-center justify-center text-[12px] tablet:text-lg py-2 px-3'>
        © Copyright 2022 Pueblo Science · Charity Registration Number: 84549 3113 RR0001
      </div>
    </div>
  )
}

export default Footer;