import React from 'react'
import { Link } from 'react-router-dom'
import logo from './jobstor.png'
import Footer from './footer'
export const Layout = props => {
  return (
    <div className='h-100 layout'>
      <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <a class='navbar-brand' href='#'>
          <img src='//placehold.it/160x80&amp;text=logo' />
        </a>

        <ul className='navbar-nav'>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              <Link to='/'>Home</Link>
            </a>
          </li>
        </ul>
      </nav>
      <div className='content d-flex flex-column align-items-center justify-content-center'>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
