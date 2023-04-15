import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { RiNotification4Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import "./navbar.scss"
import { useDarkModeContext } from '../../contexts/DarkModeContext'
function Navbar() {
  const { toggle, darkMode } = useDarkModeContext()

  return (
    <nav className="navbar navbar-expand-lg p-3 border-bottom border-2">
      <div className="container">
        <div className="navbar-header">
          <div className="d-flex align-items-end">
            <span className='h4 me-4 mb-0'>Bruh</span>
            <Link to="/">
              <AiFillHome className='h4 mb-0' />
            </Link>
            {
              !darkMode ? <BsFillMoonFill className='ms-4 h5 mb-0' onClick={toggle} /> : <BsFillSunFill className='ms-4 h4 mb-0' onClick={toggle} />
            }
          </div>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
          <form className="d-flex ms-0 ms-lg-5 mt-4 mt-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Ara" />
            <button className="btn btn-outline-dark" type="submit">Ara</button>
          </form>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <div className="d-flex">
            <Link to="/" className='text-decoration-none me-2'>
              <button className='btn btn-outline-dark d-flex align-items-center'>
                <RiNotification4Fill />
                <span className='d-none d-sm-inline-block ms-2'>Bildirimler</span>
              </button>
            </Link>
            <Link to="/profile/sdasd" className='text-decoration-none'>
              <button className='btn btn-outline-dark d-flex align-items-center'>
                <FaUser />
                <span className='d-none d-sm-inline-block ms-2'>Profil</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar