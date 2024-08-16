import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

const BlogPostList = () => {

  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllBlogPosts();
  }, []);

  const getAllBlogPosts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/blogPost`);
      console.log(data);
      setBlogPosts(data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setIsLoading(false);
    } 
  }
  return (
    <div className="container">
      <h1 className="mt-3">BlogPost List</h1>

      <div className="d-flex justify-content-end mt-3">
        <Link to="/admin/add-blogPost" className="btn btn-primary">Add BlogPost</Link>
      </div>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Short Description</th>
            <th>Is Visible?</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((blogPost) => (
            <tr key={blogPost._id}>
              <td>{blogPost.title}</td>
              <td>{blogPost.shortDescription}</td>
              <td>{blogPost.isVisible ? 'True' : 'False'}</td>
              {/* <td>
                <button className="btn btn-secondary" >
                  Edit
                </button>
                <button className="btn btn-danger ms-3">
                  Delete
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BlogPostList
