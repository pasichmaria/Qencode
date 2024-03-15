import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Column, Divider, Input, Row, Typography } from '../components'
import { GitHubIcon, GoogleIcon, QencodeLogo } from '../assets'
import { useAuth } from '../hooks'

export const LoginPage = () => {
  const { login } = useAuth()

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required')
      .min(5, 'Too short')
      .max(512, 'Too long')
      .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, 'Invalid email'),
    password: Yup.string().required('Password is required').min(8, 'Too short').max(512, 'Too long')
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login({ email: values.email, password: values.password })
    }
  })

  return (
    <>
      <Row style={{ marginBottom: '80px' }}>
        <QencodeLogo />
      </Row>
      <Row style={{ marginBottom: '40px' }}>
        <Typography variant="h1" color="black">
          Log in to your account
        </Typography>
      </Row>
      <Row style={{ marginBottom: '30px' }}>
        <Column style={{ marginRight: '16px' }}>
          <Button icon={<GoogleIcon />} label="Google" color={'white'} />
        </Column>
        <Column>
          <Button icon={<GitHubIcon />} label="GitHub" color={'white'} />
        </Column>
      </Row>
      <Row style={{ marginTop: '30px' }}>
        <Divider width="400px" />
      </Row>

      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Work email"
          value={formik.values.email}
          type="email"
          onChange={formik.handleChange('email')}
          style={{
            marginTop: '30px'
          }}
        />
        {formik.errors.email && (
          <div style={{ marginTop: '-20px' }}>
            <Typography variant="h5" color="red">
              {formik.errors.email}
            </Typography>
          </div>
        )}

        <Input
          placeholder="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          style={{
            marginTop: '30px'
          }}
        />

        <div style={{ marginTop: '-20px' }}>
          {formik.errors.password && (
            <Typography variant="h5" color="red">
              {formik.errors.password}
            </Typography>
          )}
        </div>
        <div
          style={{
            justifyContent: 'flex-end',
            display: 'flex'
          }}
        >
          <Typography variant="h5" color="black">
            <a href="/forgot-password">Forgot your password?</a>
          </Typography>
        </div>
        <Button label="Log in to Qencode" color={'blue'} />
      </form>

      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Typography variant="h5" color="black">
          Is your company new to Qencode? <a href="/signup">Sign up</a>
        </Typography>
      </div>
    </>
  )
}
