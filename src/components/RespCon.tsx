import React from 'react'

const RespCon:React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <>
       <div className="container mx-auto p-0 sm:p-0 lg:p-0 bg-slate-900 shadow-md rounded-lg">
      {children}
    </div>
    </>
  )
}

export default RespCon
