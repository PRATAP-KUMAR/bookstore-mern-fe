import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackEndError from '../components/BackendError';
import NoBooks from '../components/NoBooks';

function Home() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:5555/books")
            .then(response => {
                setTimeout(() => {
                    setBooks(response.data.data);
                    setLoading(false);
                }, 200)
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
                                    <div className='flex items-center justify-between px-20 py-10'>
                                        <h2>Books</h2>
                                        <Link to={'books/create'}>
                                            Add a book
                                        </Link>
                                    </div>
                                    <div className='mx-20'>
                                        <table className='w-full'>
                                            <thead>
                                                <tr>
                                                    <th className='border border-slate-600'>S.No</th>
                                                    <th className='border border-slate-600'>Title</th>
                                                    <th className='border border-slate-600'>Author</th>
                                                    <th className='border border-slate-600'>Publish Year</th>
                                                    <th className='border border-slate-600'>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {books.map((book, index) => (
                                                    <tr key={book._id} className='h-8'>
                                                        <td className='border border-slate-700 text-center'>{index + 1}</td>
                                                        <td className='border border-slate-700 text-center'>{book.title}</td>
                                                        <td className='border border-slate-700 text-center'>{book.author}</td>
                                                        <td className='border border-slate-700 text-center'>{book.publishYear}</td>
                                                        <td className='border border-slate-700 text-center'>
                                                            <div className='flex justify-center gap-x-4'>
                                                                <Link to={`books/details/${book._id}`}>
                                                                    Book Details
                                                                </Link>
                                                                <Link to={`books/edit/${book._id}`}>
                                                                    Edit Book
                                                                </Link>
                                                                <Link to={`books/delete/${book._id}`}>
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