// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutUs from './components/AboutUs/AboutUs';
import EducationTraining from './components/EducationTraining/EducationTraining';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import './styles/styles.css';


const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/education" element={<EducationTraining />} />
      <Route path="/services" element={<Services />} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
