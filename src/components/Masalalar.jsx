import React from 'react'
import Header from '../Header'
import Footer from './Footer'
import MainM from './MainM'
import { Link } from 'react-router-dom'

const Masalalar = () => {
  return (

    <div className="wrapper">
      <Header/>
      <MainM/>
      <Footer/>
    </div>
    
  )
}

export default Masalalar