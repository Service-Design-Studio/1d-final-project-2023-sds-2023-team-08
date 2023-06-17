import React from 'react';
import '../components/styles/RecentTransaction.css';
import { useNavigate, useParams  } from 'react-router-dom';
import transactionJSON from '../testdata/transactiondate.json'

function getTransactionsByDate(transactions, specificDate) {
  return transactions.filter(transaction => transaction.date === specificDate);
}

const Recenttransaction = () => {
  const navigate = useNavigate();
  const { accountNumber  } = useParams();
  const transactions = transactionJSON
  let filteredTransactions = transactions;

  if (accountNumber) {
    filteredTransactions = transactions.filter(transaction => transaction.transaction['account number'] === accountNumber);
  }

  const uniqueAccountNumbers = [...new Set(transactions.map(transaction => transaction.transaction["account number"]))];
  const uniqueDates = [...new Set(filteredTransactions.map(transaction => transaction.date))];

  return (
    <div className='maincontainer'>
      <div className='sticky'>
        <div className='headertransaction'>
          <button onClick={() => navigate('/')} className='transparent'>
            <img src={require('../../src/components/assets/back.png')} className='back' />
          </button>
          <p className='headertext'>Recent Transactions</p>
        </div>
        
        <div className='filtercontainer'>
          <div className='scrollhorizontal'>
            {uniqueAccountNumbers.map((account, index) => (
            <button className='transparent' onClick={() => navigate(accountNumber === account ? '/recenttransaction' : `/recenttransaction/${encodeURIComponent(account)}`)}>
              <div className={account === accountNumber  ? 'filterrectangleselected' : 'filterrectangleunselected'}>
                <p className='name'>{account}</p>
              </div>
            </button>
            ))}
          </div>
        </div>

        {accountNumber &&        
          <button className='transparent' onClick={() => {}}>
              <div className='transaction2'>
                <div className='transactionheader2'>
                  <div className='yellowline2'></div>
                  <p className='transactiontitle2'>All Transactions for {accountNumber}</p>
                  <img src={require('../../src/components/assets/expand.png')} className='expandtransaction'/>
                </div>
              </div>
          </button> }

        <button className='transparent' onClick={() => {}}>
          <div className='ftd'>
            <p className='ftdtext'>Fund Transfer Dispute Transactions</p>
            <img src={require('../../src/components/assets/expand.png')} className='expand'/>
          </div>
        </button>

      </div>

      <div className='scrollview'>
        
        {uniqueDates.map((date, index) => {
          const transactionsWithSpecificDate = getTransactionsByDate(filteredTransactions, date);
          
          return(
            <div>
              <div className='datecontainer'>
                <p className='date'>{date}</p>
              </div>

              {transactionsWithSpecificDate.map((transactiondata, index) => {
                return(
                <button className='transparent' onClick={() => {}}>
                <div className='transaction'>
                  <div className='transactionheader'>
                    <p className='transactiontitle'>{transactiondata.transaction["transaction name"]}</p>
                    <img src={require('../../src/components/assets/expand.png')} className='expand'/>
                  </div>

                  <p className='transactiontype'>{transactiondata.transaction["transaction type"]}</p>
                  
                  <div className='transactiondetails'>
                    <p className='account'>{transactiondata.transaction["account number"]}</p>
                    <div className='rightcontainer2'>
                      <p className='sgd1'>SGD</p>
                      <p className={transactiondata.transaction["total amount"] < 0 ? "moneyout" : "moneyin"}>{transactiondata.transaction["total amount"].toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </button>
              );
              })}
            </div>
        );
        })}

      </div>
    </div>
  );
};

export default Recenttransaction;
