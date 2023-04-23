import React from 'react'
import { Link } from 'react-router-dom'

function Likes({ post }) {
  const myStyle = {
    width: "40px",
    height: "40px"
  }
  return (
    <div className='post-modal-likes '>
      <div className="user-info mt-3 d-flex justify-content-between">
        <div className='d-flex align-items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={myStyle} />
          <Link to={"/profile/974"} className='ms-2 fw-bold text-light text-decoration-none link-to-profile'><span >Emir Karataş</span></Link>
        </div>
        <button className='btn btn-dark'>Takip Et</button>
      </div>
      <div className="user-info mt-3 d-flex justify-content-between">
        <div className='d-flex align-items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={myStyle} />
          <Link to={"/profile/974"} className='ms-2 fw-bold text-light text-decoration-none link-to-profile'><span >Emir Karataş</span></Link>
        </div>
        <button className='btn btn-dark'>Takip Et</button>
      </div>
      <div className="user-info mt-3 d-flex justify-content-between">
        <div className='d-flex align-items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={myStyle} />
          <Link to={"/profile/974"} className='ms-2 fw-bold text-light text-decoration-none link-to-profile'><span >Emir Karataş</span></Link>
        </div>
        <button className='btn btn-dark'>Takip Et</button>
      </div>
      <div className="user-info mt-3 d-flex justify-content-between">
        <div className='d-flex align-items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={myStyle} />
          <Link to={"/profile/974"} className='ms-2 fw-bold text-light text-decoration-none link-to-profile'><span >Emir Karataş</span></Link>
        </div>
        <button className='btn btn-dark'>Takip Et</button>
      </div>
      <div className="user-info mt-3 d-flex justify-content-between">
        <div className='d-flex align-items-center'>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" style={myStyle} />
          <Link to={"/profile/974"} className='ms-2 fw-bold text-light text-decoration-none link-to-profile'><span >Emir Karataş</span></Link>
        </div>
        <button className='btn btn-dark'>Takip Et</button>
      </div>
    </div>
  )
}

export default Likes