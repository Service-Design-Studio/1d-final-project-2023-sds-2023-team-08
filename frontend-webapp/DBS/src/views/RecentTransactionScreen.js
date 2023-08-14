import React, {useState, useEffect} from 'react';
import '../components/styles/RecentTransactionStylesScreen.css';
import { useLocation, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import FTDTransactionsButton from '../components/widgets/FTDTransactionsButton';

// import transactionJSON from '../testdata/transactiondate.json'

function getTransactionsByDate(transactions, specificDate) {
  return transactions.filter(transaction => transaction.date === specificDate);
}

const RecentTransactionScreen = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [accountdetails, setAccountDetails] = useState([])
  const { userID, accountNumber } = useParams();
  const location = useLocation();

  useEffect(() => {
    
    const fetchtransactions = async () => {
      try {
        const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/all_transactions`);
        const response2 = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/home`)
        const parsedData = response.data;
        const parsedData2 = response2.data;
        console.log(parsedData)

        setTransactions(parsedData);
        setAccountDetails(parsedData2.account);

      } catch (error) {
        console.log(error);
      }
    };
    fetchtransactions();
  }, []);
  
  let filteredTransactions = transactions;

  if (accountNumber) {
    filteredTransactions = transactions.filter(transaction => transaction.transaction['account number'] === accountNumber);
  }

  const uniqueAccountNumbers = [...new Set(transactions.map(transaction => transaction.transaction["account number"]))];
  const uniqueDates = [...new Set(filteredTransactions.map(transaction => transaction.date))];
  
  return (
    <div className='maincontainer'>
      <div className='sticky'>
        <div className='RefuteDisputeHeader'>
          <button id = 'backarrow' onClick={() => navigate(`/${userID}/home`)} className='transparent'>
            <img src='/assets/back.png' className='back' />
          </button>
          <p className='RefuteDisputeHeaderText'>Recent Transactions</p>
        </div>
        
        <div className='filtercontainer'>
          <div className='scrollhorizontal'>
            {accountdetails.map((account, index) => (
            <button name = 'filtercontainer' id= {account} className='transparent' onClick={() => navigate(accountNumber === account['account number'] ? `/${userID}/recenttransaction` : `/${userID}/recenttransaction/${encodeURIComponent(account['account number'])}`)}>
              <div id = 'filterbox' className={account['account number'] === accountNumber  ? 'filterrectangleselected' : 'filterrectangleunselected'}>
                <p id = 'accountnames' className={account['account number'] === accountNumber  ? 'accnameselected' : 'accnameunselected'}>{account['account type']}</p>
                <p id = 'accountnumbers' className={account['account number'] === accountNumber  ? 'nameselected' : 'nameunselected'}>{account['account number']}</p>
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
                  <img src='/assets/expand.png' className='expandtransaction'/>
                </div>
              </div>
          </button> }

        <FTDTransactionsButton
          userID={userID}
          navigate={navigate}
        />  

{/*
        <button className='transparent' onClick={() => navigate(`/${userID}/FTDtransactionsall`)}>
          <div className='ftd'>
            <p className='ftdtext'>Fund Transfer Dispute Transactions</p>
            <img src='/assets/expand.png' className='expand'/>
          </div>
        </button>
*/}

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
                <button id= 'recentTransactionEntries' className='transparent' onClick={() =>  navigate(`/${userID}/${transactiondata.transaction["transaction ID"]}`, {state:location.pathname})}>
                <div className='transaction'>
                  <div className='transactionheadercontainer'>
                    <p className='transactiontitletext'>{transactiondata.transaction["transaction name"]}</p>
                    <img src='/assets/expand.png' className='expand'/>
                  </div>

                  <p className='transactiontype'>{transactiondata.transaction["transaction type"]}</p>
                  
                  <div id = 'transactiondetails' className='transactiondetails'>
                    <p id = 'account' className='account'>{transactiondata.transaction["account number"]}</p>
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
      <div className='bottomnav'>
          <BottomTabNavigator></BottomTabNavigator>
      </div>
    </div>
  );
};

export default RecentTransactionScreen;