import './App.css'
//import libreria
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from './pages/HomePage'
import DefaultLayout from './layouts/DefaultLayout'
import AboutPage from './pages/AboutPage'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <>
      {/*Mappatura rotte*/}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout/>}>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/products">
              <Route path="" element={<Products />}/>
              <Route path=":id" element={<SingleProduct />}/>
            </Route>
          </Route>         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App