import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen.js';
import Recenttransaction from '../views/RecentTransaction.js';
import TransactionDetails from '../views/TransactionDetails.js';
import ReviewRefute from '../views/ReviewRefute.js';
import SuccessfulTransfer1 from '../views/SuccessfulTransfer1.js';
import SuccessfulTransfer2 from '../views/SuccessfulTransfer2.js';

const Routing = () => {
  const world = { currentLocation: null };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/invest" element={<ReviewRefute />} />
        <Route path="/pay" element={<TransactionDetails />} />
        <Route path="/plan" element={<SuccessfulTransfer2 />} />
        <Route path="/more" element={<SuccessfulTransfer1 />} />
        <Route path="/recenttransaction" element={<Recenttransaction />} />
        <Route path="/recenttransaction/:accountNumber" element={<Recenttransaction />} />
      </Routes>
    </Router>
  );
};

export default Routing;
