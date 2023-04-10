import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaDiscord } from 'react-icons/fa'
import "./leftBar.scss"


function LeftBar() {
  return (
    <div className='leftBar p-3 col-3'>
      <div className="user">
        <Link to="/profile/sdasd" className='text-decoration-none'>
          <button className='btn'>
            <FaUser />
            <span className='d-none d-sm-inline-block ms-2'>Profil</span>
          </button>
        </Link>
      </div>
      <hr />
      <div className="links mb-3">
        <button className='btn'>
          <a href="https://discord.com/" className='text-decoration-none' target="_blank" >
            <div className="d-flex align-items-center">
              <FaDiscord className='me-2' />
              Discord
            </div>
          </a>
        </button>

      </div>
      <span>Coming Soon...</span>
      <div className="bottom">
        <ul className='row'>
          <Link to="/advertising" className='text-decoration-none col-12 col-lg-6 col-xl-4'>
            <li className='me-5'>Reklamlar</li>
          </Link>
          <Link to="/advertising" className='text-decoration-none col-12  col-lg-6 col-xl-4'>
            <li className='me-5'>Reklamlar</li>
          </Link>
          <Link className='disabled text-decoration-none col-12 col-lg-6 col-xl-4'>
            <li>Bruh ({new Date().getFullYear()})</li>
          </Link>

        </ul>
      </div>

    </div>
  )
}

export default LeftBar