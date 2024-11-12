import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Price from './Pages/Price/Price'
import Features from './Pages/Features/Features'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/price' element={<Price/>}/>
      <Route path='/features' element={<Features/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
