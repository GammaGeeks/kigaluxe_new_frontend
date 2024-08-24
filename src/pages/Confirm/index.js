import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as Icon} from '../../assets/svg/envelope.svg'
import FormInput from '../../components/Form/FormInput'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../redux/actions'
import capitalize from '../../utils/capitalize'
import { RingLoader } from '../../components/Loaders'

const ConfirmSchema = Yup.object().shape({
  code: Yup.string().required('Required').min(6),
})


function Confirm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { confirm } = useSelector((state) => state.user)
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const { loading, message, error } = confirm

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    values,
  } = useFormik({
    validationSchema: ConfirmSchema,
    initialValues: {
      code: '',
    },
    onSubmit: (values) => {
      const { code } = values
      dispatch(userAction.confirm({
        code: code
      }))
    }
  });

  useEffect(() => {
    if (token && user && user.isVerified) {
      navigate('/auth/sign_in')
    }
  }, [token, navigate, user])
  
  return (
    <Container fluid>
      <Row className='signup-form'>
        <Col className='form-part-sign-in d-flex flex-column justify-content-center align-items-center gap-2'>
          {/* <h2>KigaluXe</h2> */}
          <img className='logo-container' src={require('../../assets/logo/png/color_logo_no_background.png')} alt='logo' />
          <Icon />
          <h1>Confirm your email</h1>
          <h3>Hi, {user ? user.firstname : 'user'}</h3>
          <p>Thank you for signing up with KigaluXe. Please confirm your email address <br />by filling the code sent to your email:</p>
          {
            message ? (<p className="text-success text-center"><strong>{capitalize(message)}</strong><br />Please login <Link to='/auth/sign_in'>here</Link></p>) : ''
          }
            
          {
            error ? (
              <p className="text-danger text-center"><strong>{capitalize(error)}</strong></p>
            ) : ''
          }
          <Form onSubmit={handleSubmit}>
            <FormInput
              name="code"
              label="code"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.code}
            />
            {errors.code ? <p className="error-text text-center text-danger font-italic">{errors.code}</p> : ''}
            
            {
              loading ? (
                <RingLoader height="80" width="80" />
              ) : (
                <Button className='mt-3' style={{width: '100%'}} variant='main-color' type='submit'>Confirm</Button>
            )
            }
          </Form>
          <p>You already have an account? Please login <Link to='/auth/sign_in'>here</Link></p>
        </Col>
      </Row>
    </Container>
  )
}

export default Confirm