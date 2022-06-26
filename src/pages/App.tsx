import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../common/style/GlobalStyle';
import theme from '../common/style/theme';

import GuestHome from './GuestHome';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/guest" element={<GuestHome />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
