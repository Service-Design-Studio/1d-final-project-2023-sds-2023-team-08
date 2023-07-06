import React, {useState, useEffect} from 'react';
import FTDTransactionDetails from './fund transfer dispute/FTDTransactionDetails';
import TransactionDetails from './others/TransactionDetails';
import { useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';
import TransactionJSON from '../testdata/ftddetail.json'

const TransactionDetailsScreen = () => {
    const navigate = useNavigate();
    const [FTDtransaction, setFTDtransaction] = useState(false);
    const { userID, transactionID } = useParams();
    const TransactionDetailsJSON = TransactionJSON[0]

    useEffect(() => {
        setFTDtransaction(TransactionDetailsJSON.transaction.transactiondetails['FTD']);
      }, []);

  // const [TransactionDetailsJSON, setTransactionDetailsJSON] = useState([])
  // useEffect(() => {
  //   const fetchFTDtransactiondata = async () => {
  //     try {
  //       const response = await axios.get(`link to all FTD transactions`);
  //       const transactiondetails = response.data;
  //       console.log(FTDtransactions)
  //       setTransactionDetailsJSON[transactiondetails[0]]
  //       setFTDtransaction(TransactionDetailsJSON.transaction.transactiondetails['FTD']);
  //
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchFTDtransactiondata();
  // }, []);

    return (
      FTDtransaction ? (
        <FTDTransactionDetails FTDtransactions={TransactionDetailsJSON}/>
      ) : (
        <TransactionDetails TransactionData={TransactionDetailsJSON}/>
      )
    );
  };
  

export default TransactionDetailsScreen;