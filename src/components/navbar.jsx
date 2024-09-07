import React from 'react';
import Link from 'next/link';

const links = [
  {url:'/',title:"Home"},
  {url:'/about',title:"About"},
  {url:'/portfolio',title:"Portfolio"},
  {url:'/contact',title:"Contact"},
];

const Navbar = () => {

  return (
    <div className='h-full flex items-center justify-between px-3 sm:px-8 md:px-12 lg:px-20 xl:px-44'>
      {/* LOGO */}
      <div className=''>
        <Link rel="" href="/" className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
        <span className='text-white mr-1 '>Sen</span>
        <span className='w-10 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>
      {/* ResMenu */}
      <div>
        <button className=' w-10 h-8 flex flex-col justify-between'>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>
        {/* Menu List */}
        <div className='absolute top-0 left-0 w-screen '>
        {links.map((link)=>(
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
        </div>
      </div> 
    </div>
  )
}

export default Navbar
