import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import { useDarkModeContext } from '../../contexts/DarkModeContext'
function Navbar() {
  const { toggle, darkMode } = useDarkModeContext()

  return (
    <nav class="navbar navbar-expand-lg p-3">
      <div class="container">
        <div class="navbar-header">
          <div className="d-flex align-items-center">
            <span className='h4 me-4'>Bruh</span>
            <Link to="/">
              <AiFillHome className='h4' />
            </Link>
            {
              !darkMode ? <BsFillMoonFill className='ms-4 h5' onClick={toggle} /> : <BsFillSunFill className='ms-4 h5' onClick={toggle} />
            }
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNavbar">
          <form className="d-flex ms-0 ms-lg-5 mt-4 mt-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Ara" />
            <button className="btn btn-outline-dark" type="submit">Ara</button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          asdsad
        </div>

      </div>
    </nav>
  )
}

export default Navbar