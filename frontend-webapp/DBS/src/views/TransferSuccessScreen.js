import React, {useState, useEffect} from 'react';
import { useNavigate, useParams  } from 'react-router-dom';
import ResolveSuccess from './fund transfer dispute/ResolveSuccess';
import TransactionSucess from './paynow/TransactionSuccess';
import ftdrecipientjson from '../testdata/ftdrecipient.json';

const TransferSuccessScreen = () => {
    const navigate = useNavigate();
    const { userID, transactionID } = useParams();
    // const location = useLocation();
    // const transactionData = location.state;
    const FTDtransactions = ftdrecipientjson[1];
    const [isresolveDispute, setisresolveDispute] = useState(false)
    const isPaynowDispute = FTDtransactions['refund details']['recipient name'] !== 'nil'

    const transactionData = {
        "dispute": false,
        "transaction id":356362452636,
        "transfer from acc name":FTDtransactions['refund details']['transfer from acc name'],
        "transfer from acc number":FTDtransactions['refund details']['transfer from acc number'],
        "recipient name":isPaynowDispute ? FTDtransactions['refund details']['recipient name'] : "Disputing Party's account",
        "recipient acc": FTDtransactions['refund details']['recipient acc'],
        "total amount":FTDtransactions['refund details']['total amount'],
        "comments": "Resolving Dispute",
        "date and time": "6 July 2023 13:43",
        "day and date": "Thu, 6 July 2023",
        "transfer type": "FAST/IMMEDIATE"
    }

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