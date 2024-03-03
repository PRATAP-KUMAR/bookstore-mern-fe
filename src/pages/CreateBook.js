import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function CreateBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {
        const data = {
            title,
            author,
            publishYear,
        }
        setLoading(true);
        axios.post("http://localhost:5555/books", data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch(error => {
                setLoading(false);
                console.log(error);
            });
    }

    return (
        <div>
            <Navbar link={"/"} text="CREATE BOOK" pos="left" />
            {
                loading ? null :
                    (
                        <div className='m-5 bg-slate-100'>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center justify-center'>
                                    <input
                                        type='text'
                                        placeholder='Title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className='border-2 border-sky-200 focus:border-none focus:outline-sky-500 px-4 py-2 w-full'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <input
                                        type='text'
                                        placeholder='Author'
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className='border-2 border-sky-200 focus:border-none focus:outline-sky-500 px-4 py-2 w-full'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <input
                                        type='text'
                                        placeholder='Publish Year'
                                        value={publishYear}
                                        onChange={(e) => setPublishYear(e.target.value)}
                                        className='border-2 border-sky-200 focus:border-none focus:outline-sky-500 px-4 py-2 w-full'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='p-2 bg-sky-300' onClick={handleSaveBook}>Save</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default CreateBook