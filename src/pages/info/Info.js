import React from 'react'
import "./info.scss"
import { Link } from 'react-router-dom'
import { FaDiscord, FaPatreon } from 'react-icons/fa'

function Info() {
  return (
    <div className='info-page'>
      <div className="container h-100">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="h-50 card text-light">
            <div className="card-header text-center">
              Hakkımızda
            </div>
            <hr />
            <div className="card-body text-start">
              <div className="d-flex flex-column justify-content-center align-items center">
                <li>Bizler reklamsız ve ücretsiz uygulamalar gerçekleştirmek için bir araya gelmiş genç bir ekibiz.</li>
                <li>Yaptığımız işi desteklemek isterseniz aşağıdaki linkten bağış gerçekleştirebilirsiniz.</li>
                <div className='link-ad mb-4 row'>
                  <Link to="/" className='mb-3'>
                    <button className='btn btn-dark'>Ana Sayfa</button>
                  </Link>
                  <div>
                    <button className='btn btn-dark me-2'>
                      <a href="https://discord.com/" className='text-decoration-none' target="_blank" >
                        <div className="d-flex align-items-center text-light">
                          <FaDiscord className='me-2' />
                          Discord
                        </div>
                      </a>
                    </button>
                    <button className='btn btn-dark'>
                      <a href="/" className='text-decoration-none' target="_blank" >
                        <div className="d-flex align-items-center text-light">
                          <FaPatreon className='me-2' />
                          Patreon
                        </div>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info