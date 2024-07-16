import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";

import Header from './layouts/Header';
import CategoryList from './pages/CategoryList';
import BlogPostList from './pages/BlogPostList';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category-list" element={<CategoryList />} />
          <Route path="/blogPost-list" element={<BlogPostList />} />
        </Routes>
      </Router>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
