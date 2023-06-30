import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen.js';
import Recenttransaction from '../views/RecentTransaction.js';
import RefuteDispute from '../views/RefuteDispute.js'
import ReviewTransfer from '../views/ReviewTransfer.js';
import TransactionDetails from '../views/TransactionDetails.js';
import Loginscreen from '../views/LoginScreen.js';
import FTDTransaction from '../views/FTDTransaction.js';
import ReturnFunds from '../views/ReturnFunds.js';
import PayNowTXn from '../views/ReturnFunds.js';
import RefuteSuccess from '../views/RefuteSuccess.js'
import FTDTransactionDetails from '../views/FTDTransactionDetails.js';
import EnterRecipient from '../views/EnterRecipient.js'
import PayNowTxn from '../views/PayNowTxn.js';

const Routing = () => {
  const world = { currentLocation: null };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FTDTransactionDetails />} />
        <Route path="/home" element={<FTDTransaction />} />
        <Route path="/invest" element={<RefuteDispute />} />
        <Route path="/pay" element={<HomeScreen/>} />
        <Route path="/plan" element={<ReviewTransfer />} />
        <Route path="/more" element={<PayNowTxn />} />
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
