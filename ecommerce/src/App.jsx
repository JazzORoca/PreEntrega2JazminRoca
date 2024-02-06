
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto';
import Error from './components/Error';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
    <BrowserRouter>

    <Navbar/>

    <Routes>

      <Route path='/' element={<ItemListContainer/>}/>

      <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

      <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
      <Route path='/contacto' element={<Contacto />} >/</Route>

      <Route path='*' element={<Error/>}/>
      
    </Routes>

    <Footer/>
    
  </BrowserRouter>


    </>
  )
}

export default App
