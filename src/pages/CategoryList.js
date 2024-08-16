import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/category`);
      console.log(data);
      setCategories(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    } 
  }

  const editCategory = (id) => {
    console.log("Editing Category ID:", id);
    navigate(`/admin/edit-category/${id}`);
  }

  const deleteCategory = async(id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/category/${id}`);
        toast.success("Category deleted successfully");
        getAllCategories();
      } catch (error) {
        toast.error(error.message);
      }
    }
  }

  return (
    <div className="container">
      <h1 className="mt-3">Category List</h1>

      <div className="d-flex justify-content-end mt-3">
      <Link to="/admin/add-category" className="btn btn-primary">Add Category</Link>
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
            <tr key={category._id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>{category.urlHandle}</td>
              <td>
                <button className="btn btn-secondary" onClick={() => editCategory(category._id)}>
                  Edit
                </button>
                <button className="btn btn-danger ms-3" onClick={() => deleteCategory(category._id)}>
                  Delete
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
