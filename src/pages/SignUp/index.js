import React, { useEffect } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import FacebookAuthButton from '../../components/FacebookAuthButton'
import GoogleAuthButton from '../../components/GoogleAuthButton'

import './index.scss'
import FormInput from '../../components/Form/FormInput'
import FormCheckPart from '../../components/Form/FormCheck'
import { Link, useNavigate } from 'react-router-dom'
import { userAction } from '../../redux/actions';
import { RingLoader } from '../../components/Loaders'
import capitalize from '../../utils/capitalize'
// import isObject from '../../utils/isObject'
// import looper from '../../utils/loopObject'


const genderOptions = ["male", "female", "not specified"]

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Your email is equired"),
  firstname: Yup.string().required("Your firstname is required").label('Firstname'),
  lastname: Yup.string().required("Your lastname is required").label('Lastname'),
  phone: Yup.number().typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(10)
    .required('A phone number is required'),
  // gender: Yup.string()
  //   .oneOf(genderOptions, 'Please select a valid option')
  //   .required('Radio selection is required'),
  dob: Yup.date()
    .required('Date of Birth is required')
    .min(new Date(1930, 1, 1), 'Date of Birth must be after January 1, 2000')
    .max(new Date(), 'Date cannot be in the future').label('Date of Birth'),
  address: Yup.string().required("Your address is required").label('address'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  passwordConfirmation: Yup.string()
    .equals([Yup.ref("password")], "Passwords don't match")
    .required('Required'),
});


function SinUp() {
  const dispatch = useDispatch()
  const { signup } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const { loading, message, error } = signup;
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))


  // Using Formik
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
  } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: {
      firstname: '',
      email: '',
      phone: '',
      lastname: '',
      gender: '',
      password: '',
      passwordConfirmation: ''
    },
    onSubmit: (values) => {
        console.log(values)
        const {
            firstname,
            lastname,
            email,
            phone,
            gender,
            password
        } = values
        dispatch(userAction.signup({
            firstname,
            lastname,
            email,
            phone,
            gender,
            password
        }))
    }
  });

  
  useEffect(() => {
    if (token && user && !user.isVerified) {
      navigate('/auth/confirm')
    }
  }, [token, navigate, user])
  
  useEffect(() => {
    if (token && user && user.isVerified) {
      navigate('/')
    }
  }, [token, navigate, user])

  return (
    <Container fluid>
      <Row className='signup-form'>
        <Col className='form-part-sign-up d-flex flex-column justify-content-center align-items-center gap-4'>
          <div className='logo-container d-flex justify-content-center'>
            <img src={require('../../assets/logo.png')} alt='logo' />
          </div>
          <h2>Create an Account</h2>

          <Row>
            <Col className='d-flex justify-content-center gap-3'>
              <FacebookAuthButton text='Sign up with Facebook' page='sign_up' />
              <GoogleAuthButton text='Sign up with Google' page='sign_up' />
            </Col>
          </Row>
          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <span className='or'>or</span>
            </Col>
            {
              message ? (
              <p className="text-success text-center">
                <strong>{capitalize(message)}</strong>
                <br />
                <Link to='/auth/confirm'>Please confirm your email address</Link>
              </p>) : ''
            }
            {/* {
              signup.errors ? (<p className="text-danger text-center"><strong>{signup.errors}</strong></p>) : ""
            } */}
            
            {
              error ? (
                <p className="text-danger text-center"><strong>{capitalize(error)}</strong></p>
              ) : ''
            }

          </Row>
          <Form onSubmit={handleSubmit}>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='firstname'
                  placeholder='Firstname'
                  label='Firstname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstname}
                />
                {errors.firstname ? <p className="error-text text-center text-danger font-italic">{errors.firstname}</p> : ''}
              </Col>
              <Col>
                <FormInput
                  name='lastname'
                  placeholder='Lastname'
                  label='Lastname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastname}
                />
              {errors.lastname ? <p className="error-text text-center text-danger font-italic">{errors.lastname}</p> : ''}
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='email'
                  placeholder='Email Address'
                  label='Email Address'
                  type='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email ? <p className="error-text text-center text-danger font-italic">{errors.email}</p> : ''}
              </Col>
              <Col>
                <FormInput
                  name='phone'
                  placeholder='Phone Number'
                  label='Phone Number'
                  type='tel'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
                {errors.phone ? <p className="error-text text-center text-danger font-italic">{errors.phone}</p> : ''}
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Form.Group className="d-flex justify-content-evenly mt-4">
                {
                  genderOptions.map(option => (
                    <FormCheckPart
                      inline
                      key={option}
                      type='radio'
                      label={capitalize(option)}
                      checked={values.gender === option}
                      name="gender"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={option}
                    />
                  ))
                }
                {/* <FormCheckPart
                  inline
                  type='radio'
                  label='Female'
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='female'
                />
                <FormCheckPart
                  inline
                  type='radio'
                  label='Not specified'
                  name="gender"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='none'
                /> */}
              </Form.Group>
              {errors.gender ? <p className="error-text text-center text-danger font-italic">{errors.gender}</p> : ''}
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='dob'
                  placeholder='Date of Birth'
                  label='Date of Birth'
                  type='date'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dob}
                />
                {errors.dob ? <p className="error-text text-center text-danger font-italic">{errors.dob}</p> : ''}
              </Col>
              <Col>
                <FormInput
                  name='address'
                  placeholder='Fill Address'
                  label='Fill Address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                {errors.address ? <p className="error-text text-center text-danger font-italic">{errors.address}</p> : ''}
              </Col>
            </Row>
            <Row className='d-flex justify-content-center align-items-center gap-3'>
              <Col>
                <FormInput
                  name='password'
                  placeholder='Password'
                  label='Password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password ? <p className="error-text text-center text-danger font-italic">{errors.password}</p> : ''}
              </Col>
              <Col>
                <FormInput
                  name='passwordConfirmation'
                  placeholder='Confirm Password'
                  label='Confirm Password'
                  type='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                />
                {errors.passwordConfirmation ? <p className="error-text text-center text-danger font-italic">{errors.passwordConfirmation}</p> : ''}
              </Col>
            </Row>
            <Row>
              <Col className='d-grid my-5'>
                {
                  loading ? (
                    <RingLoader height="80" width="80" />
                  ) : (
                    <Button variant='main-color' type='submit' className='btn-sign-up'>
                      Sign Up
                    </Button>
                  )
                }
              </Col>
            </Row>
          </Form>
        </Col>
        <Col className='text-part-sign-up d-flex flex-column justify-content-center align-items-center gap-4'>
          <h2>Welcome to KigaluXe</h2>
          <p className='px-5 text-center'>
            Welcome to the world of KigaluXe Interior Design, where your dream living space becomes a reality.
          </p>
          <Button variant='main-color'  onClick={() => navigate('/auth/sign_in')} className='btn-sign-in'>
            Sign In
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default SinUp