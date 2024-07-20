import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Blog from './components/Blog';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Blog />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
