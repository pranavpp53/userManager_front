import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AddUser from './AddUser'
import ViewUser from './ViewUser';
import DemoUser from './DemoUser';

function Home() {
    const navigate=useNavigate();

    const page_to_addUser=()=>{
        navigate('/add')
    }
    const page_to_viewUser=()=>{
        navigate('/view')
    }
  return (
    <div>
         <div className="App">
    
    <div class="sidebar">
      {/* add user and show user details section in side bar */}
      <div className='start_div'>
      <button onClick={page_to_addUser} class="button-29" role="button">Add User</button>
      <button onClick={page_to_viewUser} class="button-29" role="button">View Users</button>

      </div>
      {/* home and about option in side bar */}
      <div className='end_slide'>
        <a href="/">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>


    <div className='content_div' >

      <div className='cover_div'>
        <div className='navDiv'>
        <a href='/' className='nav_fonts'><i class="fa-solid fa-house"></i> HOME</a>
          <a className='nav_fonts'>Navbar</a>
        </div>
      </div>


      <div className='content'>
      <Routes>
            <Route path='/add' element={<AddUser></AddUser>}></Route>
            <Route path='/view' element={<ViewUser></ViewUser>}></Route>
            <Route path='/' element={<DemoUser></DemoUser>}></Route>
        </Routes>
      </div>

    </div>
  </div>
    </div>
  )
}

export default Home