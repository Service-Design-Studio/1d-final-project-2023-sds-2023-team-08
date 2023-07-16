import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import RecentTransactionScreen from '../views/RecentTransactionScreen';
import FTDTransactionScreen from '../views/FTDTransactionScreen';
import FTDTransactionDetails from '../views/fund transfer dispute/FTDTransactionDetails';
import RefuteDisputeReason from '../views/fund transfer dispute/RefuteDisputeReason';
import RefuteSuccess from '../views/fund transfer dispute/RefuteSuccess';
import ResolveDisputeRefundScreen from '../views/fund transfer dispute/ResolveDisputeRefundScreen';
import ReviewRefute from '../views/fund transfer dispute/ReviewRefute';
import ReviewTransfer from '../views/others/ReviewTransfer';
import EnterRecipient from '../views/paynow/EnterRecipient';
import PayNowTransactionPage from '../views/paynow/PayNowTransactionPage';
import TransactionDetailsScreen from '../views/TransactionDetailsScreen';
import TransferSuccessScreen from '../views/others/TransferSuccessScreen';
import ReviewScreen from '../views/ReviewScreen';
import SuccessScreen from '../views/SuccessScreen';
import RaiseFTDScreen from '../views/RaiseFTDScreen';
import ClipboardReader from '../views/others/Clipboard Test';
import SwipeToPay from '../views/paynow/SwipeToPay';

const Routing = () => {
  const world = { currentLocation: null };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SwipeToPay key="login" />} />
        <Route path="/login" element={<LoginScreen key="login" />} />
        <Route path="/:userID/home" element={<HomeScreen key="home"/>} />
        <Route path="/:userID/invest" element={<HomeScreen key="invest"/>} />
        <Route path="/:userID/pay" element={<HomeScreen key="pay"/>} />
        <Route path="/:userID/plan" element={<HomeScreen key="plan"/>} />
        <Route path="/:userID/more" element={<HomeScreen key="more"/>} />
        <Route path="/:userID/recenttransaction" element={<RecentTransactionScreen key="recenttransaction"/>} />
        <Route path="/:userID/recenttransaction/:accountNumber" element={<RecentTransactionScreen />} />
        <Route path="/:userID/FTDtransactionsall" element={<FTDTransactionScreen key="ftdall"/>} />
        <Route path="/:userID/review" element={<ReviewScreen key="review"/>}/>
        <Route path="/:userID/success" element={<SuccessScreen key="success"/>} />
        <Route path="/:userID/paynowrecipient" element={<EnterRecipient key="paynowrecipient"/>}/>
        <Route path="/:userID/paynow" element={<PayNowTransactionPage key="paynow"/>} />
        <Route path="/:userID/:transactionID" element={<TransactionDetailsScreen key="transactiondetail"/>}/>
        <Route path="/:userID/raiseFTD/:transactionID" element={<RaiseFTDScreen/>} key="raiseFTD"/>
        <Route path="/:userID/refunddispute/:transactionID" element={<ResolveDisputeRefundScreen key="refunddispute"/>}/>
        <Route path="/:userID/refutedispute/:transactionID" element={<RefuteDisputeReason key="refutedispute"/>}/>
      </Routes>
    </Router>
  );
};

export default Routing;
