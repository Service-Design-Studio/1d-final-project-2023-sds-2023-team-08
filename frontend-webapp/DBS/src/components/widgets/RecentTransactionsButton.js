import React from 'react';
import '../styles/HomeScreenStyles.css';

const RecentTransactionsButton = ({
    userID,
    navigate,
  }) => {

return (
  <div className="containerfour">
    <button id='transaction' className='transparent' onClick={() => navigate(`/${userID}/recenttransaction`)}>
      <div className="recenttransaction">
        <p className="recenttransactiontext">Recent Transactions</p>
        <img src='/assets/expand.png' className="expand"/>
      </div>
    </button>
  </div>
);
};

export default RecentTransactionsButton;