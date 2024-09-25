import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layouts/Pages'
import Home from './pages/Home'
import Listings from './pages/Listings';
import Services from './pages/Services';
import SingleProperty from './pages/Single';
import Search from './pages/Search';
import AboutUs from './pages/AboutUs';
import Places from './pages/Places';
import Blogs from './pages/Blogs';
import SinglePlace from './pages/SinglePlace';
import SingleBlog from './pages/SingleBlog';
import ContactUs from './pages/ContactUs';
// Function to check if the device is mobile
const isMobileDevice = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  console.log(isMobile);

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={isMobile ? <Navigate to="/listings" replace /> : <Home />} />
          <Route path='services' element={<Services />} />
          <Route path='about_us' element={<AboutUs />} />
          <Route path='listings' element={<Listings />} />
          <Route path='search' element={<Search />} />
          <Route path='property/:id' element={<SingleProperty />} />
          <Route path='places' element={<Places />} />
          <Route path='places/:id' element={<SinglePlace />} />
          <Route path='blog' element={<Blogs />} />
          <Route path='blogs/:id' element={<SingleBlog />} />
          <Route path='contact_us' element={<ContactUs />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
