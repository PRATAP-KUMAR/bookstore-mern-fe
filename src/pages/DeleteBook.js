import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Navbar from '../components/Navbar';

function DeleteBook() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDeleteBook = () => {
        axios.delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
            }).catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }

    return (
        <div className='p-4'>
            <Navbar link={"/"} text="Delete Book" />
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400'>
                <h3 className='text-2xl'>Are you sure to delete?</h3>
                <button className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteBook}>
                    Yes, Delete it
                </button>
            </div>
        </div>
    )

}

export default DeleteBook;