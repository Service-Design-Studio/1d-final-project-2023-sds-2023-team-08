import React, { useState } from 'react';
import '../../components/styles/fund transfer dispute/RefuteSuccessStyles.css';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const RefuteSuccess = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const TransactionDetails = location.state;

    return(
        <div className='RefuteDisputeMain'>
            <button onClick={() => navigate(`/${userID}/home`)} className='successtxtransparent'>X</button>

            <div className='successtxgreenbox'>
                <img src='/assets/greentick.png' className='successtxgreentick' />
            </div>

            <p className='successheadertext'> Refute Completed</p>
            <p className='successtxdate'>on {TransactionDetails["date and time"]}</p>
            
            <div className='popboxRS'>
                <div className='subpopboxRS'>
                    <p className='raisedonRS'>Raised On</p>
                    <p className='ansRS'>{TransactionDetails.disputedate}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Transaction Type</p>
                    <p className='ansRS'>{TransactionDetails.transaction.transactiondetails["transaction type"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason of Transfer Dispute</p>
                    <p className='ansRS'>{TransactionDetails.transaction.FTDdetails["reason"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Comments from Sender</p>
                    <p className='ansRS'>{TransactionDetails.transaction.FTDdetails["comments"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason for refuting dispute</p>
                    <p className='uwuRS'>{TransactionDetails["refute reason"]}</p>
                </div>
            </div>
            
            <p className='tncforrefund'>The sender will be notified of your refute. No further action is required on your part.</p>
            <button id='closebutton' className='submitbutton1' onClick={()=>{}}>SHARE TRANSFER DETAILS</button>
        </div>

    );
};

export default RefuteSuccess;