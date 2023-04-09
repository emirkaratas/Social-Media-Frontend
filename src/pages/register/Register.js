import React from 'react'
import { useFormik } from 'formik'
import "./register.scss"
import { Form, Button, Spinner } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import validations from './validations'
import { AiFillHome } from "react-icons/ai"
import { Link } from 'react-router-dom';

function Register() {
    const formik = useFormik({
        initialValues: {
            email: "",
            username: "",
            password: "",
            nameSurname: "",
            passwordConfirm: false,
            checkRemember: false,
        },
        validationSchema: validations,
        onSubmit: (values, bag) => {
            try {
                console.log(values)
            }
            catch (error) {
                bag.setErrors({ general: error })
            }
        }
    })

    return (
        <div className='register'>
            <div className="container h-100">
                <div className="h-100 row justify-content-center align-items-center">

                    <div className="card text-light">
                        <div className="card-header text-center">
                            <span>Kayıt Ol</span>
                        </div>
                        <hr />
                        <div className="card-body text-center">
                            <div className="d-flex justify-content-center align-items center">
                                <Form onSubmit={formik.handleSubmit} className='w-75 custom-form '>
                                    <div className='text-light text-lg h4'>
                                        {
                                            formik.errors.general && (
                                                formik.errors.general
                                            )
                                        }
                                    </div>
                                    <div className="row mt-0">
                                        <div className="col-lg-6 col-xs-12 mb-0">
                                            <Form.Group>
                                                <FloatingLabel
                                                    controlId="username"
                                                    label="Kullanıcı Adını Giriniz"
                                                    className="mb-3 text-dark"
                                                >
                                                    <Form.Control
                                                        size="sm"
                                                        name='username'
                                                        type="username"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={formik.touched.username && formik.errors.username}
                                                        isValid={formik.touched.username && !formik.errors.username}
                                                        placeholder="Username"
                                                    />
                                                    {formik.errors.username && formik.touched.username && <div className='text-danger text-start'>{formik.errors.username}</div>}
                                                </FloatingLabel>
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6 col-xs-12 mb-0">
                                            <Form.Group>
                                                <FloatingLabel
                                                    controlId="nameSurname"
                                                    label="İsim ve Soyisim Giriniz"
                                                    className="mb-3 text-dark"
                                                >
                                                    <Form.Control
                                                        name='nameSurname'
                                                        type="nameSurname"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={formik.touched.nameSurname && formik.errors.nameSurname}
                                                        isValid={formik.touched.nameSurname && !formik.errors.nameSurname}
                                                        placeholder="NameSurname"
                                                    />
                                                    {formik.errors.nameSurname && formik.touched.nameSurname && <div className='text-danger text-start'>{formik.errors.nameSurname}</div>}
                                                </FloatingLabel>
                                            </Form.Group>
                                        </div>
                                        <div className="col-12">
                                            <Form.Group className="mb-3">
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
                                                        isValid={formik.touched.email && !formik.errors.email}
                                                        placeholder="name@example.com"
                                                    />
                                                    {formik.errors.email && formik.touched.email && <div className='text-danger text-start'>{formik.errors.email}</div>}
                                                </FloatingLabel>
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6 col-xs-12">
                                            <Form.Group className="mb-3">
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
                                                        isValid={formik.touched.password && !formik.errors.password}
                                                        placeholder="Password"
                                                    />
                                                    {formik.errors.password && formik.touched.password && <div className='text-danger text-start'>{formik.errors.password}</div>}
                                                </FloatingLabel>
                                            </Form.Group>
                                        </div>
                                        <div className="col-lg-6 col-xs-12">
                                            <Form.Group className="mb-3">
                                                <FloatingLabel
                                                    controlId="passwordConfirm"
                                                    label="Şifrenizi Tekrar Giriniz"
                                                    className="mb-3 text-dark"
                                                >
                                                    <Form.Control
                                                        name='passwordConfirm'
                                                        type="password"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        isInvalid={formik.touched.passwordConfirm && formik.errors.passwordConfirm}
                                                        isValid={formik.touched.passwordConfirm && !formik.errors.passwordConfirm}
                                                        placeholder="Password"
                                                    />
                                                    {formik.errors.passwordConfirm && formik.touched.passwordConfirm && <div className='text-danger text-start'>{formik.errors.passwordConfirm}</div>}
                                                </FloatingLabel>
                                            </Form.Group>
                                        </div>
                                        <div className='text-start mb-2'>
                                            <Link to="/login" className='btn btn-sm btn-dark'>Hesabınız Var Mı?</Link>
                                        </div>
                                        <Form.Group className="mb-3 text-start">
                                            <Form.Check type="checkbox" label="Beni Hatırla" name='checkRemember' id="checkRemember" onChange={formik.handleChange} />
                                        </Form.Group>
                                        {formik.isValid ?
                                            <Button variant="dark" type="submit" className='w-100'>
                                                {formik.isSubmitting ? <Spinner></Spinner> : <div>Kayıt Ol</div>}
                                            </Button>
                                            :
                                            <Button variant="dark" type="submit" className='w-100' disabled>
                                                Kayıt Ol
                                            </Button>
                                        }
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register