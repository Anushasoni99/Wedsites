import React from 'react';
import Navbar from './Componants/Navbar';
import MainSection from './Componants/MainSection';
import QuoteSection from './Componants/QuoteSection';
import Footer from './Componants/Footer';
import './wedsite.css';
import MidSection from './Componants/MidSection';

function App() {
  return (
    <div className="body">
      <Navbar />
      <MainSection />
      <QuoteSection />
      <MidSection/>
      <Footer />
    </div>
  );
}

export default App;
