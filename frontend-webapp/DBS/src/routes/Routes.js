import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import RecentTransactionScreen from '../views/RecentTransactionScreen';
import FTDTransactionScreen from '../views/FTDTransactionScreen';
import RaiseFTDRecipient from '../views/fund transfer dispute/RaiseFTDRecipient';
import RaiseFTDUser from '../views/fund transfer dispute/RaiseFTDUser';
import FTDTransactionDetails from '../views/fund transfer dispute/FTDTransactionDetails';
import RefuteDisputeReason from '../views/fund transfer dispute/RefuteDisputeReason';
import RefuteSuccess from '../views/fund transfer dispute/RefuteSuccess';
import ResolveDisputeRefundScreen from '../views/fund transfer dispute/ResolveDisputeRefundScreen';
import ReviewRefute from '../views/fund transfer dispute/ReviewRefute';
import ResolveSuccess from '../views/fund transfer dispute/ResolveSuccess';
import ReviewTransfer from '../views/others/ReviewTransfer';
import TransactionDetails from '../views/others/TransactionDetails';
import EnterRecipient from '../views/paynow/EnterRecipient';
import PayNowTransactionPage from '../views/paynow/PayNowTransactionPage';
import TransactionSucess from '../views/paynow/TransactionSuccess';
import TransactionDetailsScreen from '../views/TransactionDetailsScreen';

const Routing = () => {
  const world = { currentLocation: null };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionDetails />} />
        <Route path="/home" element={<RaiseFTDRecipient />} />
        <Route path="/invest" element={<RecentTransactionScreen />} />
        <Route path="/pay" element={<FTDTransactionScreen/>} />
        <Route path="/plan" element={<HomeScreen />} />
        <Route path="/more" element={<HomeScreen />} />
        <Route path="/recenttransaction" element={<HomeScreen />} />
        <Route path="/recenttransaction/:accountNumber" element={<HomeScreen />} />
        <Route path="/FTDtransactionsall" element={<FTDTransactionScreen />} />
        <Route path="/transactionID" element={<TransactionDetailsScreen />}/>


        <Route path="/:userID/home" element={<HomeScreen />} />
        <Route path="/:userID/invest" element={<HomeScreen />} />
        <Route path="/:userID/pay" element={<HomeScreen />} />
        <Route path="/:userID/plan" element={<HomeScreen />} />
        <Route path="/:userID/more" element={<HomeScreen />} />
        <Route path="/:userID/recenttransaction" element={<RecentTransactionScreen />} />
        <Route path="/:userID/recenttransaction/:accountNumber" element={<RecentTransactionScreen />} />
        <Route path="/:userID/FTDtransactionsall" element={<FTDTransactionScreen />} />
        <Route path="/:userID/:transactionID" element={<TransactionDetailsScreen />}/>
        <Route path="/:userID/refunddispute/:transactionID" element={<ResolveDisputeRefundScreen />}/>
      </Routes>
    </Router>
  );
};

export default Routing;
