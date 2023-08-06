import React, { useState } from 'react';
import '../../components/styles/fund transfer dispute/RefuteSuccessStyles.css';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const RaiseFTDSuccess = () => {
    const navigate = useNavigate();
    const { userID } = useParams();
    const location = useLocation();
    const FTDDetails = location.state;
    console.log(FTDDetails)

    return(
        <div className='RefuteDisputeMain'>
            <button onClick={() => navigate(`/${userID}/home`)} className='successtxtransparent'>X</button>

            <div className='successtxgreenbox'>
                <img src='/assets/greentick.png' className='successtxgreentick' />
            </div>
            <div style ={{padding:".5vw"}}></div>
            <p className='successheadertext'> Fund Transfer Dispute Raised</p>
            <div style ={{padding:"1vw"}}></div>
            <p className='successtxdate'>on {FTDDetails["date_and_time"]}</p>
            <div style ={{padding:"1vw"}}></div>
            
            <div className='popboxRS'>
                <div className='subpopboxRS'>
                    <p className='raisedonRS'>Transaction Date</p>
                    <p className='ansRS'>{FTDDetails["date"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Transaction Type</p>
                    <p className='ansRS'>{FTDDetails["transaction_type"]}</p>
                </div>
                <div className='subpopboxRS'>
                    <p className='qnRS'>Reason of Transfer Dispute</p>
                    <p className='ansRS'>{FTDDetails["reason"]}</p>
                </div>

                { FTDDetails['contact_details'].length > 0 && (
                    <div>
                        <div className='subpopboxRS'>
                            <p className='qnRS'>Correct Amount Of Transaction</p>
                            <p className='ansRS'>{FTDDetails["correct_amount"]}</p>
                        </div>
                        <div className='subpopboxRS'>
                            <p className='qnRS'>Disputee's Contact Details</p>
                            <p className='ansRS'>{FTDDetails["contact_details"]}</p>
                        </div>
                    </div>
                )}
                <div className='subpopboxRS'>
                    <p className='qnRS'>Comments</p>
                    <p className='uwuRS'>{FTDDetails["comments"]}</p>
                </div>
            </div>
            
            <p className='tncforrefund'>The other party will be notified of your Fund Transfer Dispute. No further action is required on your part.</p>
            <button id='closebutton' className='submitbutton1' onClick={()=>{}}>SHARE DISPUTE DETAILS</button>
        </div>

    );
};

export default RaiseFTDSuccess;