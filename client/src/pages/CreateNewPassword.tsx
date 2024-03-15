import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'

import { useSetNewPassword } from '../hooks'
import { Button, Column, Input, Row, Typography } from '../components'
import { QencodeLogo } from '../assets'

export const CreateNewPassword = () => {
  const { setNewPassword } = useSetNewPassword()

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirm: '',
      token: '',
      secret: ''
    },
    onSubmit: (values) => {
      setNewPassword(values)
    }
  })
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const secret = searchParams.get('secret')

  useEffect(() => {
    if (token && secret) {
      formik.setFieldValue('token', token)
      formik.setFieldValue('secret', secret)
    }
  }, [token, secret, formik.setFieldValue])

  return (
    <Column>
      <Row style={{ marginBottom: '80px' }}>
        <QencodeLogo />
      </Row>
      <Row style={{ marginBottom: '25px' }}>
        <Typography variant="h1" color="black">
          Create new Password?
        </Typography>
      </Row>
      <form onSubmit={formik.handleSubmit}>
        <Column style={{ marginBottom: '25px' }}>
          <Typography variant="h5" color="black">
            Password
          </Typography>
          <Input
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
          />
        </Column>
        <Column style={{ marginBottom: '20px' }}>
          <Typography variant="h5" color="black">
            Confirm Password
          </Typography>
          <Input
            placeholder="Password"
            type="password"
            value={formik.values.password_confirm}
            onChange={formik.handleChange}
            name="password_confirm"
          />
        </Column>
        <Column style={{ marginBottom: '20px' }}>
          <Button label="Reset Password" color={'blue'} />
        </Column>
      </form>
    </Column>
  )
}
