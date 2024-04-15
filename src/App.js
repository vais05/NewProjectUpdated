import React from 'react';
import Events from './pages/events.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase
import Gallery from './pages/Gallery.jsx'; // Assuming the file is named 'Gallery.jsx' with PascalCase
import Header from './components/Header.jsx'; // Assuming the file is named 'Header.jsx' with PascalCase
import Footer from './components/footer.jsx'; // Assuming the file is named 'Footer.jsx' with PascalCase
import Demo from './pages/demo.jsx'; // Assuming the file is named 'Events.jsx' with PascalCase

import LandingPage from './pages/landingpage.jsx'; // Assuming the file is named 'LandingPage.jsx' with PascalCase
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/demo' element={<Demo />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
