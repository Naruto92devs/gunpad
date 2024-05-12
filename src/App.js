import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Presale from "./Components/Presale";
import Footer from './Components/Footer';
import './App.css';
import './index.css';

function App() {


  return (
    <section className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="presale" element={<Presale/>} />
        </Routes>
        <Footer/>
    </section>
  );
}

export default App;