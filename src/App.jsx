<<<<<<< HEAD
import './App.css'

function App() {
  
  return (
    <>
   
    </>
  )
=======
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Form from './components/Form.jsx';
import Preview from './components/Preview.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/preview' element={<Preview />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
>>>>>>> 1dd1282c61c5d53bea7115381df70b02b983bdf2
}

export default App;
