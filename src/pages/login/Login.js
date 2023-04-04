import React from 'react'
import { useFormik } from 'formik'
import "./login.scss"
import { Alert, Form, Button, Spinner } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import validations from './validations'

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkRemember: false,
    },
    validationSchema: validations,
    onSubmit: (values, bag) => {
      try {
        throw "Bu Maile Ait Kullanıcı Bulunmuyor"
        // console.log(values)
      }
      catch (error) {
        bag.setErrors({ general: error })
      }
    }
  })

  return (
    <div className='login'>
      <div className="container h-100">
        <div className="h-100 row justify-content-center align-items-center">
          <div className="h-50 card text-light">
            <div className="card-header text-center">
              Giriş Yap
            </div>
            <hr />
            <div className="card-body text-center">
              <div className="d-flex justify-content-center align-items center">
                <Form onSubmit={formik.handleSubmit} className='w-75 custom-form'>
                  <div className='text-light text-lg h4'>
                    {
                      formik.errors.general && (
                        formik.errors.general
                      )
                    }
                  </div>
                  <Form.Group className="mb-3 mt-3">
                    <FloatingLabel
                      controlId="email"
                      label="Email Adresinizi Giriniz"
                      className="mb-3 text-dark"
                    >
                      <Form.Control
                        name='email'
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.email && formik.errors.email}
                        placeholder="name@example.com"
                      />
                      {formik.errors.email && formik.touched.email && <div className='text-danger text-start'>{formik.errors.email}</div>}
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3 mt-3">
                    <FloatingLabel
                      controlId="password"
                      label="Şifrenizi Giriniz"
                      className="mb-3 text-dark"
                    >
                      <Form.Control
                        name='password'
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isInvalid={formik.touched.password && formik.errors.password}
                        placeholder="Password"
                      />
                      {formik.errors.password && formik.touched.password && <div className='text-danger text-start'>{formik.errors.password}</div>}
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group className="mb-3 text-start">
                    <Form.Check type="checkbox" label="Beni Hatırla" name='checkRemember' id="checkRemember" onChange={formik.handleChange} />
                  </Form.Group>
                  {formik.isValid ?
                    <Button variant="dark" type="submit" className='w-100'>
                      {formik.isSubmitting ? <Spinner></Spinner> : <div>Giriş Yap</div>}
                    </Button>
                    :
                    <Button variant="dark" type="submit" className='w-100' disabled>
                      Giriş Yap
                    </Button>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login