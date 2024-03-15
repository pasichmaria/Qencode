import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { SetNewPassword, ForgotPasswordPage, LoginPage } from './pages'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={<div>Loading...</div>} />
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/create-new-password" element={<SetNewPassword />} />
      </Routes>
    </>
  )
}
export default App
