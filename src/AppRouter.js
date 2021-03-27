import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import AlQuran from './pages/AlQuran/Index';
import Surat from './pages/Surat/Index';

export default function Drawer() {
  return (
    <>
      <Router>
        <div>
          <Route exact path="/" component={MainMenu} />
          <Route path="/al-quran/:surat" component={Surat} />
        </div>
      </Router>
    </>
  );
}
