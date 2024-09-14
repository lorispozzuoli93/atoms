import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SectionTheme from './components/SectionTheme/SectionTheme';
import Footer from './components/Footer/Footer';
import NewsSection from './components/NewsSection/NewsSection';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SectionTheme />
      <NewsSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer/>
    </>
  );
}

export default App;
