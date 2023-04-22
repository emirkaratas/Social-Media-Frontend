import React from 'react'
import "./comments.scss"
import { useFormik } from 'formik'
import { Form } from 'react-bootstrap'

function Comments({ post }) {
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    onSubmit: (values, bag) => {
      console.log(values)
    }
  })
  return (
    <div className='comments-modal'>
      <div className="row">
        <Form onSubmit={formik.handleSubmit} className='d-flex align-items-center comment-form col-12 mt-2 mb-2' >
          <div className="user-info me-2">
            <div className="avatar position-relative">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            </div>
          </div>
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
        <div className="user-info d-flex flex-column align-items-start mb-2 col-12 position-relative">
          <div className='d-flex'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <div className="card relevant-comment ms-2 p-1">
              <span className='ms-2 fw-bold'>Emir Karataş</span>
              <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nemo sunt aliquid voluptate cum qui, natus quisquam laborum ad?</div>
            </div>
          </div>
          <div className='ms-1 mt-1 d-flex justify-content-between w-100'>
            <div className='ms-5 d-flex align-items-center'>
              <button className='me-2 btn btn-sm'>Beğen</button>
              <span>2s önce</span>
            </div>
            <div className='me-2 like-count'>17</div>
          </div>
        </div>
        <div className="user-info d-flex flex-column align-items-start mb-2 col-12 position-relative">
          <div className='d-flex'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <div className="card relevant-comment ms-2 p-1">
              <span className='ms-2 fw-bold'>Emir Karataş</span>
              <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nemo sunt aliquid voluptate cum qui, natus quisquam laborum ad?</div>
            </div>
          </div>
          <div className='ms-1 mt-1 d-flex justify-content-between w-100'>
            <div className='ms-5 d-flex align-items-center'>
              <button className='me-2 btn btn-sm'>Beğen</button>
              <span>2s önce</span>
            </div>
            <div className='me-2 like-count'>170</div>
          </div>
        </div>
        <div className="user-info d-flex flex-column align-items-start mb-2 col-12 position-relative">
          <div className='d-flex'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <div className="card relevant-comment ms-2 p-1">
              <span className='ms-2 fw-bold'>Emir Karataş</span>
              <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nemo sunt aliquid voluptate cum qui, natus quisquam laborum ad?</div>
            </div>
          </div>
          <div className='ms-1 mt-1 d-flex justify-content-between w-100'>
            <div className='ms-5 d-flex align-items-center'>
              <button className='me-2 btn btn-sm'>Beğen</button>
              <span>2s önce</span>
            </div>
            <div className='me-2 like-count'>2121</div>
          </div>
        </div>
        <div className="user-info d-flex flex-column align-items-start mb-2 col-12 position-relative">
          <div className='d-flex'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <div className="card relevant-comment ms-2 p-1">
              <span className='ms-2 fw-bold'>Emir Karataş</span>
              <div className='ms-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis nemo sunt aliquid voluptate cum qui, natus quisquam laborum ad?</div>
            </div>
          </div>
          <div className='ms-1 mt-1 d-flex justify-content-between w-100'>
            <div className='ms-5 d-flex align-items-center'>
              <button className='me-2 btn btn-sm'>Beğen</button>
              <span>2s önce</span>
            </div>
            <div className='me-2 like-count'>1</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments