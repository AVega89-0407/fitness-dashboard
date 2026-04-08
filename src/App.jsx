import { Routes, Route } from 'react-router-dom';
import './App.css'
import MainLayout from './MainLayout/MainLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />} >
      <Route index element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
