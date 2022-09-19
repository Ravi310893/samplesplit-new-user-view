import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const Applayout = ({children}) => {


  return (
    <>
       <Navbar/>
       <div className="container">
             {children}
       </div>
    </>
  )
}

export default Applayout