import React, {useState, useEffect} from 'react';
import axios from 'axios';

const BlogPostList = () => {

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getAllBlogPosts();
  }, []);

  const getAllBlogPosts = () => {
    console.log("All Blog Posts"); 
  }
  return (
    <div>
      Blog Post List
    </div>
  )
}

export default BlogPostList
