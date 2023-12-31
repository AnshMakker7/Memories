import React from 'react';
import { Container} from '@material-ui/core';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter , Routes , Route , Navigate} from 'react-router-dom';
import Home from './component/Home/Home';
import Auth from './component/Auth/Auth';
import PostDetails from './component/PostDetails/PostDetails';
import UserProfile from './component/UserProfile/UserProfile.js';
import Chat from './component/Chat/Chat';

const App = ()=>{
   const user = JSON.parse(localStorage.getItem('profile'))
    return (
      <BrowserRouter>
        <Container maxWidth='xl'>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Navigate to='/posts'/>}/>
              <Route path='/posts' element={<Home/>}/>
              <Route path='/posts/search' element={<Home/>}/>
              <Route path='/posts/:id' element={<PostDetails/>}/>
              <Route path='/auth' element={!user ? <Auth/> : <Navigate to='/posts'/>}/> 
              <Route path='/user/:id' element ={<UserProfile/>}/>
              <Route path='/user/:id/:id' element ={<Chat/>}/>
            </Routes>
            
        </Container>
      </BrowserRouter>
    );
}

export default App