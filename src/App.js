import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components for different sections of the website

import AboutUs from './components/AboutUs/AboutUs';
import BlogPage from './components/BlogPage/BlogPage';
import CodeSamples from './components/CodeSamples/CodeSamples';
import ContactUs from './components/ContactUs/ContactUs';
import DomainSpecific from './components/DomainSpecific/DomainSpecific';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Languages from './components/Languages/Languages';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Technologies from './components/Technologies/Technologies';

import './styles/styles.css';

// Routes

const routes = [
  { path: '/', element: <Main /> },
  { path: '/about', element: <AboutUs /> },
  { path: '/blogpage', element: <BlogPage/> },
  { path: '/codesamples', element: <CodeSamples />},
  { path: '/contact', element: <ContactUs /> },
  { path: '/domainspecific', element: <DomainSpecific /> },
  { path: '/education', element: <Education /> },
  { path: '/languages', element: <Languages />},
  { path: '/portfolio', element: <Portfolio /> },
  { path: '/projects', element: <Projects /> },
  { path: '/resume', element: <Resume /> },
  { path: '/services', element: <Services /> },
  { path: '/skills', element: <Skills /> },
  { path: '/technologies', element: <Technologies />},
 
];

const App = () => (
  <Router>
    <Header />
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
    <Footer />
  </Router>
);

export default App;
