import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SectionTheme from './components/SectionTheme/SectionTheme';
import Footer from './components/Footer/Footer';
import NewsSection from './components/NewsSection/NewsSection';
import SecondSection from './components/SecondSection/SecondSection';


const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SectionTheme />
      <NewsSection />
      <SecondSection />
      <Footer/>
    </>
  );
}

export default App;
