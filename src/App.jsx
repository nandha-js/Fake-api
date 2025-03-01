import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
<Navbar></Navbar>
<Products></Products>
<Footer></Footer>
    </>
      
  )
}

export default App
