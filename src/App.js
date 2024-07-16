import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from './layouts/Header';
import CategoryList from './pages/CategoryList';
import BlogPostList from './pages/BlogPostList';
import Home from './pages/Home';
import AddCategoryPage from './components/AddCategoryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/blogPost-list" element={<BlogPostList />} />
          <Route path="/add-category" element={<AddCategoryPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
