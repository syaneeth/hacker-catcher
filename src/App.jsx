import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import Start from 'src/components/Start/Start';
import Slide1 from 'src/components/Slide1/Slide1';
import Slide2 from 'src/components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';
import Slide4 from './components/Slide4/Slide4';
import Slide5 from './components/Slide5/Slide5';

function App() {
  return (
    <HelmetProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={questTheme}>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/slide1" element={<Slide1 />} />
            <Route path="/slide2" element={<Slide2 />} />
            <Route path="/slide3" element={<Slide3 />} />
            <Route path="/slide4" element={<Slide4 />} />
            <Route path="/slide5" element={<Slide5 />} />
          </Routes>
        </ThemeProvider>
      </StyledEngineProvider>
    </HelmetProvider>
  );
}

export default App;
