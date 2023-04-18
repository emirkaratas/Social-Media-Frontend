import React, { useState } from 'react'
import "./post.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { FiShare } from "react-icons/fi"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";
import { Modal } from 'antd';
import Comments from '../comments/Comments'
import Likes from '../likes/Likes'


function Post({ post }) {
    const [like, setLike] = useState(false);
    const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

    const showLikeModal = () => {
        setIsLikeModalOpen(true);
    };

    const showCommentModal = () => {
        setIsCommentModalOpen(true);
    };

    const handleLikeCancel = () => {
        setIsLikeModalOpen(false);
    };

    const handleCommentCancel = () => {
        setIsCommentModalOpen(false);
    };

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
                {post.image.map((image, index) => (<SwiperSlide key={post.postId * post.userId + index}><img src={image} className="card-img-top" /></SwiperSlide>))}
            </Swiper>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="footer-icons h3">
                        {
                            like ? <FcLike onClick={handleLike} /> : <AiOutlineHeart onClick={handleLike} />
                        }
                        <FiShare className='ms-2' />
                    </div>
                    <span className='comments' onClick={showCommentModal}><span className='fw-bold'>117</span> Yorum</span>
                </div>
                <span className='like-count' onClick={showLikeModal}><span className='fw-bold'>15</span> beğenme</span>
                <Modal title="Beğenmeler" open={isLikeModalOpen} onCancel={handleLikeCancel} footer={null} className='custom-modal' centered>
                    <Likes post={post} />
                </Modal>
                <Modal title="Yorumlar" open={isCommentModalOpen} onCancel={handleCommentCancel} footer={null} className='custom-modal' centered>
                    <Comments post={post} />
                </Modal>
            </div>
        </div>
    )
}

export default Post