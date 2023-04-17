import React, { useState } from 'react'
import "./post.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { FiShare } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";


function Post({ post }) {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like)
    }

    return (
        <div className='post card mt-4'>
            <div className="card-body">
                <h5 className="card-title">
                    <Link className="d-flex align-items-center text-decoration-none" to={`/profile/${post.userId}`}>
                        <div className="circle me-2">
                            <img src={post.profilePic} alt="" />
                        </div>
                        <div className='d-flex flex-column'>
                            {post.userName}
                            <small>{post.datePosted}</small>
                        </div>
                    </Link>
                </h5>
                <p className="card-text">{post.description}</p>
            </div>
            <Swiper
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {post.image.map((image, index) => (<SwiperSlide key={post.postId * post.userId + index}><img src={image} className="card-img-top"/></SwiperSlide>))}
            </Swiper>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="footer-icons h3">
                        {
                            like ? <FcLike onClick={handleLike} /> : <AiOutlineHeart onClick={handleLike} />
                        }
                        <FiShare className='ms-2' />
                    </div>
                    <span className='comments'>117 Yorum</span>
                </div>
            </div>
        </div>
    )
}

export default Post