import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <>
      <div className='py-16 px-[4%] flex justify-between items-start'>
        <div className='flex items-center gap-5 my-10'>
          <img className='w-10 cursor-pointer' src={assets.youtube_icon} alt="youtube_icon" />
          <img className='w-8 cursor-pointer' src={assets.instagram_icon} alt="instagram_icon" />
          <img className='w-8 cursor-pointer' src={assets.twitter_icon} alt="twitter_icon" />
          <img className='w-8 cursor-pointer' src={assets.facebook_icon} alt="facebook_icon" />
        </div>
        <ul className='grid grid-cols-4 gap-4 mb-8'>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
        </ul>
        <div className='flex flex-col gap-4'>
          <h2>Enter Email</h2>
          <input className='px-4 py-4 border border-gray-700 rounded-md w-80 text-sm' type="text" placeholder='Enter your email' />
          <button className='text-base py-2 px-4 rounded-md border border-gray-700 text-gray-400 cursor-pointer w-full hover:bg-red-600 hover:text-gray-50 hover:border-transparent duration-300 transition-all'>Send</button>
        </div>
      </div>
      <div className='text-center py-12 border-t border-gray-700'>
        <p className='text-gray-500 text-sm'>&copy; 2026-2027 Netflix, Inc. with PiyalSt - GreatStack</p>
      </div>
    </>
  )
}

export default Footer
