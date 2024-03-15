import React, { InputHTMLAttributes, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import '../index.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string
  style?: React.CSSProperties
}

export const Input: React.FC<InputProps> = ({ icon, type = 'text', style, ...rest }) => {
  const [inputType, setInputType] = useState<string>(type || 'text')

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'))
  }

  return (
    <>
      <div className="input-container" style={style}>
        <input
          {...rest}
          type={inputType}
          className="input-field"
          style={{ backgroundImage: icon ? `url(${icon})` : 'none' }}
        />
        {type === 'password' && (
          <button className="toggle-password" onClick={togglePasswordVisibility}>
            {inputType === 'password' ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </>
  )
}
