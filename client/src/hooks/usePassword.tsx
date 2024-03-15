import { useMutation } from 'react-query'
import { resetPassword, setNewPassword } from '../API'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

export const useResetPassword = () => {
  const resetPasswordQuery = useMutation(
    'reset-password',
    async (data: { email: string }) =>
      resetPassword({
        email: data.email
      }),
    {
      onSuccess: () => {
        toast('Password reset link has been sent to your email!')
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
    resetPassword: resetPasswordQuery.mutate
  }
}

export const useSetNewPassword = () => {
  const navigate = useNavigate()
  const setNewPasswordQuery = useMutation(
    'user',
    async (data: { password: string; token: string; secret: string; password_confirm: string }) =>
      setNewPassword({
        password: data.password,
        token: data.token,
        secret: data.secret,
        password_confirm: data.password_confirm
      }),
    {
      onSuccess: () => {
        toast('Password has been reset successfully!')
        navigate('/')
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
    setNewPassword: setNewPasswordQuery.mutate
  }
}
