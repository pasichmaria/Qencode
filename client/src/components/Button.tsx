import React from 'react'

import '../index.css'

interface ButtonProps {
  icon?: React.ReactNode
  label: string
  style?: React.CSSProperties
  color: 'blue' | 'white'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ icon, label, color, onClick, style }) => {
  const buttonColor = color === 'blue' ? '#316FEA' : 'white'
  const borderColor = color === 'blue' ? '#316FEA' : '#D3D8DC'
  const textColor = color === 'blue' ? 'white' : '#060E1E'

  return (
    <button
      type="submit"
      className="button"
      style={{
        backgroundColor: buttonColor,
        borderColor: borderColor,
        width: '100%',
        color: textColor,
        ...style
      }}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      <span className="button-label">{label}</span>
    </button>
  )
}
