import React from 'react'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
  color?: 'black' | 'gray' | 'white' | 'red'
  children: React.ReactNode
}

export const Typography: React.FC<TypographyProps> = ({ variant, className, children, color }) => {
  const Tag = variant
  const textColor =
    color === 'black'
      ? '#060E1E'
      : color === 'gray'
      ? '#A0AEC0'
      : color === 'white'
      ? 'white'
      : 'red'

  return (
    <Tag className={className} style={{ color: textColor }}>
      {children}
    </Tag>
  )
}
