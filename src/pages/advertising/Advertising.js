import React from 'react'
import "./advertising.scss"
import { Link } from 'react-router-dom'

function Advertising() {
    return (
        <div className='advertising'>
            <div className="container h-100">
                <div className="h-100 row justify-content-center align-items-center">
                    <div className="h-50 card text-light">
                        <div className="card-header text-center">
                            Reklamlandırma
                        </div>
                        <hr />
                        <div className="card-body text-start">
                            <div className="d-flex flex-column justify-content-center align-items center">
                                <li>Sayfamızı Herhangi Bir Şekilde Reklam Olmadan Tamamen Ücretsiz Bir Şekilde Kullanabilirsiniz!</li>
                                <Link to="/" className='link-ad mb-4'>
                                    <button className='btn btn-dark'>Ana Sayfa</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Advertising