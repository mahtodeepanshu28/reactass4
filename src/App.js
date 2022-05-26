import './App.css';
import React from "react";
import Home from './component/Home';
import Student from './component/Students';
import Contact from './component/contact';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <div id='back'>
      <Link to='/Home' ><input type='button' id='f' value='Home' className='btn btn-warning'/></Link>
     <Link to='/Student'  ><input type='button'  id='S' value='Student' className='btn btn-warning'/></Link>
     <Link to='/Contact'  ><input type='button'  id='T' value='Contact Us' className='btn btn-warning'/></Link></div>
       <Routes>
         <Route path='/home' element={<Home/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/contact' element={<Contact/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;