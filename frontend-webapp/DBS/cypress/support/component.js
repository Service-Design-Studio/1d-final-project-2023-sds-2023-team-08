// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../../src/components/styles/LoginScreenStyle.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from '../../src/views/HomeScreen';
import LoginScreen from '../../src/views/LoginScreen';
import RecentTransactionScreen from '../../src/views/RecentTransactionScreen';
import FTDTransactionScreen from '../../src/views/FTDTransactionScreen';
import RefuteDisputeReason from '../../src/views/fund transfer dispute/RefuteDisputeReason';
import ResolveDisputeRefundScreen from '../../src/views/fund transfer dispute/ResolveDisputeRefundScreen';
import EnterRecipient from '../../src/views/paynow/EnterRecipient';
import PayNowTransactionPage from '../../src/views/paynow/PayNowTransactionPage';
import TransactionDetailsScreen from '../../src/views/TransactionDetailsScreen';
import ReviewScreen from '../../src/views/ReviewScreen';
import SuccessScreen from '../../src/views/SuccessScreen';
import RaiseFTDScreen from '../../src/views/RaiseFTDScreen';
import BankAccRecipientScreen from '../../src/views/bank account/BankAccRecipient';
import FuzzySearch from '../../src/views/bank account/FuzzySearch';
import BankTransferTransactionPage from '../../src/views/bank account/BankAccTransfer';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18'

Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)

export const Routing = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen key="login" />} />
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