// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import MissionVision from './components/MissionVision';
// import Programs from './components/Programs';
// // import About from './components/About';
// import Contacts from './components/Contacts';
// import Footer from './components/Footer';
// import './styles.css';

// const App = () => {
//   return (
//     <>
//       <Navbar /> 

//       <Routes>
//         <Route path="/" element={
//           <>
//             <Hero />
//             <MissionVision />
//             <Programs />
//           </>
//         } />
//         <Route path="/programs" element={<Programs />} />
//         <Route path="/contacts" element={<Contacts />} />
//       </Routes>

//       <Footer /> 
//     </>
//   );
// };

// export default App;


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Programs from './components/Programs';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './styles.css';

const Home = () => {
  return (
    <>
      <Hero />
      <section className="introduction">
        <h2>Welcome to Christian Soul Winners Theological College</h2>
        <p>
          Christian Soul Winners Theological College is dedicated to equipping leaders for global ministry. 
          Since 2014, we have been preparing servants of God to reach the nations with the gospel of Jesus Christ.
        </p>
      </section>
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<MissionVision />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;