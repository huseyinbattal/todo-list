import React from 'react'
import './Header.css'

function Header(props) {
  return (
      <div className='bg-image'>
          <div className='bg-content'>
              <div className='header-title'>YAPILACAKLAR</div>
              {props.children}
          </div>
    </div>
  )
}

export default Header