import React, {useState, useEffect} from 'react';
import FTDTransactionDetails from './fund transfer dispute/FTDTransactionDetails';
import TransactionDetails from './others/TransactionDetails';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import TransactionJSON from '../testdata/ftddetail.json'

const TransactionDetailsScreen = () => {
    const navigate = useNavigate();
    const [FTDtransaction, setFTDtransactions] = useState(false);
    const { userID, transactionID } = useParams();
    const TransactionDetailsJSON = TransactionJSON[0]

    useEffect(() => {
        setFTDtransactions(TransactionDetailsJSON.transaction.transactiondetails['FTD']);
      }, []);

    return (
      FTDtransaction ? (
        <FTDTransactionDetails FTDtransactions={TransactionDetailsJSON}/>
      ) : (
        <TransactionDetails TransactionData={TransactionDetailsJSON}/>
      )
    );
  };
  

export default TransactionDetailsScreen;