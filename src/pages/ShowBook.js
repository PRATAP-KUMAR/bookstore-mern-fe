import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

function ShowBook() {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchBook = async () => {
            const book = await axios.get(`http://localhost:5555/books/${id}`);
            setBook(book.data);
            setLoading(false);
        }
        fetchBook();
    }, [id]);

    return (
        <div className='p-4'>
            <div className='flex flex-col items-center justify-center border-2 border-sky-400 p-20'>
                <div className='flex w-full justify-between'>
                    <BackButton />
                    <h2 className='text-center items-center font-bold'>{book.title}</h2>
                </div>
                {loading ? null :
                    (
                        <div className='flex flex-col justify-center items-center w-full p-4'>
                            <div>
                                <div className='my-4'>
                                    <span className='text-xl mr-4 text-gray-500'>Id</span>
                                    <span>{book._id}</span>
                                </div>
                                <div className='my-4'>
                                    <span className='text-xl mr-4 text-gray-500'>Title</span>
                                    <span>{book.title}</span>
                                </div>
                                <div className='my-4'>
                                    <span className='text-xl mr-4 text-gray-500'>Author</span>
                                    <span>{book.author}</span>
                                </div>
                                <div className='my-4'>
                                    <span className='text-xl mr-4 text-gray-500'>Publish Year</span>
                                    <span>{book.publishYear}</span>
                                </div>
                                <div className='my-4'>
                                    <span className='text-xl mr-4 text-gray-500'>Created Date</span>
                                    <span>{new Date(book.createdAt).toString()}</span>
                                </div>
                                <div className='my-4'>
                                    <span className='text-xl mr-4 text-gray-500'>Updated Date</span>
                                    <span>{new Date(book.updatedAt).toString()}</span>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ShowBook