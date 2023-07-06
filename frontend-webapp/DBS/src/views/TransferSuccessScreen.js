import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import ResolveSuccess from './fund transfer dispute/ResolveSuccess';
import TransactionSucess from './paynow/TransactionSuccess';
import ftdrecipientjson from '../testdata/ftdrecipient.json';

const TransferSuccessScreen = () => {
    const navigate = useNavigate();
    const { userID, transactionID } = useParams();
    const location = useLocation();
    const transactionData = location.state;
    const [isresolveDispute, setisresolveDispute] = useState(false)

    useEffect(() => {
        setisresolveDispute(transactionData['dispute']);
      }, []);

    return (
      isresolveDispute ? (
        <ResolveSuccess transactionDetails={transactionData}/>
      ) : (
        <TransactionSucess transactionDetails={transactionData}/>
      )
    );
  };
  

export default TransferSuccessScreen;