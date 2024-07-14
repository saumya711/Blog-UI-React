import React, {useState, useEffect} from 'react';
import axios from 'axios';

const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    console.log("Categories"); 
  }

  return (
    <div>
      CategoryList
    </div>
  )
}

export default CategoryList
