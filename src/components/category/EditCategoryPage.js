import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'; 

const EditCategoryPage = () => {
    const [values, setValues] = useState({
        id: "",
        Name: "",
        urlHandle: "",
      });
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getSingleCategory()
    }, []);

    const getSingleCategory = async () => {
        console.log(id);
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/category/${id}`);
            setValues({ id: data.id, Name: data.name, urlHandle: data.urlHandle });
          } catch (error) {
            toast.error(error.message);
          }
    }

    const updateCategory = async (event) => {
        event.preventDefault();
        try {
          await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/category/${id}`, {
            name: values.Name,
            urlHandle: values.urlHandle
          });
          toast.success("Category updated successfully");
          navigate('/admin/category-list');
        } catch (error) {
          toast.error(error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleCancel = () => {
        navigate('/admin/category-list');
      };


  return (
    <div className="container">
        <h1 className="mt-3">Edit Category</h1>

        <form onSubmit={updateCategory}>
            <div className="mt-2">
                <div className="mt-3">
                    <label className="form-label" for="categoryId">Category Id</label>
                    <input 
                        type="text" 
                        value={values.id} 
                        className="form-control" 
                        name="id"
                        disabled
                    />
                </div>

                <div className="mt-3">
                    <label className="form-label" for="categoryName">Category Name</label>
                    <input 
                        type="text" 
                        value={values.Name} 
                        className="form-control" 
                        name="Name"
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-3">
                    <label className="form-label" for="urlHandle">Url Handle</label>
                    <input 
                        type="text" 
                        value={values.urlHandle} 
                        className="form-control" 
                        name="urlHandle"
                        onChange={handleChange}
                    />
                </div>

                <div className="mt-3">
                    <button type="submit" className="btn btn-primary">Edit</button>
                    <button type="button" className="btn btn-danger ms-3" onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        </form>
    
    </div>
  )
}

export default EditCategoryPage
