import React, { ReactNode } from 'react'

interface GridTypes {
  children: ReactNode
  className: 'grid-col-1' | 'grid-col-2' | 'grid-col-3'
}

const index = ({ children, className }: GridTypes) => {
  return <div className={className}>{children}</div>
}

export default index
