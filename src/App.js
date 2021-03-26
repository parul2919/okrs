import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import Header from './components/organism/header';
import Footer from './components/organism/footer';
import Main from './components/organism/main';
import Theme from './common/css/theme';
import ContextApi from './config/contextApi';

function App() {
  return (
    <div className="App">
      <ContextApi>
        <ThemeProvider theme={Theme}>
          <Header />
          <Main />
          <Footer/>
        </ThemeProvider>
      </ContextApi>
    </div>
  );
}

export default App;