import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    const obj = props;
    const { link, text, pos } = obj;

    return (
        <div className='grid grid-cols-3 items-center text-center bg-black text-white py-5'>
            {pos === 'right' ? <p className='text-2xl'>Welcome to Book Store</p> : <Link className='text-green-500 hover:text-blue-500' to={link}>Back</Link>}
            <p className='text-3xl'>{text}</p>
            {pos === 'left' ? <p></p> : <Link className='text-green-500 hover:text-blue-500' to={link}>Add a Book</Link>}
        </div>
    )
}

export default Navbar