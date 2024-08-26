import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layouts/Pages'
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
