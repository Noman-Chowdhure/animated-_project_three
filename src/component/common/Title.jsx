import React from 'react'

const Title = ({head}) => {
  return (
    <div>
        <h1 className=' text-4xl xl:text-5xl capitalize font-light border-b-[1px] py-4'>{head}</h1>
    </div>
  )
}

export default Title