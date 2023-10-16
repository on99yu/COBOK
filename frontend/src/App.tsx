import React from 'react';
import MainNavbar from './components/Main.Navbar'
import {Routes, Route} from 'react-router-dom';

import GlobalStyle  from './theme';
import Main from './pages/Main.page';
import { AutoTrading } from './pages/AutoTrading.page';


const App:React.FC = ()=> {
  return (
    <>
      <GlobalStyle/>
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/AutoTrading" element={<AutoTrading/>}/>
      </Routes>
    </>
  );
}

export default App;
