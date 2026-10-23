import React from 'react'
import { capitalize } from '../../utils/capitalize'

const StudentList = ({data}) => {
  return (
    <li className='bg-blue-500/20 backdrop-blur-md border border-blue-300 rounded-lg grid lg:grid-cols-6 items-center py-1 px-3 gap-10 font-semibold hover:bg-blue-300/70 cursor-pointer'>
      <div className='col-span-2'>{data?.fullName}</div>
      <div className={`${data?.course === 'backend' && "bg-green-500 text-white"} ${data?.course === 'full-stack' && "bg-blue-500 text-white"} ${data?.course === 'frontend' && "bg-red-400 text-white"} w-max px-2 rounded-lg text-sm`}>{capitalize(data?.course)}</div>
      <div className={`${data?.attendanceScore <= 0 ? "bg-red-400 text-white" : "bg-green-500 text-white"} w-max px-2 rounded-lg text-sm`}>{data?.attendanceScore <= 0 ? "No Attendance" : data?.attendanceScore + "%"}</div>
      <div className={`${data?.attendanceScore <= 0 ? "bg-blue-500 text-white" : "bg-green-500 text-white"} w-max px-2 rounded-lg text-sm`}>{data?.projectScore <= 0 ? "None" : data?.projectScore + "%" }</div>
      <div className='w-8 h-8 rounded-full bg-blue-800 overflow-hidden'>
        <img src={data?.image} alt="" />
      </div>
    </li>
  )
}

export default StudentList
