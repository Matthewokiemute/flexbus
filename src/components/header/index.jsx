import React from 'react'

const Header = ({ content }) => {
  return (
    <header>
      <div className='logo_wrapper'>Cycle<span>box</span></div>
      <div className='menu_container'>
        <a href='/register'>
        <span>{content}</span>
        </a>
      </div>
    </header>
  )
}

export default Header;
