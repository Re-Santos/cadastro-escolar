// import { useState } from 'react'
import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import GlobalStyle from './globoStyles'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle/>
      <div>
       <Header/>
       <Home/>
       <Footer/>
      </div>
     
    </>
  )
}

export default App
