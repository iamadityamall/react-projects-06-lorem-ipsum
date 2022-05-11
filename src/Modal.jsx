import React from 'react'

const Modal = ({title, message, closeModal}) => {
  return (
    <section className='flex flex-col p-2 font-mono bg-gray-200 font-bold shadow-lg'>
        <h1 className='text-center p-2'>{title}</h1>
        <p className='text-center p-1'>message: {message}</p>
        <button className='bg-red-400' onClick={closeModal}>close</button>
    </section>
  )
}

export default Modal