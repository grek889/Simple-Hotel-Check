import React from 'react'
import './Header.scss'
import logout from '../../assets/img/Logout.svg'

export const Header = () => {
  return (
    <header>
        <div>
            <h2 className='name'>Simple Hotel Check</h2>
        </div>
        <div className='logout-container'>
            <h4 className='logout'>Выйти</h4>
            <img src={logout} alt="logout" />
        </div>
    </header>
  )
}
