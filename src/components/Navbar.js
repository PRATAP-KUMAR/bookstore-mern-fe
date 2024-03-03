import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
    const obj = props;
    const { link, text } = obj;

    return (
        <div className='grid grid-cols-3 items-center text-center bg-orange-500 sticky-top-0'>
            <Link to={link}>Back</Link>
            <p className='text-3xl'>{text}</p>
        </div>
    )
}

export default Navbar