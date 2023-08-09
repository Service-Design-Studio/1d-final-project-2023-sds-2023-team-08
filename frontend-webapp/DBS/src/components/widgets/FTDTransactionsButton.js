import React from 'react';
import '../styles/RecentTransactionStylesScreen.css';

const FTDTransactionsButton = ({
    userID,
    navigate,
  }) => {

return (
    <button className='transparent' onClick={() => navigate(`/${userID}/FTDtransactionsall`)}>
        <div className='ftd'>
            <p className='ftdtext'>Fund Transfer Dispute Transactions</p>
            <img src='/assets/expand.png' className='expand'/>
        </div>
    </button>
);
};

export default FTDTransactionsButton;