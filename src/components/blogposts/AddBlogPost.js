import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialState = {
    title: "",
    urlHandle: "",
    shortDescription: "",
    content: "",
    featuredImageUrl: "",
    publishedDate: new Date(),
    author: "",
    isVisible: false,
};

const AddBlogPost = () => {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setValues({
            ...values,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        try {
            await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/Blogs`, values);
            toast.success("Blog post created successfully");
            navigate('/admin/blogPost-list');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='container'>
            <h1 className="mt-3 text-start">Add Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="mt-2 mb-5">
                    <div className="mt-3 text-start">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            value={values.title}
                            className="form-control"
                            name="title"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3 text-start">
                        <label htmlFor="urlHandle" className="form-label">Url Handle</label>
                        <input
                            type="text"
                            value={values.urlHandle}
                            className="form-control"
                            name="urlHandle"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3 text-start">
                        <label htmlFor="shortDescription" className="form-label">Short Description</label>
                        <input
                            type="text"
                            value={values.shortDescription}
                            className="form-control"
                            name="shortDescription"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3 text-start">
                        <label htmlFor="content" className="form-label">Content</label>
                        <textarea
                            name="content"
                            id="content"
                            className="form-control"
                            value={values.content}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>

                    <div className="mt-3 text-start">
                        <label htmlFor="featuredImageUrl" className="form-label">Featured Image Url</label>
                        <input
                            type="text"
                            value={values.featuredImageUrl}
                            className="form-control"
                            name="featuredImageUrl"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3 text-start">
                        <label htmlFor="publishedDate" className="form-label">Published Date</label>
                        <input
                            type="date"
                            value={values.publishedDate}
                            className="form-control"
                            name="publishedDate"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mt-3 text-start">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input
                            type="text"
                            value={values.author}
                            className="form-control"
                            name="author"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-check mt-3 text-start">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="isVisible"
                            name="isVisible"
                            checked={values.isVisible}
                            onChange={handleChange}
                        />
                        <label className="form-check-label ms-2" htmlFor="isVisible">
                            Is Visible?
                        </label>
                    </div>

                    <div className="mt-3 text-start">
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddBlogPost;
