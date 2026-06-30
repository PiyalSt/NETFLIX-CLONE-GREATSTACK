import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between fixed py-5 px-[6%] text-sm text-[#e5e5e5] bg-linear-[180deg] from-black/70 to-transparent z-10'>
        <div className='flex items-center gap-12.5'>
            <img className='w-22.5' src={assets.logo} alt="netflix-logo" />

            <ul className='flex gap-5'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>TV Shows</li>
                <li className='cursor-pointer'>Movies</li>
                <li className='cursor-pointer'>New & Popular</li>
                <li className='cursor-pointer'>My List</li>
                <li className='cursor-pointer'>Browse by Languages</li>
            </ul>
        </div>
        <div className='flex items-center gap-5'>
            <img className='w-5 cursor-pointer' src={assets.search_icon} alt="search_icon" />
            <p>Children</p>
            <img className='w-5 cursor-pointer' src={assets.bell_icon} alt="bell_icon" />

            <div className='flex items-center gap-4 relative group'>
              <img className='w-10 rounded-sm cursor-pointer' src={assets.profile_img} alt="profile_img" />
              <img className='w-4 cursor-pointer ' src={assets.caret_icon} alt="caret_icon" />

              <div className='absolute top-full right-0 w-42 bg-[#191919] py-4.5 px-5.5 rounded-xs underline z-10 hidden group-hover:block'>
                <p className='text-sm cursor-pointer '>Sign Out of Netflix</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
