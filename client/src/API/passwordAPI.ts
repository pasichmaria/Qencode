import { axios } from './axios.tsx'

export const resetPassword = async ({ email }: { email: string }): Promise<void> => {
  await axios.post('/v1/auth/password-reset', {
    email: email,
    redirect_url: window.location.host + '/create-new-password'
  })
}

export const setNewPassword = async ({
  password,
  token,
  secret,
  password_confirm
}: {
  password: string
  token: string
  secret: string
  password_confirm: string
}): Promise<void> => {
  await axios.post('/v1/auth/password-set', {
    token: token,
    secret: secret,
    password: password,
    password_confirm: password_confirm
  })
}
