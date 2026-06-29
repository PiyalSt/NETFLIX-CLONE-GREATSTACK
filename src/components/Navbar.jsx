import React from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div>
        <div>
            <img src={assets.logo} alt="netflix-logo" />

            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div>
            <img src={assets.search_icon} alt="search_icon" />
            <p>Children</p>
            <img src={assets.bell_icon} alt="bell_icon" />
        </div>
      </div>
    </>
  )
}

export default Navbar
