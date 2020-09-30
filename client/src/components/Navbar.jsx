import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">личный кабинет</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/profile">профиль</NavLink></li>
          <li><NavLink to="/line">линии</NavLink></li>
          <li><NavLink to="/call">звонки</NavLink></li>
          <li><NavLink to="/bill">счета</NavLink></li>

          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
