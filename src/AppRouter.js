import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import AlQuran from './pages/AlQuran/Index';
import Hadist from './pages/Hadist/Index';
import Doa from './pages/Doa/Index';
import Surat from './pages/Surat/Index';

export default function Drawer() {
  return (
    <>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/al-quran" component={AlQuran} />
          <Route exact path="/hadist" component={Hadist} />
          <Route exact path="/doa" component={Doa} />
          <Route path="/al-quran/:surat" component={Surat} />
        </div>
      </Router>
    </>
  );
}
