import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ReviewRefuteStyles.css';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import TransactionJSON from '../../testdata/ftddetail.json'


const ReviewRefute = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const refutereason = location.state["refute reason"];
    const transactionID = location.state["transaction ID"]
    const [csrfToken, setCsrfToken] = useState('');
    const [TransactionDetailsJSON, setTransactionDetailsJSON] = useState([])


    useEffect(() => {
        const fetchFTDtransactiondata = async () => {
        try {
            const response = await axios.get(`https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${transactionID}`); //using transactionID here
            const transactiondetails = response.data;
            setTransactionDetailsJSON(transactiondetails[0])
    
            const response2 = await axios.get('https://dbs-backend-service-ga747cgfta-as.a.run.app/csrf_token'); 
            const Token = response2.data.csrfToken;
            setCsrfToken(Token);
    
        } catch (error) {
            console.log(error);
        }
        };
        fetchFTDtransactiondata();
    }, []);


  const handleSubmit = async(event) => {
    event.preventDefault();
    let TransactionDetails= TransactionDetailsJSON

    try{
        const now = new Date();
        const currentDay = now.toLocaleDateString('en-GB', { weekday: 'short' }); 
        const currentDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).replace(',', '');
        const currentHour = now.getHours().toString().padStart(2, '0'); 
        const currentMinutes = now.getMinutes().toString().padStart(2, '0'); 
        const currentTime = `${currentHour}:${currentMinutes}`;

        TransactionDetails['date_and_time'] = `${currentDate} ${currentTime}`
        TransactionDetails['day_and_date'] =  `${currentDay}, ${currentDate}`
        TransactionDetails['refutereason'] = refutereason
        TransactionDetails['refute'] = true
        console.log(TransactionDetails)

        const response = await axios.post(
            `https://dbs-backend-service-ga747cgfta-as.a.run.app/users/${userID}/transactions/${transactionID}/refute_dispute`,
            JSON.stringify(TransactionDetails),
            {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
                'X-Requested-With': 'XMLHttpRequest'
            }
            }
        );
        if (response.data.success) {
            navigate(`/${userID}/success`, {state: TransactionDetails})
        }

        else{
        }
    }

    catch (error) {
        console.log('Error:', error.toJSON());
    }
    };

    if (csrfToken != '') {
        console.log(csrfToken)
        console.log(TransactionDetailsJSON)
    }
    return (
        csrfToken != '' && (
        <div className='RefuteDisputeMain'>
            <div className='RefuteDisputeHeader'>
                <button id = 'backarrow' onClick={() => navigate(`/${userID}/refutedispute/${transactionID}`)} className='transparent'>
                    <img src='/assets/back.png' className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Review Dispute</p>
            </div>

            <div className='transactionmoney'>
                <p className='sgddispute'> SGD</p>
                <p className={TransactionDetailsJSON.transaction.transactiondetails.transaction["total amount"] < 0 ? 'reremoneytext2out' : 'reremoneytext2in'}>{TransactionDetailsJSON.transaction.transactiondetails.transaction["total amount"].toFixed(2)}</p>
            </div>

            <div className='transactdatecontainer'>
                <p className='transactiondatefordispute'>{TransactionDetailsJSON.transaction.transactiondetails.transaction["transaction date"]}</p>
            </div>

            <div className='reredescriptionbox'>
                <p className='rereboxtextheadertitle'> Raised On</p>
                <p className='rereboxtextcontent'> {TransactionDetailsJSON.disputedate}</p>
                <p className='rereboxtextheader'> Transaction Type</p>
                <p className='rereboxtextcontent'> {TransactionDetailsJSON.transaction.transactiondetails.transaction["transaction type"]}</p>
                <p className='rereboxtextheader'> Reason of Transfer Dispute</p>
                <p className='rereboxtextcontent'> {TransactionDetailsJSON.transaction.FTDdetails["reason"]}</p>
                <p className='rereboxtextheader'> Comments from Dispute Party</p>
                <p className='rereboxtextcontent'> {TransactionDetailsJSON.transaction.FTDdetails["comments"]}</p>
                <p className='rereboxtextheader'> Reason for refuting dispute</p>
                <p className='rereboxtextcontentbottom'> {refutereason}</p>
            </div>

            <p className='rerewarntext'> Note: It is an offence under the Penal Code for the 
            recipient to retain or use the funds after being informed that it was sent by mistake. 
            The sender may consider lodging a police report. <br></br> <br></br> 
            <b>Your reason can be seen by the sender.</b>
            </p>

            <button onClick={handleSubmit} className='SubmitButtonRed'>REFUTE DISPUTE</button>
        </div>
    )
    );
};

export default ReviewRefute;