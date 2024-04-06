import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../../client/pages/Home';
import About from '../../client/pages/About';
import Signin from '../../client/pages/Signin';
import Signup from '../../client/pages/Signup';
import Dashboard from '../../client/pages/Dashboard';
import Projects from '../../client/pages/Projects';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<Signin />}/>
        <Route path='/sign-up' element={<Signup />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;