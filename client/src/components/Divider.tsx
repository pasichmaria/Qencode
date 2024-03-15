import React from 'react'

import '../index.css'
interface DividerProps {
  width: string
}

export const Divider: React.FC<DividerProps> = ({ width }) => {
  return (
    <div className="divider" style={{ width }}>
      <hr className="line" />
      <span className="text">OR</span>
    </div>
  )
}
