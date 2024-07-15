import React from 'react';
import { Route, HashRouter, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Team from './pages/Team';
import About from './pages/About';
import Services from './pages/Services';
import Sitting from './pages/services/Sitting';
import Training from './pages/services/Training';
import AKC from './pages/services/AKC';
import Boarding from './pages/services/Boarding';
import PoolDays from './pages/services/PoolDays';
import Grooming from './pages/services/Grooming';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path='/services/sitting' element={<Sitting/>} />
            <Route path='/services/training' element={<Training/>} />
            <Route path='/services/akc' element={<AKC/>} />
            <Route path='/services/boarding' element={<Boarding/>} />
            <Route path='/services/pooldays' element={<PoolDays/>} />
            <Route path='/services/grooming' element={<Grooming/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/team' element={<Team/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Home/>} />
          </Routes>
        </Layout>
      </HashRouter>
      <ToastContainer autoClose={6000} />
    </>
  );
}

export default App;
