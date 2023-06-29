import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen.js';
import Recenttransaction from '../views/RecentTransaction.js';
import FTDForms from '../views/FTDForms_Bton.js';
import FTDForms_UnknownTxn_Bton from '../views/FTDForms_UnknownTxn_Bton.js';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/invest" element={<HomeScreen />} />
        <Route path="/pay" element={<HomeScreen />} />
        <Route path="/plan" element={<FTDForms_UnknownTxn_Bton/>} />
        <Route path="/more" element={<FTDForms />} />
        <Route path="/recenttransaction" element={<Recenttransaction />} />
        <Route path="/recenttransaction/:accountNumber" element={<Recenttransaction />} />
      </Routes>
    </Router>
  );
};

export default Routing;
