import React, { useState, useEffect } from 'react';
import '../App.css';

import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { firestore } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogsRef = collection(firestore, "blogData"); // Modify "formData" if your collection name is different
      const querySnapshot = await getDocs(blogsRef);

      const fetchedBlogs = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setBlogs(fetchedBlogs);
    };

    getBlogs();
  }, []);

  return (
    <div>
      <div className="sticky">
        <Navbar />
      </div>
      <div className="blog-container">
        <div className="cover">
          <div className="blogs disp-flex-col">

          {blogs.slice().reverse().map((blog) => (
  <div key={blog.id} className="the-blog">
    <img src={`images/${blog.blogImage}`} alt="hero" className="blog-thumbnail" />
    <h1>{blog.blogTitle}</h1>
    <p>{blog.blogContent}</p>
  </div>
))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
