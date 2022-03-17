import React, { HtmlHTMLAttributes, ReactNode } from 'react'

export interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'Square' | 'Long' | 'Circle' | 'Small'
}

export const Button = ({ children, variant = 'Square', ...props }: Props) => {
  switch (variant) {
    case 'Square':
      return (
        <button {...props} className={`btn-outlined-blue text-blue text-hover-white ${variant}`}>
          {children}
        </button>
      )
    case 'Long':
      return (
        <button {...props} className={`btn-outlined-blue text-blue text-hover-white ${variant}`}>
          {children}
        </button>
      )
    case 'Circle':
      return (
        <button {...props} className={`btn-outlined-blue text-blue text-hover-white ${variant}`}>
          {children}
        </button>
      )
    case 'Small':
      return (
        <button {...props} className={` btn-outlined-blue text-blue text-hover-white ${variant}`}>
          {children}
        </button>
      )
    default:
      return null
  }
}
