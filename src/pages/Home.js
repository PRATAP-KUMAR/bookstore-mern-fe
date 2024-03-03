import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackEndError from '../components/BackendError';
import NoBooks from '../components/NoBooks';
import Navbar from '../components/Navbar';

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5555/books")
            .then(response => {
                setBooks(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setLoading(false);
            })
    }, []);

    return (
        <div>
            {
                loading ? <Spinner /> :
                    error ? <BackEndError /> :
                        !books.length ? <NoBooks /> :
                            (
                                <div>
                                    <Navbar link="/books/create" text="BOOKS" pos="right" />
                                    <div className='m-5 bg-slate-100'>
                                        <table className='w-full'>
                                            <thead>
                                                <tr>
                                                    <th className='border border-sky-600'>S.No</th>
                                                    <th className='border border-sky-600'>Title</th>
                                                    <th className='border border-sky-600'>Author</th>
                                                    <th className='border border-sky-600'>Publish Year</th>
                                                    <th className='border border-sky-600'>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {books.map((book, index) => (
                                                    <tr key={book._id} className='h-8'>
                                                        <td className='border border-sky-600 text-center'>{index + 1}</td>
                                                        <td className='border border-sky-600 text-center'>{book.title}</td>
                                                        <td className='border border-sky-600 text-center'>{book.author}</td>
                                                        <td className='border border-sky-600 text-center'>{book.publishYear}</td>
                                                        <td className='border border-sky-600 text-center'>
                                                            <div className='flex justify-center gap-x-4'>
                                                                <Link to={`books/details/${book._id}`}
                                                                    className='text-green-500 hover:text-blue-500'>
                                                                    Book Details
                                                                </Link>
                                                                <Link to={`books/edit/${book._id}`}
                                                                    className='text-orange-500 hover:text-blue-500'>
                                                                    Edit Book
                                                                </Link>
                                                                <Link to={`books/delete/${book._id}`}
                                                                    className='text-red-500 hover:text-blue-500'>
                                                                    Delete Book
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )
            }
        </div >
    )
}

export default Home