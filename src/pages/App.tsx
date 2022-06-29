import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../common/style/GlobalStyle';
import theme from '../common/style/theme';

import LandingPage from '.';
import Main from './Main';
import GuestHome from './GuestHome';
import LeafSelect from './LeafSelect';
import Layout from '../components/Layout/Layout';
import Login from './login';
import Nickname from './nickname';
import AnniversaryManagement from './AnniversaryManagement';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/main" element={<Main />} />
            <Route path="/create" element={<AnniversaryManagement />} />
            <Route path="/edit/:postId" element={<AnniversaryManagement />} />
            <Route path="/login" element={<Login />} />
            <Route path="/login/nickname" element={<Nickname />} />
            <Route path="/guest" element={<GuestHome />} />
            <Route path="/guest/select" element={<LeafSelect />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
