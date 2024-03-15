import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import { login } from '../API'
import { AxiosError } from 'axios'

export const useAuth = () => {
  const loginQuery = useMutation(
    'login',
    async (data: { email: string; password: string }) =>
      login({
        email: data.email,
        password: data.password
      }),
    {
      onSuccess: (data) => {
        toast.success('Login successful!')
        sessionStorage.setItem('access_token', data.accessToken)
      },
      onError: (error: AxiosError<{ detail?: [{ error: string }] | string }>) => {
        const detail = error.response?.data.detail
          ? Array.isArray(error.response.data.detail)
            ? error.response.data.detail[0].error
            : error.response.data.detail
          : undefined
        toast.error(detail ? detail : 'Something went wrong')
      }
    }
  )
  return {
    login: loginQuery.mutate
  }
}
