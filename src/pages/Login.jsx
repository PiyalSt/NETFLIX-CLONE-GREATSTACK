import React, { useState } from 'react'
import assets from '../assets/assets'

const Login = () => {

  const [signState, setSignState] = useState(false) // true hole show sign up page

  const handleSignState = () => {
    setSignState(!signState)
  }

  return (
    <>
      <div className='w-full h-screen bg-[url(/background_banner.jpg)] opacity-80 py-5 px-[8%]'>
        <img className='w-37.5' src={assets.logo} alt="logo" />
        <div className='w-full max-w-112.5 bg-black/75 backdrop-blur-md rounded-sm p-15 m-auto'>
          <h1 className='font-medium mb-7 text-4xl'>{signState ? 'Sign Up' : 'Sign In'}</h1>
          <form>
            {signState && <input className='w-full h-12.5 bg-[#333] text-white my-3 border-none outline-none rounded-sm py-4 px-5 text-base font-normal' type="text" placeholder='Enter Name' />}
            
            <input className='w-full h-12.5 bg-[#333] text-white my-3 border-none outline-none rounded-sm py-4 px-5 text-base font-normal' type="email" placeholder='Enter Email' />
            <input className='w-full h-12.5 bg-[#333] text-white my-3 border-none outline-none rounded-sm py-4 px-5 text-base font-normal' type="password" placeholder='Enter Password' />
            <button className='w-full border-none py-3 px-4 font-medium bg-[#e50914] text-white rounded-sm text-base mt-4 cursor-pointer'>{signState ? 'Sign Up' : 'Sign In'}</button>
            <div className='flex items-center justify-between text-[#b3b3b3] text-sm my-5'>
              <div className='flex items-center gap-2'>
                <input id='check' className='w-4 h-4 cursor-pointer' type="checkbox" />
                <label htmlFor="check" className='font-normal text-sm cursor-pointer'>Remember Me</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className='mt-10 text-gray-400'>
            {signState ? <p>Already have account? <span onClick={handleSignState} className='ml-2 text-white font-medium cursor-pointer hover:underline'>Sign In Now</span></p> : <p>New to Netflix <span onClick={handleSignState} className='ml-2 text-white font-medium cursor-pointer hover:underline'>Sign Up Now</span></p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
