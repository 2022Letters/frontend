import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../common/style/GlobalStyle';
import theme from '../common/style/theme';

import LandingPage from '.';
import Main from './Main';
import GuestHome from './GuestHome';
import GuestWrite from './GuestWrite';
import LeafSelect from './LeafSelect';
import Layout from '../components/Layout/Layout';
import LoginPage from './LoginPage';
import NicknameRegist from './NicknameRegist';
import SocialRedirect from './SocialLogin/SocialRedirect';
import GuestLayout from './GuestLayout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login/redirect" element={<SocialRedirect />} />
            <Route path="/login/nickname" element={<NicknameRegist />} />
            <Route path="/guest" element={<GuestHome />} />
            <Route path="/guest/write" element={<GuestWrite />} />
            <Route path="/guest/select" element={<LeafSelect />} />
            <Route path="/guest/layout" element={<GuestLayout />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
