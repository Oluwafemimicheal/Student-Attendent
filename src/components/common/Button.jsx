import React from 'react'

export const BtnPry = ({ text }) => {
  return (
    <button className="bg-white/20 border border-white/30 text-white p-1.5 px-5 font-semibold rounded-full cursor-pointer hover:opacity-90">{text}</button>
  )
}
export const BtnSec = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-800 border border-white/30 text-white p-1.5 px-5 font-semibold rounded-full cursor-pointer hover:opacity-90">{text}</button>
  )
}


