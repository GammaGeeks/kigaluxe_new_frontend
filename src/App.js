import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layouts/Pages'
import Home from './pages/Home'
import Listings from './pages/Listings';
import Spring from './pages/Spring';
import SingleProperty from './pages/Single';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='animation' element={<Spring />} />
          <Route path='listings' element={<Listings />} />
          <Route path='property/:id' element={<SingleProperty />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
