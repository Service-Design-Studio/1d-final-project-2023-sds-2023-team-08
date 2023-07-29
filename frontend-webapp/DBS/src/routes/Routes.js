import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../views/HomeScreen';
import LoginScreen from '../views/LoginScreen';
import RecentTransactionScreen from '../views/RecentTransactionScreen';
import FTDTransactionScreen from '../views/FTDTransactionScreen';
import RefuteDisputeReason from '../views/fund transfer dispute/RefuteDisputeReason';
import ResolveDisputeRefundScreen from '../views/fund transfer dispute/ResolveDisputeRefundScreen';
import EnterRecipient from '../views/paynow/EnterRecipient';
import PayNowTransactionPage from '../views/paynow/PayNowTransactionPage';
import TransactionDetailsScreen from '../views/TransactionDetailsScreen';
import ReviewScreen from '../views/ReviewScreen';
import SuccessScreen from '../views/SuccessScreen';
import RaiseFTDScreen from '../views/RaiseFTDScreen';
import BankAccRecipientScreen from '../views/bank account/BankAccRecipient';
import FuzzySearch from '../views/bank account/FuzzySearch';
import BankTransferTransactionPage from '../views/bank account/BankAccTransfer';
import LoadingScreen from '../views/others/Loader';

const Routing = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen key="login" />} />
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
        <Route path="/:userID/accounttransferrecipient" element={<BankAccRecipientScreen key="accountrecipient"/>} />
        <Route path="/:userID/accounttransferrecipient/selectbank" element={<FuzzySearch key="selectbank"/>} />
        <Route path="/:userID/accounttransfer" element={<BankTransferTransactionPage key="accounttransfer" />} />
      </Routes>
    </Router>
  );
};

export default Routing;
