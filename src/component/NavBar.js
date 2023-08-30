import React from 'react'
import '../style/navbar.css'


const NavBar = () => {
  return (
    <>
        <div className='nav-bar'>
          <div className='nav-left-side'>
            <p>Brand Wali Quality Bazar Wali Deal!</p>
          </div>
          <div className='nav-right-side'>
            <a>impact@grabdeal</a>
            <a>Gift Cards</a>
            <a>Help Center</a>
            <a>Sell On Grabdeal</a>
            <a>DownLoad App</a>
          </div>
        </div>
    </>
  )
}

export default NavBar;