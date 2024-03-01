import React from 'react';
import { Link } from 'react-router-dom';

function NoBooks() {
    return (
        <div className="h-screen w-screen bg-gray-400 flex flex-col justify-center items-center text-3xl">
            <div className='bg-rose-200 text-center p-20 rounded-3xl'>
                <p>
                    There are no books to display.
                </p>
                <Link className='text-green-500 hover:text-blue-500' to={'books/create'}>
                    Add a book now?
                </Link>
            </div>
        </div>
    )
}

export default NoBooks;