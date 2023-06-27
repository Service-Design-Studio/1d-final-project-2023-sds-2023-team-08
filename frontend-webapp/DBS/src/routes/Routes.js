import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen.js';
import Recenttransaction from '../views/RecentTransaction.js';
import RefuteDispute from '../views/RefuteDispute.js'
import ReviewTransfer from '../views/ReviewTransfer.js';
//import RouterSpy from './path-to-router-spy'

const Routing = () => {
  const world = { currentLocation: null };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/invest" element={<RefuteDispute />} />
        <Route path="/pay" element={<HomeScreen />} />
        <Route path="/plan" element={<ReviewTransfer />} />
        <Route path="/more" element={<HomeScreen />} />
        <Route path="/recenttransaction" element={<Recenttransaction />} />
        <Route path="/recenttransaction/:accountNumber" element={<Recenttransaction />} />
      </Routes>
    </Router>
  );
};

export default Routing;
