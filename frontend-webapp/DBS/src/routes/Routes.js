import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen.js';
import Recenttransaction from '../views/RecentTransaction.js';
import FTDetails from '../views/TransactionDetails.js';
import Loginscreen from '../views/LoginScreen.js';

const Routing = () => {
  const world = { currentLocation: null };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/invest" element={<HomeScreen />} />
        <Route path="/pay" element={<HomeScreen />} />
        <Route path="/plan" element={<HomeScreen />} />
        <Route path="/more" element={<HomeScreen />} />
        <Route path="/recenttransaction" element={<Recenttransaction />} />
        <Route path="/recenttransaction/:accountNumber" element={<Recenttransaction />} />

        <Route path="/:userID/home" element={<HomeScreen />} />
        <Route path="/:userID/invest" element={<HomeScreen />} />
        <Route path="/:userID/pay" element={<HomeScreen />} />
        <Route path="/:userID/plan" element={<HomeScreen />} />
        <Route path="/:userID/more" element={<HomeScreen />} />
        <Route path="/:userID/recenttransaction" element={<Recenttransaction />} />
        <Route path="/:userID/recenttransaction/:accountNumber" element={<Recenttransaction />} />
      </Routes>
    </Router>
  );
};

export default Routing;
