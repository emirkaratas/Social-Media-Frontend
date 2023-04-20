import React, { useState } from 'react'
import "./post.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { FcLike } from "react-icons/fc"
import { FiShare } from "react-icons/fi"
import { GoComment } from "react-icons/go"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";
import { Modal } from 'antd';
import Comments from '../comments/Comments'
import { useFormik } from 'formik'
import Likes from '../likes/Likes'
import { Form } from 'react-bootstrap'


function Post({ post }) {
    const formik = useFormik({
        initialValues: {
            comment: "",
        },
        onSubmit: (values, bag) => {
            console.log(values)
        }
    })
    const [like, setLike] = useState(false);
    const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const isImageEmpty = post.image.length == 0

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
            {
                !isImageEmpty ? <><Swiper
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
                        <Form onSubmit={formik.handleSubmit} className='d-flex align-items-center comment-form'>
                            <Form.Group className="mb-3 mt-3 w-100">
                                <Form.Control
                                    name='comment'
                                    className='form-control me-2'
                                    as="textarea"
                                    placeholder="Yorum Yaz"
                                    onChange={formik.handleChange}
                                />
                            </Form.Group>
                            <button className="btn btn-outline-dark ms-2 h-100" type="submit">Gönder</button>
                        </Form>
                        <div className="user-info d-flex align-items-start mb-2">
                            <div className="avatar position-relative">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                                <span className="status"></span>
                            </div>
                            <div className="card relevant-comment ms-2 p-1">
                                <span className='ms-2 fw-bold'>Emir Karataş</span>
                                <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nemo sunt aliquid voluptate cum qui, natus quisquam laborum ad?</div>
                            </div>
                        </div>
                        <span className='comments all-comments' onClick={showCommentModal}>Tüm yorumları görüntüle</span>
                    </div></> :
                    <>
                        <div className="card-footer no-photo-footer">
                            <div className="d-flex justify-content-between align-items-center">
                                <span className='like-count' onClick={showLikeModal}><span className='fw-bold'>15</span> beğenme</span>
                                <span className='comments' onClick={showCommentModal}><span className='fw-bold'>117</span> Yorum</span>
                            </div>
                            <div className="container post-icon-row border-top border-bottom my-2">
                                <div className="row my-2">
                                    {
                                        like ? <button className="btn border-0 d-flex footer-icon col-4 justify-content-center p-1" onClick={handleLike}>
                                            <FcLike  className='h4 me-2 mb-0 mt-1' />
                                            <span>Beğen</span>
                                        </button> : <button className="btn border-0 d-flex footer-icon col-4 justify-content-center p-1" onClick={handleLike}>
                                            <AiOutlineHeart className='h4 me-2 mb-0 mt-1' />
                                            <span>Beğen</span>
                                        </button>
                                    }
                                    <button className="btn border-0 d-flex footer-icon col-4 justify-content-center p-1">
                                        <GoComment className='h4 me-2 mt-1' />
                                        <span>Yorum Yap</span>
                                    </button>
                                    <button className="btn border-0 d-flex footer-icon col-4 justify-content-center p-1">
                                        <FiShare className='h4 me-2 mt-1' />
                                        <span>Paylaş</span>
                                    </button>
                                </div>
                            </div>
                            <Modal title="Beğenmeler" open={isLikeModalOpen} onCancel={handleLikeCancel} footer={null} className='custom-modal' centered>
                                <Likes post={post} />
                            </Modal>
                            <Modal title="Yorumlar" open={isCommentModalOpen} onCancel={handleCommentCancel} footer={null} className='custom-modal' centered>
                                <Comments post={post} />
                            </Modal>
                            <div className="user-info d-flex align-items-start mb-2">
                                <div className="avatar position-relative">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                                    <span className="status"></span>
                                </div>
                                <div className="card relevant-comment ms-2 p-1">
                                    <span className='ms-2 fw-bold'>Emir Karataş</span>
                                    <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nemo sunt aliquid voluptate cum qui, natus quisquam laborum ad?</div>
                                </div>
                            </div>
                            <Form onSubmit={formik.handleSubmit} className='d-flex align-items-center comment-form'>
                                <Form.Group className="mb-3 mt-3 w-100">
                                    <Form.Control
                                        name='comment'
                                        className='form-control me-2'
                                        as="textarea"
                                        placeholder="Yorum Yaz"
                                        onChange={formik.handleChange}
                                    />
                                </Form.Group>
                                <button className="btn btn-outline-dark ms-2 h-100" type="submit">Gönder</button>
                            </Form>
                            <span className='comments all-comments' onClick={showCommentModal}>Tüm yorumları görüntüle</span>
                        </div>
                    </>
            }
        </div>
    )
}

export default Post