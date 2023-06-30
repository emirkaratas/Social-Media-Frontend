import React from 'react'
import "./profile.scss"
import Post from '../../components/post/Post'

function Profile() {
  return (
    <div className='profile p-3'>
      <div className="card">
        <div className="upper">
          <div className="img">
            <img src="https://footwearnews.com/wp-content/uploads/2022/12/GettyImages-1450127078.jpg?w=1024" className='background-image' />
            <img src="https://seeklogo.com/images/F/futbol-club-barcelona-logo-0FA85E4903-seeklogo.com.png" class="rounded-circle profile-picture" />
          </div>
        </div>
        <div className="mt-5 text-center">
          <div className="info">
            <h4 className="mb-0">Barcelona</h4>
            <span className="text-muted d-block mb-2">Barcelona, Spain</span>
          </div>
          <button className="btn follow-button">Takip Et</button>
          <div className="d-flex justify-content-center mt-4 px-4">
            <div className="stats me-5">
              <h6 className="mb-1">Takipçi</h6>
              <span>13</span>
            </div>
            <div className="stats">
              <h6 className="mb-1">Gönderi</h6>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
      <div className='text-center fw-bold h5 mt-2'>Gönderiler</div>
      </div> 
        <Post post={{
          postId: 9894,
          profilePic: "https://seeklogo.com/images/F/futbol-club-barcelona-logo-0FA85E4903-seeklogo.com.png",
          userId: 876,
          userName: "Barcelona",
          datePosted: "1 min ago",
          description: "What a game!",
          image: ["https://footwearnews.com/wp-content/uploads/2022/12/GettyImages-1450127078.jpg?w=1024", "https://images5.alphacoders.com/115/1155095.jpg"]
        }
        }
        className = "m-0" 
        />
        <Post post={{
          postId: 9894,
          profilePic: "https://seeklogo.com/images/F/futbol-club-barcelona-logo-0FA85E4903-seeklogo.com.png",
          userId: 876,
          userName: "Barcelona",
          datePosted: "1 min ago",
          description: "What a game!",
          image: ["https://footwearnews.com/wp-content/uploads/2022/12/GettyImages-1450127078.jpg?w=1024", "https://images5.alphacoders.com/115/1155095.jpg"]
        }
        }
        className = "m-0" 
        />
    </div>
  )
}

export default Profile