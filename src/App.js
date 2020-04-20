import React from 'react';
import Main from './Router';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from '../src/components/Nav';
import Footer from '../src/components/footer';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
