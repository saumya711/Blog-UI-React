import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from './layouts/Header';
import CategoryList from './pages/CategoryList';
import BlogPostList from './pages/BlogPostList';
import Home from './pages/Home';
import AddCategoryPage from './components/category/AddCategoryPage';
import EditCategoryPage from './components/category/EditCategoryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/category-list" element={<CategoryList />} />
          <Route path="/admin/blogPost-list" element={<BlogPostList />} />
          <Route path="/admin/add-category" element={<AddCategoryPage />} />
          <Route path="/admin/edit-category/:id" element={<EditCategoryPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
