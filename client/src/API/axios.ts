import axioslib from 'axios'
import { useNavigate } from 'react-router-dom'
export const axios = axioslib.create({
  baseURL: 'https://auth-qa.qencode.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

const handleUnauthorized = () => {
  const navigate = useNavigate()
  navigate('/')
}

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 422) {
      handleUnauthorized()
    }
    return Promise.reject(error)
  }
)
