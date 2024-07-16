import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/Categories`);
      console.log(data);
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    }
    console.log(categories); 
  }

  return (
    <div className="container">
      <h1 className="mt-3">Category List</h1>

      <div className="d-flex justify-content-end mt-3">
      <Link to="/add-category" className="btn btn-primary">Add Category</Link>
      </div>

      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Url Handle</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.urlHandle}</td>
              <td>
                <button className="btn btn-light">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;
