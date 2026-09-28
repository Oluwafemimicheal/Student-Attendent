import React from 'react'

const Dropdown = ({children, data}) => {
  return (
    <div className="bg-white/20 border border-white/30 text-white p-3 rounded-lg w-full">
      <h1>{data?.title}</h1>
    </div>
  )
}

export default Dropdown
