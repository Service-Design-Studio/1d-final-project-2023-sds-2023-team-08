import React, { useState } from 'react';
import '../../components/styles/fund transfer dispute/RefuteSuccessStyles.css';
import { useNavigate, useParams } from 'react-router-dom';
import ftdrecipientjson from '../../testdata/ftdrecipient.json';


const RefuteSuccess = () => {
    const navigate = useNavigate();
    const { userID, accountNumber } = useParams();
    const FTDtransactions = ftdrecipientjson[0];
 
    return(
        <div className='overall1'>
            <button id= 'closebutton' className='closebuttonRS' onClick={()=>navigate(`/${userID}/home`)}>X</button>

            <div className='stampRS'>
                <img src = './assets/greentick.png' className='greentickrefundRS'/>
                <p className='refundstatusRS'>Refute Completed</p>
                <p className='refunddateRS'>on 26 Jun 2023 12:35</p>
            </div>
            
            <div className='popboxRS'>
                <div className='subpopboxRS'>
                    <p className='raisedonRS'>Raised On</p>
                    <p className='ansRS'>{FTDtransactions.disputedate}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Transaction Type</p>
                    <p className='ansRS'>{FTDtransactions.transaction.transactiondetails["transaction type"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason of Transfer Dispute</p>
                    <p className='ansRS'>{FTDtransactions.transaction.FTDdetails["sender reason"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Comments from Sender</p>
                    <p className='ansRS'>{FTDtransactions.transaction.FTDdetails["sender comments"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason for refuting dispute</p>
                    <p className='uwuRS'>{FTDtransactions.transaction.FTDdetails["recipient comments"]}</p>
                </div>
            </div>
            
            <p className='tncforrefund1'>The sender will be notified of your refute. No further action is required on your part.</p>
            <button id='closebutton' className='submitbutton1' onClick={()=>{}}>SHARE TRANSFER DETAILS</button>
        </div>

    );
};

export default RefuteSuccess;