import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dapp from "./Components/Dapp";
import Footer from './Components/Footer';
import './App.css';
import './index.css';

function App() {


  return (
    <section className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="dapp" element={<Dapp/>} />
        </Routes>
        <Footer/>
    </section>
  );
}

export default App;