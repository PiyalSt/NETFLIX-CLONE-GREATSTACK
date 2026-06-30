import React from 'react'
import assets from '../assets/assets'
import TitleCards from '../components/TitleCards'

const Home = () => {
  return (
    <>
      <div className='relative'>
        <img className='w-full mask-linear-90 mask-linear-from-transparent mask-linear-to-black/75' src={assets.hero_banner} alt="hero_banner" />
        <div className='absolute w-full pl-[6%] bottom-0'>
          <img className='' src={assets.hero_title} alt="hero_title" />
          <p className='max-w-175 text-base mb-5'>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>

          {/* hero buttons */}
          <div className='flex gap-3 mb-12'>
            <button className='inline-flex items-center gap-3 border-none outline-none py-2 px-5 text-base font-semibold bg-white rounded-sm cursor-pointer text-black hover:bg-white/70 duration-300 transition-all'> <img className='w-6' src={assets.play_icon} alt="play_icon" /> Play</button>
            <button className='inline-flex items-center gap-3 border-none outline-none py-2 px-5 text-base font-semibold bg-[#6d6d6eb3]/60 backdrop-blur-md rounded-sm cursor-pointer text-white hover:bg-[#6d6d6e66]/40 duration-300 transition-all'> <img className='w-6' src={assets.info_icon} alt="play_icon" /> More Info</button>
          </div>

          {/* titleCards here */}
          <div className='w-full'>
            <TitleCards />
          </div>

        </div>
      </div>

      <div className='pl-[6%]'>
        <div className='w-full'>
          <TitleCards title={"Blockbuster Movies"} />
          <TitleCards title={"Only on Netflix"} />
          <TitleCards title={"Upcoming"} />
          <TitleCards title={"Top pics for you"} />
        </div>
      </div>

    </>
  )
}

export default Home
