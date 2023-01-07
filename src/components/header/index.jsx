import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='logo_wrapper'>Flex<span>bus</span></div>
      <div className='menu_container'>
        <a href='/register'>
        <span>Create an Account</span>
        </a>
      </div>
    </header>
  )
}

export default Header;
