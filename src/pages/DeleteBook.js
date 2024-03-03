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
        <div>
            <Navbar link={"/"} text="DELETE BOOK" pos="left" />
            {loading ? <Spinner /> : null}
            <div className='m-5 flex flex-col items-center justify-center gap-8 py-5 bg-slate-100'>
                <h3 className='text-2xl'>Are you sure to delete?</h3>
                <button className='p-4 bg-red-600 text-white w-fit'
                    onClick={handleDeleteBook}>
                    Yes, Delete it
                </button>
            </div>
        </div>
    )

}

export default DeleteBook;