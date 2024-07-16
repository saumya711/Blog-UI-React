import React, { useState } from 'react';
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const initialState = {
    Name: "",
    urlHandle: "",
}

const AddCategoryPage = () => {

  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const craeteCategory = async (event) => {
    event.preventDefault();
    console.log(values);
    const newFormData = {
        Name: values.Name,
        urlHandle: values.urlHandle
      };
      try {
        await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/Categories`, newFormData);
        toast.success("Create a category successfully");
        navigate('/category-list');
      } catch (error) {
        toast.error(error.message);
      }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div classNameName="container">
      <h1 classNameName="mt-3">Add Category</h1>

      <form onSubmit={craeteCategory}>
        <div classNameName="mt-2">
          <div classNameName="mt-3">
            <label className="form=label">Category Name</label>
            <input 
                type="text" 
                value={values.Name} 
                className="form-control" 
                name="Name"
                onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label className="form=label">URL Handle</label>
            <input 
                type="text" 
                value={values.urlHandle} 
                className="form-control" 
                name="urlHandle"
                onChange={handleChange}
            />
          </div>

          <div className="mt-3">
            <button type="submit" className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddCategoryPage
