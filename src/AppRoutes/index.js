import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import Login from '../Userside/Pages/Login/Login';
import Home from '../Userside/Pages/Home/Home';
import Splitsongs from '../Userside/Pages/Splitsongs/Splitsongs';
import Freestems  from '../Userside/Pages/Freestems/Freestems';
import Blog from '../Userside/Pages/Blog/Blog';
import Contact from '../Userside/Pages/Contact/Contact';
import About from  '../Userside/Pages/About/About';

const index = () => {


  return (
    <div>
        <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/splitsongs' element={<Splitsongs/>}/>
                <Route path='/freestem' element={<Freestems/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contactus' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
              </Routes>
        </BrowserRouter>
    </div>
  )
}

export default index