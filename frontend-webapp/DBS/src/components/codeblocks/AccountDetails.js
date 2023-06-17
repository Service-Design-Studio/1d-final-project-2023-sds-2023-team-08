import React from 'react';
import '../styles/AccountDetailsStyles.css';
import accountJson from '../../testdata/account.json';

const AccountDetails = () => {
    const userAccounts = accountJson[0].account;
    
    return (
        <div className='containeracc'>
          {userAccounts.map((account, index) => (
            <button onClick={() => {}} className='transparent'>
                <div className='account' key={index}>
                <div className='accountheader'>
                    <p className='accountname'>
                    {account['account type']}
                    </p>
                    <img src={require('../assets/expand.png')} className='accountexpand' />
                </div>
                <p className='accountnumber'>
                    {account['account number']}
                </p>
                <div className='textcontainer2'>
                    <p className='sgd'>SGD</p>
                    <p className='money'>
                    {account['total amount'].toFixed(2)}
                    </p>
                </div>
                <div className='line'></div>
                </div>
            </button>
          ))}
        </div>
      );
    };

export default AccountDetails;