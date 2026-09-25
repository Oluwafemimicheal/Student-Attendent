import React from 'react'
import { Oval } from 'react-loader-spinner'

const Spinner = () => {
  return (
    <Oval
      height={25}
      width={25}
      color="#4d87a9"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel='oval-loading'
      secondaryColor="#707ec9"
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  )
}

export default Spinner
