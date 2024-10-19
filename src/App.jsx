import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Render Header outside of Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* You can add more routes here for other components/pages */}
        </Routes>
        <Footer /> {/* Render Footer outside of Routes */}
      </Router>
    </div>
  );
}

export default App;
