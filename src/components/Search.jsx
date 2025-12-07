import React from 'react'

export const Search = ({text, placeholder, onChange}) => {

  return (
    <>
     <input
     type= {text}
     placeholder= {placeholder}
     onChange= {onChange}
     className='flex w-1/2 h-12 mx-auto bg-neutral-700 text-neutral-50 px-3 rounded-md mt-20'
     />
    </>
  )
}
