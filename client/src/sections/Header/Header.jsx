import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo-512.png'

function Header() {
  return (
    <header>
      <div className="header__top">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <Link to="/"><h1>CoinzData</h1></Link>
      </div>
      <h2>The most reliable place for fake cryptocurrency data</h2>
    </header>
  )
}

export default Header