import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useResetPassword } from '../hooks'
import { Button, Input, Row, Typography } from '../components'
import { QencodeLogo } from '../assets'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const { resetPassword } = useResetPassword()
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email')
        .required('Email is required')
        .min(5, 'Too short')
        .max(512, 'Too long')
        .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Invalid email')
    }),

    onSubmit: (values) => {
      resetPassword(values)
    }
  })

  return (
    <div>
      <Row style={{ marginBottom: '80px' }}>
        <QencodeLogo />
      </Row>
      <Row style={{ marginBottom: '25px' }}>
        <Typography variant="h1" color="black">
          Forgot Password?
        </Typography>
      </Row>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Enter your email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          style={{ marginBottom: '20px' }}
        />
        {formik.errors.email && (
          <div style={{ marginTop: '-20px' }}>
            <Typography variant="h5" color="red">
              {formik.errors.email}
            </Typography>
          </div>
        )}
        <Button label="Send" color={'blue'} style={{ marginBottom: '20px' }} />
        <Button label="Cancel" color="white" onClick={() => navigate('/')} />
      </form>
    </div>
  )
}
