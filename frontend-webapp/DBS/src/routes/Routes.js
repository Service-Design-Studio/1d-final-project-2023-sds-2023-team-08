import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen.js';
import Recenttransaction from '../views/RecentTransaction.js';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/invest" element={<HomeScreen />} />
        <Route path="/pay" element={<HomeScreen />} />
        <Route path="/plan" element={<HomeScreen />} />
        <Route path="/more" element={<HomeScreen />} />
        <Route path="/recenttransaction" element={<Recenttransaction />} />
        <Route path="/recenttransaction/:accountNumber" element={<Recenttransaction />} />
      </Routes>
    </Router>
  );
};

export default Routing;
