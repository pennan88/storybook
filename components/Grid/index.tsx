import React, { ReactNode } from 'react'
interface GridTypes {
  children: ReactNode
  className: string
}

const Grid = ({ children, className }: GridTypes) => {
  return <div className={className}>{children}</div>
}

export default Grid
