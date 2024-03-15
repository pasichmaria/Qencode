import { useSearchParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useSetNewPassword } from '../hooks'
import { Button, Column, Input, Row, Typography } from '../components'
import { QencodeLogo } from '../assets'

export const SetNewPassword = () => {
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const secret = searchParams.get('secret')

  const { setNewPassword } = useSetNewPassword()
  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
    password_confirm: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Password confirm is required')
  })

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirm: '',
      token: token || '',
      secret: secret || ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setNewPassword(values)
    }
  })

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
          {formik.errors.password && (
            <div style={{ marginTop: '-20px' }}>
              <Typography variant="h5" color="red">
                {formik.errors.password}
              </Typography>
            </div>
          )}
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
          {formik.errors.password_confirm && (
            <div style={{ marginTop: '-20px' }}>
              <Typography variant="h5" color="red">
                {formik.errors.password_confirm}
              </Typography>
            </div>
          )}
        </Column>
        <Column style={{ marginBottom: '20px' }}>
          <Button label="Reset Password" color={'blue'} />
        </Column>
      </form>
    </Column>
  )
}
