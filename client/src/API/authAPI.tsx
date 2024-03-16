import { axios } from './axios'

export const login = async ({ email, password }: { email: string; password: string }) => {
  const response = await axios.post('/v1/auth/login', { email: email, password: password })
  return {
    accessToken: response.data.access_token,
    refreshToken: response.data.refresh_token
  }
}
