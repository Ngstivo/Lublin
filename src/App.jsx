import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Tourist from './pages/Tourist';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tourist" element={<Tourist />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
