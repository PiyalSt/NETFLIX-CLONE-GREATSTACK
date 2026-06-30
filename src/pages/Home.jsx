import React from 'react'
import assets from '../assets/assets'

const Home = () => {
  return (
    <>
      <div className='relative'>
        <img className='w-full mask-linear-90 mask-linear-from-transparent mask-linear-to-black/75' src={assets.hero_banner} alt="hero_banner" />
        <div className='absolute w-full pl-[6%] bottom-0'>
          <img className='' src={assets.hero_title} alt="hero_title" />
          <p className='max-w-175 text-base mb-5'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div>
            <button> <img src={} alt="" /> Play</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
