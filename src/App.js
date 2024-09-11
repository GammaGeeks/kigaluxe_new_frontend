import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layouts/Pages'
import Home from './pages/Home'
import Listings from './pages/Listings';
import Services from './pages/Services';
import SingleProperty from './pages/Single';
import Search from './pages/Search';
import AboutUs from './pages/AboutUs';
import Places from './pages/Places';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='services' element={<Services />} />
          <Route path='about_us' element={<AboutUs />} />
          <Route path='listings' element={<Listings />} />
          <Route path='search' element={<Search />} />
          <Route path='property/:id' element={<SingleProperty />} />
          <Route path='places' element={<Places />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
