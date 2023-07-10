import React, {useState} from 'react';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);

    const handleNavbar = () => {
        setNavbar(!navbar);
    }

  return (
    <div className="w-full fixed top-0 right-0 shadow-lg flex items-center justify-between h-[80px] px-4 desktop:px-24 z-[9999] bg-white">
      <h1 className='font-bold text-2xl text-[#088D44] z-10'>BetaLife</h1>
      <nav className='flex items-center'>
        <ul className='desktop:flex w-full items-center gap-10 hidden'>
            <li className='font-semibold'>HOME</li>
            <li className='font-semibold'>ABOUT</li>
            <li className='font-semibold'>PROGRAMS</li>
            <li className='font-semibold'>EVENTS</li>
            <li className='font-semibold'>BLOG</li>
            <li className='font-semibold'>VOLUNTEER</li>
            <li className='font-semibold'>CONTACT</li>
            <li className='font-semibold bg-[#F15A25] text-white px-6 py-3 rounded-full'><button>DONATE</button></li>
        </ul>
        <span className={`material-symbols-outlined desktop:hidden font-bold cursor-pointer select-none z-[10]`} onClick={handleNavbar}>
            {navbar ? 'close' : 'menu'}
        </span>
      </nav>
      <div className={`fixed top-0 ${navbar ? 'left-0' : 'left-[-100%]'} bottom-0 bg-white w-full h-screen transition-all duration-300 ease`}>
        <ul className='mt-[80px] flex flex-col items-center gap-y-4'>
            <li className='font-semibold'>HOME</li>
            <li className='font-semibold'>ABOUT</li>
            <li className='font-semibold'>PROGRAMS</li>
            <li className='font-semibold'>EVENTS</li>
            <li className='font-semibold'>BLOG</li>
            <li className='font-semibold'>VOLUNTEER</li>
            <li className='font-semibold'>CONTACT</li>
            <li className='font-semibold bg-[#F15A25] text-white px-6 py-3 rounded-full'><button>DONATE</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
