import { Routes, Route } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Statistik from './pages/Statistik';
import Settings from './pages/Settings';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />} >
      <Route index element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/statistik' element={<Statistik />} />
      <Route path='/settings' element={<Settings />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
