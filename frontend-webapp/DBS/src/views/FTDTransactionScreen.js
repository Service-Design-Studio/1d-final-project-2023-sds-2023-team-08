import React, {useState, useEffect} from 'react';
import '../components/styles/FTDTransactionScreenStyles.css';
import { useLocation, useNavigate, useParams  } from 'react-router-dom';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import FTDjson from '../testdata/fundtransferdispute.json'
import axios from 'axios';
import { useLayoutEffect } from 'react';

function getFTDTransactionsByDate(transactions, specificDate) {
  return transactions.filter(transaction => transaction.disputedate === specificDate);
}

const FTDTransactionScreen = () => {
  const navigate = useNavigate();
  const { userID } = useParams();
  const [FTDtransactions, setFTDTransactions] = useState([]);
  const [datafound, setdatafound] = useState(false)
  const location = useLocation();
  
  useEffect(() => {
    console.log("hello")
    const fetchFTDtransactions = async () => {
      try {
        const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/user/${userID}/transaction_detail_for_disputes_involving_user`);
        console.log(response.data)
        setFTDTransactions(response.data);
        setdatafound(true)
      } catch (error) {
        console.log(error);
      }
    };
    fetchFTDtransactions();
  }, [location.pathname]);
  

  const statusDictionary = {
    "Dispute Filed": {
      bgcolor: '#1D0C86',
      statustext: "AWAITING ACTION"
    },
    "Raised to DBS": {
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
    "Withdrawn": {
        bgcolor: "#7A7A7A",
        statustext: "WITHDRAWN"
    }
  };

  let uniqueFTDates = [];

  if (datafound) {
    uniqueFTDates = [...new Set(FTDtransactions.map(item => item.disputedate))];
    console.log(uniqueFTDates)
    console.log(FTDtransactions)
  }
  
  return (
   datafound && (
    <div className='maincontainer'>
        <div className='RefuteDisputeHeader'>
          <button id = 'backarrow' onClick={() => navigate(`/${userID}/home`)} className='transparent'>
            <img src='/assets/back.png' className='back' />
          </button>
          <p className='RefuteDisputeHeaderText'>Fund Disputes</p>
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
                            const {bgcolor, statustext} = statusDictionary[FTDtransactiondata.FTDdetails["status"]]
                            const sender = FTDtransactiondata.FTDdetails["user"] === "Sender";
                            console.log(bgcolor, statustext)

                            let updatedStatustext = statustext; 
                            if (bgcolor === '#1D0C86') {
                                updatedStatustext = sender ? "AWAITING ACTION" : "ACTION REQUIRED";}

                            return(
                                <button className='transparent' onClick={() => navigate(`/${userID}/${FTDtransactiondata.transactiondetails.transaction["transaction ID"]}`)}>
                                    <div className='transaction'>
                                        <div className='transactionheader'>
                                            <p className='transactiontitle'>{FTDtransactiondata.transactiondetails.transaction["transaction name"]}</p>
                                            <img src='/assets/expand.png' className='expandtransaction'/>                    
                                        </div>
                                        
                                        <p className='transactiontype2'>{FTDtransactiondata.transactiondetails.transaction["transaction type"]}</p>                 
                                        
                                        <div className='transactiondetails'>
                                            <p className='account'>{FTDtransactiondata.transactiondetails.transaction["account number"]}</p>
                                            <div className='rightcontainer'>
                                                <p className='sgd2'>SGD</p>
                                                <p className={FTDtransactiondata.transactiondetails.transaction["total amount"] < 0 ? "moneyout2" : "moneyin2"}>{FTDtransactiondata.transactiondetails.transaction["total amount"].toFixed(2)}</p>
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
    )
  );
};

export default FTDTransactionScreen;
