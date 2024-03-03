import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

function EditBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setTitle(response.data.title);
                setPublishYear(response.data.publishYear);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                console.log(error);
            })
    }, [id])

    const handleEditBook = () => {
        const data = {
            title,
            author,
            publishYear,
        }
        setLoading(true);
        axios.put(`http://localhost:5555/books/${id}`, data)
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
            <Navbar link={"/"} text="EDIT BOOK" pos="left" />
            {
                loading ? null :
                    (
                        <div className='m-5'>
                            <div className='flex flex-col gap-2 bg-slate-100'>
                                <div className='flex flex-col justify-center'>
                                    <lable className="text-left text-gray-500">Title</lable>
                                    <input
                                        type='text'
                                        placeholder='Title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className='border-2 border-sky-200 focus:border-none focus:outline-sky-500 px-4 py-2 w-full'
                                    />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <lable className="text-left text-gray-500">Author</lable>
                                    <input
                                        type='text'
                                        placeholder='Author'
                                        value={author}
                                        onChange={(e) => setAuthor(e.target.value)}
                                        className='border-2 border-sky-200 focus:border-none focus:outline-sky-500 px-4 py-2 w-full'
                                    />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <lable className="text-left text-gray-500">Publish Year</lable>
                                    <input
                                        type='text'
                                        placeholder='Publish Year'
                                        value={publishYear}
                                        onChange={(e) => setPublishYear(e.target.value)}
                                        className='border-2 border-sky-200 focus:border-none focus:outline-sky-500 px-4 py-2 w-full'
                                    />
                                </div>
                                <div className='flex items-center justify-center'>
                                    <button className='p-2 bg-sky-300' onClick={handleEditBook}>Save</button>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default EditBook;