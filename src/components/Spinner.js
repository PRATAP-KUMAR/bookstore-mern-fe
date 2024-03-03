import React from 'react'

function Spinner() {
    return (
        <>
            <div className='grid grid-cols-1 items-center text-center bg-black text-white py-5'>
                <p className='text-3xl'>Welcome to Books Store - MERN STACK</p>
            </div>
            <div className='flex my-20 items-center justify-center'>
                Loading...
            </div>
        </>
    )
}

export default Spinner;