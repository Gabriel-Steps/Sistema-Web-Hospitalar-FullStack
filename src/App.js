import React from 'react'
import './global.css';
import Home from './Pages/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acesso from './Pages/Acesso/Acesso.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/acesso" element={<Acesso />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
