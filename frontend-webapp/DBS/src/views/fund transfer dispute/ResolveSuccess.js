import React, { useState, useEffect } from 'react';
import '../../components/styles/fund transfer dispute/ResolveSuccessStyles.css'
import { useNavigate, useParams } from 'react-router-dom';

import resolvesuccessjson from '../../testdata/resolvesuccess.json'

const ResolveSuccess = (props) => {
    const navigate = useNavigate();
    const {transactionDetails} = props;
    const {userID} = useParams();
    console.log(transactionDetails)
 
    return (
        <div className='RefuteDisputeMain'>
            <button onClick={() => navigate(`/${userID}/home`)} className='successtxtransparent'>X</button>
            <div className='successtxgreenbox'>
                <img src='/assets/greentick.png' className='successtxgreentick' />
            </div>

            <p className='successheadertext'>Successful</p>
            <p className='successtxdate'>on {transactionDetails["date_and_time"]}</p>

            <div className='successtxdescriptboxblack'>
                <p className='successtxdescriptboxblacktextop'> Amount in</p>
                <div className='successtxdescriptboxtransparent'>
                    <p className='successtxdescriptboxtransparentleft'> SGD</p>
                    <p className='successtxdescriptboxtransparentright'> {transactionDetails["total_amount"].toFixed(2)}</p>
                </div>
            </div>

            <div className='successtxdescriptbox'>

                <p className='successtxgreytextheadertitle'> From</p>
                <p className='successtxblacktextheader'> {transactionDetails["transfer_from_acc_name"]}</p>
                <p className='successtxgreytextheader2'> {transactionDetails["transfer_from_acc_number"]}</p>
                <p className='successtxgreytextheader'> To</p>
                <p className='successtxblacktextheader'> {transactionDetails["recipient_name"]}</p>
                <p className='successtxgreytextheader2'> Disputee's Account</p>
                <p className='successtxgreytextheader'> Transfer Type</p>
                <p className='successtxblacktextheader'> {transactionDetails["transfer_type"]}</p>
                <p className='successtxgreytextheader'> Your Comments</p>
                <p className='successtxblacktextheaderbottom'> {transactionDetails["comments"]}</p>
            </div>

            <button onClick={() => {}} className='TransferNow'>SHARE TRANSFER DETAILS</button>

        </div>
    );
};
export default ResolveSuccess;