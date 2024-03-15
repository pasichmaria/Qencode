import React from 'react'

import '../index.css'

interface Props {
  children: React.ReactNode
  style?: React.CSSProperties
}

export const Row: React.FC<Props> = ({ children, style }) => {
  return (
    <div className={`row`} style={style}>
      {children}
    </div>
  )
}

export const Column: React.FC<Props> = ({ children, style }) => {
  return (
    <div className={`column`} style={style}>
      {children}
    </div>
  )
}
