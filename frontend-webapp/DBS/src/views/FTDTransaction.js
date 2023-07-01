import React, {useState, useEffect} from 'react';
import '../components/styles/FTDTransactionStyles.css';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import FTDjson from '../testdata/fundtransferdispute.json'

function getFTDTransactionsByDate(transactions, specificDate) {
  return transactions.filter(transaction => transaction.disputedate === specificDate);
}

const FTDTransaction = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [accountdetails, setAccountDetails] = useState([]);
  const { userID, accountNumber } = useParams();
  const FTDtransactions = FTDjson;

  const statusDictionary = {
    "Dispute Filed": {
      bgcolor: '#1D0C86',
      statustext: "AWAITING ACTION"
    },
    "Pending": {
      bgcolor: "#066DAF",
      statustext: "PENDING"
    },
    "Resolved": {
      bgcolor: "#007D23",
      statustext: "RESOLVED"
    },
    "Refuted": {
      bgcolor: "#950909",
      statustext: "REFUTED"
    },
    "Withdrawed": {
        bgcolor: "#7A7A7A",
        statustext: "WITHDRAWED"
    }
  };

  const uniqueFTDates = [...new Set(FTDtransactions.map(item => item.disputedate))];


  return (
    <div className='maincontainer'>
        <div className='header2transaction'>
          <button id = 'backarrow' onClick={() => navigate(`/${userID}/home`)} className='transparent'>
            <img src='/assets/back.png' className='back' />
          </button>
          <p className='headertext'>Fund Disputes</p>
        </div>

        <div className='scrollview'>
            {uniqueFTDates.map((date, index) => {

                const FTDTransactionwithSpecificDate = getFTDTransactionsByDate(FTDtransactions, date);
                return(
                    <div>
                        <div className='date2container'>
                        <p className='date'>{date}</p>
                        </div>

                        {FTDTransactionwithSpecificDate.map((FTDtransactiondata, index) => {
                            const {bgcolor, statustext} = statusDictionary[FTDtransactiondata.transaction.FTDdetails["status"]]
                            const sender = FTDtransactiondata.transaction.FTDdetails["user"] === "Sender";
                            console.log(bgcolor, statustext)

                            let updatedStatustext = statustext; 
                            if (bgcolor === '#1D0C86') {
                                updatedStatustext = sender ? "AWAITING ACTION" : "ACTION REQUIRED";}

                            return(
                                <button className='transparent' onClick={() => {}}>
                                    <div className='transaction'>
                                        <div className='transactionheader'>
                                            <p className='transactiontitle'>{FTDtransactiondata.transaction.transactiondetails["transaction name"]}</p>
                                            <img src='/assets/expand.png' className='expandtransaction'/>                    
                                        </div>
                                        
                                        <p className='transactiontype2'>{FTDtransactiondata.transaction.transactiondetails["transaction type"]}</p>                 
                                        
                                        <div className='transactiondetails'>
                                            <p className='account'>{FTDtransactiondata.transaction.transactiondetails["account number"]}</p>
                                            <div className='rightcontainer'>
                                                <p className='sgd2'>SGD</p>
                                                <p className={FTDtransactiondata.transaction.transactiondetails["total amount"] < 0 ? "moneyout2" : "moneyin2"}>{FTDtransactiondata.transaction.transactiondetails["total amount"].toFixed(2)}</p>
                                            </div>
                                        </div>
                                        
                                        <div className='statuscontainer'  style={{backgroundColor: bgcolor}}>
                                            <p className='statustext'>{updatedStatustext}</p>
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

export default FTDTransaction;
