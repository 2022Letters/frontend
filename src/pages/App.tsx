import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LandingPage from '.';
import GlobalStyles from '../common/style/GlobalStyle';
import theme from '../common/style/theme';

import GuestHome from './GuestHome';
import GuestWrite from './GuestWrite';
import LeafSelect from './LeafSelect';
import Layout from '../components/Layout/Layout';
import Login from './login';
import Nickname from './nickname';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/nickname" element={<Nickname />} />
            <Route path="/guest" element={<GuestHome />} />
            <Route path="/guest/write" element={<GuestWrite />} />
            <Route path="/guest/select" element={<LeafSelect />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
