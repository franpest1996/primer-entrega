import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ListaProductos from './Components/ListaProductos/Lista.Productos'
import ItemDetailContainer from './Components/Containers/ItemDetailsContainers/ItemDetailContainer'
import ItemListContainer from './Components/Containers/ItemListContainer/ItemListContainer'


function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route index path='productos' element={<ItemListContainer/>}/>
            <Route path='info' element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
