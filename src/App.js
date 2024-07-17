import React from 'react'
import Home from './components/Home';
import About from './components/About'
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={
            <>
              <Home />
            </>
          } />


          <Route path="/bmi" element={
            <>
              <About />
            </>} />

        </Routes>
      </Router >
    </>
  )
}

export default App;
