import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header  from './Components/Header'
import Banner from './Components/Banner'
import Experts from './Components/Experts'
import NewsLetter from './Components/NewsLetter'
import Plans from './Components/plans'
// import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Banner/>
    <Experts/>
    <NewsLetter/>
    <Plans/>

    </>
  )
}

export default App
