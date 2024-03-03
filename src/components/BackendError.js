import React from 'react'

function BackendError() {
    return (
        <div className="h-screen w-screen bg-gray-400 flex flex-col justify-center items-center text-3xl">
            <div className='bg-white text-center p-20 rounded-xl'>
                <p>
                    Welcome to Book Store.
                </p>
                <p>
                    Sorry, Backend is not connected.
                </p>
                <p>
                    Please follow the instructions from <span>
                        <a
                            href='https://github.com/PRATAP-KUMAR/bookstore-mern-be'
                            aria-label='GitHub Link'
                            target="_blank"
                            rel="noreferrer"
                            className='text-green-500 hover:text-blue-500'
                        >
                            GitHub
                        </a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default BackendError