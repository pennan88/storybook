import React, { ReactNode } from 'react'

interface GridTypes {
  children: ReactNode
  className: string
}

const GridChild = ({ children, className }: GridTypes) => {
  return <div className={className}>{children}</div>
}

export default GridChild
