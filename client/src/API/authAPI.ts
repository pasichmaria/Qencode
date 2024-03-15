import { axios } from './axios.tsx'

export const login = async ({
  email,
  password
}: {
  email: string
  password: string
}): Promise<{ accessToken: string; refreshToken: string }> => {
  const response = await axios.post('/v1/auth/login', { email: email, password: password })
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  }
}
