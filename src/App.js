import './style/style.css';
import React from 'react';
import InfoText from './components/InfoText';
import Footer from './components/Footer';
import Aside from './components/Aside';
import AboutMe from './components/AboutMe';
import Jobs from './components/Jobs';
// import Qualifications from './components/Qualifications'



function App() {
  return (
    <body>
      <InfoText /> 
      <Aside />
      <AboutMe />
      <Jobs />
      <Footer />
    </body>
  );
}

export default App;