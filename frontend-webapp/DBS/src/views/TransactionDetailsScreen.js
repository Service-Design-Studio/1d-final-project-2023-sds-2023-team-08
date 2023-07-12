import React, {useState, useEffect} from 'react';
import FTDTransactionDetails from './fund transfer dispute/FTDTransactionDetails';
import NormalTransactionDetails from './others/NormalTransactionDetails';
import { useLocation, useNavigate, useParams  } from 'react-router-dom';
import axios from 'axios';


const TransactionDetailsScreen = () => {
    const navigate = useNavigate();
    const [FTDtransaction, setFTDtransaction] = useState(false);
    const { userID, transactionID } = useParams();
    const location = useLocation();
    const [TransactionDetailsJSON, setTransactionDetailsJSON] = useState([])
    const [DataCalled, setDataCalled] = useState(false)
    const pathname = location.state
    
    useEffect(() => {
      console.log("use effect is running")
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${transactionID}`);
          setTransactionDetailsJSON(response.data[0]);
          setFTDtransaction(response.data[0].transaction.transactiondetails.transaction['FTD'])
          setDataCalled(true)
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [location.pathname]); 

    return (
       DataCalled && (
          FTDtransaction ? (
            <FTDTransactionDetails FTDtransactions={TransactionDetailsJSON} prevpathname={pathname}/>
          ) : (
            <NormalTransactionDetails TransactionData={TransactionDetailsJSON} prevpathname={pathname}/>
          )
       )
    );
  };
  

export default TransactionDetailsScreen;